import { useEffect, useState } from "react";
import profileimg from "../assets/image/favicon.svg";
// import Blogbanner from "../assets/image/blog-banner.jpg";

export default function Bloglist() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.bthawk.com/api/blog_api");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (result.data) {
          setData(result.data);
        }
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div className="w-11/12 mx-auto mt-12">
        <h1 className="text-2xl">Latest Blog</h1>
      </div>
      <div className="grid w-11/12 gap-4 mx-auto my-10 lg:grid-cols-3">
        {data.map((item, index) => (
          <div key={index} className="blog-card">
            <img src={item.image} className="rounded-xl" alt="" />
            <div className="pt-3 blog-card-content">
              <h2 className="text-lg">{item.blog_title}</h2>
              <div className="grid grid-cols-2 blog-card-footer">
                <div className="flex p-2">
                  <img src={profileimg} alt="" className="w-6 mr-1" />
                  <span> BTHAWK</span>
                </div>
                <div className="flex p-2">
                  <img src={profileimg} alt="" className="w-6 mr-1" />
                  <span> BTHAWK</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
