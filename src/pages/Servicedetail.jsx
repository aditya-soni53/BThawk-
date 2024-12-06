import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Topbanner from '../component/Topbanner'
import servicedetaibanner from '../assets/image/servicedetail.svg'
import Servicedata from '../component/Servicedata'

export default function Servicedetail()  {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://www.bthawk.com/api/blog_api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "serviceDetailFetch", serviceId: serviceId }),
        });

        if (!response.ok) throw new Error("Failed to fetch service details");
        const result = await response.json();
        if (result.status === 1) {
          setService(result.data);
          console.log(result.data); // Show data in console
        } else {
          throw new Error(result.message || "Service not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [serviceId]);

  if (loading) return  <div className="grid w-full h-96 place-content-center">
  <span className="loader"></span>
</div>;
  if (error) return <div className="grid w-full h-96 place-content-center">
  Error: {error}
</div>;

  return (
    <div>
         <Topbanner banner={servicedetaibanner} heading={service}/>
         <Servicedata servicedata={service} />
      
      
    </div>
  );
};

