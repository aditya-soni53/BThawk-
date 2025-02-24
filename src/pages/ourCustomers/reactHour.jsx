import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 28.6139, // Default latitude (Delhi)
  lng: 77.209, // Default longitude (Delhi)
};

const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your API key

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const [currentLocation, setCurrentLocation] = useState(center);
  const [stateName, setStateName] = useState("");

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

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div>
      <h1>React Google Maps Example</h1>
      <h2>Current State: {stateName}</h2>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={10}
      >
        <Marker position={currentLocation} />
      </GoogleMap>
    </div>
  );
}

export default App;
