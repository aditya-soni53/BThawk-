import React, { useState, useEffect } from "react";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [filteredReviews, setFilteredReviews] = useState([]); // State for filtered reviews
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling
  const [selectedState, setSelectedState] = useState(""); // State for selected state
  const [userLocation, setUserLocation] = useState(null); // State for user's location

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
          setFilteredReviews(result.data); // Initialize filtered reviews
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

  // Fetch user location on component mount
  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            // Fetch state name from lat/lng using geocoding API
            fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY&language=hi`
            )
              .then((res) => res.json())
              .then((data) => {
                const state = data.results[0]?.components?.state || "";
                setUserLocation(state);
                filterReviewsByState(state); // Auto filter based on user location
              })
              .catch((err) => console.error("Error fetching location:", err));
          },
          (err) => console.error("Geolocation error:", err)
        );
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    };

    fetchLocation();
  }, [reviews]); // Ensure it re-runs if reviews data changes

  // Filter reviews based on state
  const filterReviewsByState = (state) => {
    if (state) {
      const filtered = reviews.filter((review) => review.state === state);
      setFilteredReviews(filtered);
    } else {
      setFilteredReviews(reviews); // Show all reviews if no state is selected
    }
  };

  // Handle state selection change
  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    filterReviewsByState(state);
  };

  // Loading state
  if (loading)
    return (
      <div className="grid w-full h-96 place-content-center">
        <span className="loader"></span>
      </div>
    );

  // Error state
  if (error)
    return (
      <div className="grid w-full h-96 place-content-center">
        Error: {error}
      </div>
    );

  // Render reviews
  return (
    <div>
      <h1>ग्राहक समीक्षाएँ</h1>

      {/* State Filter Dropdown */}
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

      {/* Show user location */}
      <p>
        {userLocation
          ? `आपके राज्य की समीक्षाएँ: ${userLocation}`
          : "स्थान खोजा जा रहा है..."}
      </p>

      {/* Filtered Reviews List */}
      {filteredReviews.length > 0 ? (
        <ul>
          {filteredReviews.map((review) => (
            <li key={review.id}>
              <h2>{review.client_name}</h2>
              <p>
                <strong>शहर:</strong> {review.city}, <strong>राज्य:</strong>{" "}
                {review.state}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>चयनित राज्य के लिए कोई समीक्षाएँ उपलब्ध नहीं हैं।</p>
      )}
    </div>
  );
}
