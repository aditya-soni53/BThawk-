import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

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
  const [spinner, setSpinner] = useState(false);
  const [currentLocation, setCurrentLocation] = useState([]);
  const [userState, setUserState] = useState("");

  const GOOGLE_MAPS_API_KEY = "AIzaSyBV68ITzQRel6iDKUCvMzGHh9YyPO5jlGw";

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  // });

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
          // setStateName(stateInfo.long_name);
          console.log(stateInfo.long_name);
          setUserState(stateInfo.long_name);
        } else {
          // setStateName("");
          setUserState("");
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

  // Fetch reviews on component mount
  const fetchReviews = async () => {
    // setLoading(true);
    try {
      const response = await fetch("https://www.bthawk.com/api/blog_api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "reviewDetailsFetch" }),
      });

      if (!response.ok) throw new Error("Failed to fetch reviews");

      const result = await response.json();
      if (result.status === 1) {
        setReviews(result.data);
        setFilteredReviews(result.data); // Set initial state
        // console.log(reviews);
      } else {
        console.log("State not found");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {

    fetchReviews();
  }, []);

  // Fetch user's state using geolocation
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

  useEffect(() => {
    fetchReviews();
  }, [selectedState])

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

  const handleLoadMore = () => {
    setSpinner(true); // Show loader
    setTimeout(() => {
      setVisibleReviewsCount((prevCount) => prevCount + 8); // Increment visible reviews
      setSpinner(false); // Hide loader after data is "fetched"
    }, 1000); // Simulated fetch time
  };

  // Helper function to extract YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    // console.log(url);

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
    <div className="w-11/12 m-auto mb-16">
      <h1 className="hidden">ग्राहक समीक्षाएँ</h1>
      <p className="hidden">
        {userLocation
          ? `आपके राज्य की समीक्षाएँ: ${userLocation}`
          : "स्थान खोजा जा रहा है..."}
      </p>

      <div className="my-6">
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
        <div className="review-list grid lg:grid-cols-4 md:grid-cols-2  gap-x-10">
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
        <div className="load-more-container text-center mt-2 mb-2">
          {spinner ? (
            <div className="grid w-full h-96 place-content-center">
              <span className="loader"></span>
            </div>
          ) : (
            <button
              onClick={handleLoadMore} className="load-more-button primary-btn " >
              {" "}
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}
