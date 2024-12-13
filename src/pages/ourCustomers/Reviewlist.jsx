import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function ReviewList() {
  const [reviews, setReviews] = useState([]); // All reviews
  const [filteredReviews, setFilteredReviews] = useState([]); // Filtered reviews
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedState, setSelectedState] = useState(""); // Selected state
  const [userLocation, setUserLocation] = useState(null); // User's state location
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(8); // Count of visible reviews

  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const GOOGLE_MAPS_API_KEY = 'AIzaSyApEkdVD7asaPM5maTuebk4QZRsuJmj8E8';

  // Fetch reviews on component mount
  const getAddressFromLatLng = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            latlng: `${latitude},${longitude}`,
            key: GOOGLE_MAPS_API_KEY,
          },
        }
      );

      if (response.data.status === 'OK') {
        const addressComponents = response.data.results[0].address_components;
        
        // State ko address components se dhoondo
        const stateInfo = addressComponents.find((component) =>
          component.types.includes('administrative_area_level_1')
        );

        if (stateInfo) {
          console.log('State:', stateInfo.long_name); // State ka naam
        } else {
          console.log('State not found');
        }
      } else {
        console.error('Geocoding API error:', response.data.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  // Function to fetch state using Geocoding API
  const getStateFromLatLng = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            latlng: `${latitude},${longitude}`,
            key: GOOGLE_MAPS_API_KEY,
          },
        }
      );

      if (response.data.status === "OK") {
        const addressComponents = response.data.results[0].address_components;
        const stateInfo = addressComponents.find((component) =>
          component.types.includes("administrative_area_level_1")
        );
        if (stateInfo) {
          setStateName(stateInfo.long_name);
        } else {
          setStateName("State not found");
        }
      } else {
        console.error("Geocoding API error:", response.data.status);
      }
    } catch (error) {
      console.error("Error fetching state:", error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
          getStateFromLatLng(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation not supported by this browser.");
    }
  }, []);


  // Fetch user's state using geolocation
  useEffect(() => {
    const fetchUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;

              // Fetch state using geocoding API
              const geoResponse = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY&language=hi`
              );
              const geoData = await geoResponse.json();
              const state = geoData.results[0]?.components?.state || "";

              if (state) {
                setUserLocation(state);
                prioritizeReviewsByState(state); // Show reviews for user location
              }
            } catch (err) {
              console.error("Error fetching location data:", err);
            }
          },
          (err) => {
            console.error("Geolocation error:", err);
          },
          { enableHighAccuracy: true }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);

            // Geocoding API call
            getAddressFromLatLng(latitude, longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.log('Browser does not support geolocation');
      }
    };
    
    fetchUserLocation();
    getLocation();
  }, [reviews]);

  useEffect(() => {

  }, []);

  // Prioritize reviews from user's state
  const prioritizeReviewsByState = (state) => {
    if (state) {
      const normalizedState = state.trim().toLowerCase();
      const reviewsFromState = reviews.filter(
        (review) => review.state.trim().toLowerCase() === normalizedState
      );
      const otherReviews = reviews.filter(
        (review) => review.state.trim().toLowerCase() !== normalizedState
      );
      setFilteredReviews([...reviewsFromState, ...otherReviews]);
    }
  };

  // Handle manual state selection change
  const handleStateChange = (value) => {
    setSelectedState(value);
    console.log(value);

    if (selectedState) {
      const normalizedState = selectedState.trim().toLowerCase();
      const filtered = reviews.filter(
        (review) => review.state.trim().toLowerCase() === normalizedState
      );
      setFilteredReviews(filtered);
    } else {
      setFilteredReviews(reviews); // Show all reviews if no state is selected
    }
  };

  // Handle "Load More" button click
  const handleLoadMore = () => {
    setVisibleReviewsCount((prevCount) => prevCount + 8);
  };

  // Helper function to extract YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    console.log(url);

    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:shorts\/|(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=))|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  // State Functionality for scrolling
  const updateArrows = () => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    setShowLeftArrow(scrollContainer.scrollLeft > 0);
    setShowRightArrow(
      scrollContainer.scrollLeft + scrollContainer.offsetWidth <
        scrollContainer.scrollWidth
    );
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    setTimeout(updateArrows, 300);
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    setTimeout(updateArrows, 300);
  };

  // Render loading state
  if (loading) {
    return (
      <div className="grid w-full h-96 place-content-center">
        <span className="loader"></span>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="grid w-full h-96 place-content-center">
        <p>{error.message || "Something went wrong"}</p>
      </div>
    );
  }

  // Render reviews
  return (
    <div>
      <h1 className="hidden">ग्राहक समीक्षाएँ</h1>
      {/* Dropdown for manual state selection */}
      {/* <label>
        राज्य का चयन करें:
        <select value={selectedState} onChange={handleStateChange}>
          <option value="">सभी राज्य</option>
          {[...new Set(reviews.map((review) => review.state))].map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label> */}

      {/* Display user location */}
      <p className="hidden">
        {userLocation
          ? `आपके राज्य की समीक्षाएँ: ${userLocation}`
          : "स्थान खोजा जा रहा है..."}
      </p>

      <div className="m-3">
        <div className="relative w-full flex items-center overflow-hidden bg-gray-800 p-2">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              className="absolute left-2 z-10 p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600"
              onClick={scrollLeft}
            >
              &#8249;
            </button>
          )}

          {/* Scrollable Buttons */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth"
            onScroll={updateArrows}
          >
            <button
              className={`px-4 py-2 rounded-full border border-gray-400  w-full whitespace-nowrap ${
                selectedState === ""
                  ? "text-black bg-white font-semibold "
                  : " text-white"
              }`}
              onClick={() => handleStateChange("")}
            >
              All
            </button>
            {/* {[...Array(45)].map((_, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full border border-gray-400 text-white"
            >
              State
            </button>
          ))} */}

            {[...new Set(reviews.map((review) => review.state))].map(
              (state) => (
                <button
                  key={state}
                  className={`px-4 py-2 rounded-full border border-gray-400  w-full whitespace-nowrap ${
                    selectedState === state
                      ? "text-black bg-white font-semibold "
                      : " text-white"
                  }`}
                  onClick={() => handleStateChange(state)}
                >
                  {state}
                </button>
              )
            )}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              className="absolute right-2 z-10 p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600"
              onClick={scrollRight}
            >
              &#8250;
            </button>
          )}
        </div>
      </div>

      {/* Render filtered reviews */}
      {filteredReviews.length > 0 ? (
        <div className="review-list grid sm:grid-cols-4 gap-4  p-4">
          {filteredReviews.slice(0, visibleReviewsCount).map((review) => {
            const embedUrl = getYouTubeEmbedUrl(review.video);
            return (
              // <div className="review-card" key={review.id}>
              //   <h2>{review.client_name}</h2>
              //   <p>
              //     <strong>शहर:</strong> {review.city}, <strong>राज्य:</strong>{" "}
              //     {review.state}
              //   </p>
              //   {embedUrl ? (
              //     <iframe
              //       loading="lazy"
              //       width="100%"
              //       height="200"
              //       src={embedUrl}
              //       frameBorder="0"
              //       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              //       allowFullScreen
              //     ></iframe>
              //   ) : (
              //     <p>वीडियो उपलब्ध नहीं है।</p>
              //   )}
              // </div>
              <div key={review.id} className="reviewCard overflow-hidden">
                <div className="thumbnail">
                  <iframe
                    width="100%"
                    height="350"
                    src={embedUrl}
                    frameBorder={1}
                  ></iframe>
                </div>
                {/* <h5 className="reviewCardTitle">{review.client_name}</h5> */}
                {/* <p>{embedUrl}</p> */}
              </div>
            );
          })}
        </div>
      ) : (
        <p>चयनित राज्य के लिए कोई समीक्षाएँ उपलब्ध नहीं हैं।</p>
      )}

      {/* Load More button */}
      {visibleReviewsCount < filteredReviews.length && (
        <div className="load-more-container text-center mt-2 mb-2"></div>
      )}
    </div>
  );
}
