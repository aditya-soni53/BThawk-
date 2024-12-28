import { useEffect, useState } from "react";
import Topbanner from "../../component/layout/topBanner/Topbanner";
import Blogbanner from "../../assets/image/blog-banner.jpg";

export default function Service() {
  const [services, setServices] = useState([]); // State for services
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://www.bthawk.com/api/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "serviceListFetch" }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text(); // Get raw text
        if (!text) throw new Error("Empty response from server");

        const result = JSON.parse(text); // Parse JSON safely
        if (result.status === 1) {
          setServices(result.data); // Set services data
        } else {
          throw new Error(result.message || "No services found");
        }
      } catch (err) {
        setError(err.message); // Capture error message
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Topbanner banner={Blogbanner} />
      <div>
        <h1>All Services</h1>
        <div>
          {services.length > 0 ? (
            services.map((service) => (
              <div key={service.id} style={{ marginBottom: "20px" }}>
                <h2>{service.name}</h2>
                <img
                  src={service.photo}
                  alt={service.name}
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <p>{service.description}</p>
              </div>
            ))
          ) : (
            <p>No services available</p>
          )}
        </div>
      </div>
    </>
  );
}
