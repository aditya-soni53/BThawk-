import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Topbanner from "../component/layout/topBanner/Topbanner";
import servicedetaibanner from "../assets/image/servicedetail.webp";
import Servicedata from "../component/Servicedata";

export default function Servicedetail() {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = window.location.href;
  const basePath = window.location.origin;

  useEffect(() => {
    const fetchServiceData = async () => {
      setLoading(true);

      try {
        const res = await axios.post(`https://www.bthawk.com/api/api`, {
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
      <Helmet>
        <title>{service?.meta_title}</title>
        <meta name="description" content={service?.meta_description} />
        <link rel="canonical" href={url} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={service?.meta_title} />
        <meta property="og:description" content={service?.meta_description} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta property="twitter:domain" content={basePath} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={service?.meta_title} />
        <meta name="twitter:description" content={service?.meta_description} />
      </Helmet>
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
