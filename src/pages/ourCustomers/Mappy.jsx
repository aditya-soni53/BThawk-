import axios from "axios";
import React, { useState } from "react";

function Mappy() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!latitude || !longitude) {
      setError("Please enter both latitude and longitude.");
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
      if (address.state) {
        setState(address.state); // Set state (you can also extract other parts of the address)
        setError("");
      } else {
        setState("");
        setError("State information not found.");
      }
    } catch (error) {
      setError("An error occurred while fetching the data.");
      setState("");
    }
  };

  return (
    <div>
      <h1>Location Lookup</h1>

      <input
        type="number"
        placeholder="Enter Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />

      <button onClick={handleSubmit}>Get State</button>

      {state && (
        <p>
          <strong>State:</strong> {state}
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Mappy;
