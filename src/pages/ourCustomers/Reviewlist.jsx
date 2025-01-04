import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]); // All reviews
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedState, setSelectedState] = useState("All"); // Selected state
  const [userLocation, setUserLocation] = useState(null); // User's state location
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(8); // Count of visible reviews
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [spinner, setSpinner] = useState(false);
  const [smallLoader, SetsmallLoader] = useState(false);
  const [currentLocation, setCurrentLocation] = useState([]);
  const [userState, setUserState] = useState("");
  const [stateList, setStateList] = useState([]);

  // Fetch State
  const fetchState = async () => {
    const res = await axios.post(`https://www.bthawk.com/api/api`, {
      type: "getStateList",
    });

    if (res.data.status === 1) {
      setStateList(res.data.data);
      console.log(res.data.data);
    }
  };
  useEffect(() => {}, []);

  // Function to fetch state using Geocoding API
  const getStateFromLatLng = async (latitude, longitude) => {
    // console.log("working");

    if (!latitude || !longitude) {
      console.log("Please enter both latitude and longitude.");
      return;
    }

    try {
      // Make a request to Nominatim API for reverse geocoding
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse`,
        {
          params: {
            lat: latitude,
            lon: longitude,
            format: "json",
            addressdetails: 1, // Ensures detailed address information
          },
        }
      );

      const address = response.data.address;
      if (address) {
        // setUserState(address.state); // Set state (you can also extract other parts of the address)
        // console.log(address.state);
        setSelectedState(address.state);
      } else {
        setSelectedState("All");
        setError("State information not found.");
      }
    } catch (error) {
      setError("An error occurred while fetching the data.");
      setUserState("");
    }
  };

  const locationToggle = () => {
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
  };

  useEffect(() => {
    locationToggle();
    fetchState();
  }, []);

  const FetchReviews = async () => {
    // console.log(selectedState);
    SetsmallLoader(true);

    const res = await axios.post(`https://www.bthawk.com/api/api`, {
      type: "stateWiseReviewFetch",
      state: selectedState,
    });
    // console.log(res);
    if (res.data.status === 1) {
      setReviews(res.data.data);
      setLoading(false);
      SetsmallLoader(false);
    }
  };

  useEffect(() => {
    FetchReviews();
  }, []);

  useEffect(() => {
    FetchReviews();
  }, [selectedState]);

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
        <div className="relative rounded-xl flex items-center w-full p-2 overflow-hidden bg-gray-800">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              className="absolute z-10 p-2 text-white bg-gray-700 rounded-full left-2 hover:bg-gray-600"
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
                selectedState === "All"
                  ? "text-black bg-white font-semibold "
                  : " text-white"
              }`}
              onClick={() => setSelectedState("All")}
            >
              All
            </button>
            {stateList.map((state) => (
              <button key={state} className={`px-4 py-2 rounded-full border border-gray-400  w-full whitespace-nowrap 
                ${selectedState === state ? "text-black bg-white font-semibold " : " text-white"}`}
                onClick={() => {setSelectedState(state);}}>
                {state[0]} ({state[1]})
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              className="absolute z-10 p-2 text-white bg-gray-700 rounded-full right-2 hover:bg-gray-600"
              onClick={scrollRight}
            >
              &#8250;
            </button>
          )}
        </div>
      </div>

      {/* Render filtered reviews */}
      {smallLoader === false ? (
        <div>
          {reviews.length > 0 ? (
            <div className="grid review-list lg:grid-cols-4 md:grid-cols-2 gap-x-10">
              {reviews.slice(0, visibleReviewsCount).map((review) => {
                const url = getYouTubeEmbedUrl(review.review_video_link);
                return (
                  <div key={review.id} className="overflow-hidden reviewCard">
                    <div className="thumbnail">
                      <iframe
                        width="100%"
                        height="350"
                        src={url}
                        frameBorder={1}
                      ></iframe>
                    </div>
                    <div className="text-center my-2 mt-3">
                      <b className="reviewCardTitle">{review.client_name}</b>
                      <p className="leading-none">({review.state_en})</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>चयनित राज्य के लिए कोई समीक्षाएँ उपलब्ध नहीं हैं।</p>
          )}
        </div>
      ) : (
        <div className="grid w-full h-96 place-content-center">
          <span className="loader"></span>
        </div>
      )}

      {/* Load More button */}

      <div className="mt-2 mb-2 text-center load-more-container">
        {spinner ? (
          <div className="grid w-full h-96 place-content-center">
            <span className="loader"></span>
          </div>
        ) : (
          <button
            onClick={handleLoadMore}
            className="load-more-button primary-btn "
          >
            {" "}
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
