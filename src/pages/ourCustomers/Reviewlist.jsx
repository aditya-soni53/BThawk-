import React, { useState, useEffect } from "react";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]); // All reviews
  const [filteredReviews, setFilteredReviews] = useState([]); // Filtered reviews
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedState, setSelectedState] = useState(""); // Selected state
  const [userLocation, setUserLocation] = useState(null); // User's state location
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(12); // Count of visible reviews

  // Fetch reviews on component mount
  useEffect(() => {
    const fetchReviews = async () => {
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
        } else {
          throw new Error(result.message || "No reviews found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
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

    fetchUserLocation();
  }, [reviews]);

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
  const handleStateChange = (event) => {
    const selected = event.target.value;
    setSelectedState(selected);
    if (selected) {
      const normalizedState = selected.trim().toLowerCase();
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
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
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
        <p>Error: {error}</p>
      </div>
    );
  }

  // Render reviews
  return (
    <div>
      <h1>ग्राहक समीक्षाएँ</h1>

      {/* Dropdown for manual state selection */}
      <label>
        राज्य का चयन करें:
        <select value={selectedState} onChange={handleStateChange}>
          <option value="">सभी राज्य</option>
          {[...new Set(reviews.map((review) => review.state))].map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>

      {/* Display user location */}
      <p>
        {userLocation
          ? `आपके राज्य की समीक्षाएँ: ${userLocation}`
          : "स्थान खोजा जा रहा है..."}
      </p>

      {/* Render filtered reviews */}
      {filteredReviews.length > 0 ? (
        <div className="review-list">
          {filteredReviews.slice(0, visibleReviewsCount).map((review) => {
            const embedUrl = getYouTubeEmbedUrl(review.video);
            return (
              <div className="review-card" key={review.id}>
                <h2>{review.client_name}</h2>
                <p>
                  <strong>शहर:</strong> {review.city}, <strong>राज्य:</strong>{" "}
                  {review.state}
                </p>
                {embedUrl ? (
                  <iframe
                    loading="lazy"
                    width="100%"
                    height="200"
                    src={embedUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p>वीडियो उपलब्ध नहीं है।</p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p>चयनित राज्य के लिए कोई समीक्षाएँ उपलब्ध नहीं हैं।</p>
      )}

      {/* Load More button */}
      {visibleReviewsCount < filteredReviews.length && (
        <div className="load-more-container">
          <button onClick={handleLoadMore} className="load-more-button">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
