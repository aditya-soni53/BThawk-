import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Topbanner from "../component/layout/topBanner/Topbanner";
import servicedetaibanner from "../assets/image/servicedetail.webp";
import Servicedata from "../component/Servicedata";

export default function Servicedetail() {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceData = async () => {
      setLoading(true);

      try {
        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}`, {
          type: "serviceDetailFetch",
          serviceId: serviceId,
        });

        // console.log(res.data.status);

        // if() throw new Error("Failed to fetch service details");
        if (res.data.status === 1) {
          setService(res.data.data);
          // console.log(res.data.data); // Show data in console
        } else {
          throw new Error(result.message || "Service not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceId]);

  return (
    <div>
      <Topbanner banner={servicedetaibanner} heading={service} />
      {loading == true ? (
        <div className="grid justify-center w-full h-96 place-content-center justify-items-center">
          <span className="loader"></span>
          <span className="mt-4 font-semibold ">Loading Service</span>
        </div>
      ) : (
        <Servicedata servicedata={service} />
      )}
    </div>
  );
}
