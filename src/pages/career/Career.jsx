import React, { useEffect, useState } from "react";
import Topbanner from "../../component/layout/topBanner/Topbanner";
import Blogbanner from "../../assets/image/career.jpg";
import Listicon from "../../assets/image/list-icon.svg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Career() {
  const [jobs, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setSpinner(true);
      try {
        const res = await axios.post(
          `${"https://www.bthawk.com/api/blog_api"}`,
          {
            type: "career",
          }
        );

        console.log(res);
        if (res.data.status === 1) {
          setJob(res.data.data);
          console.log(res.data);
        } else {
          throw new Error(result.message || "Service not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        setSpinner(false);
      }
    };
    fetchJobs();
  }, []);

  if (error)
    return (
      <div className="grid w-full h-96 place-content-center">
        Error: {error}
      </div>
    );

  return (
    <>
      <Topbanner banner={Blogbanner} />
      {spinner ? (
        <div className="grid w-full h-96 place-content-center">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <div className="w-11/12 mx-auto  mt-10">
            <h1 className="text-2xl">All Job</h1>
          </div>
          <div className="w-11/12 mx-auto grid grid-cols-4 mt-2 mb-10 gap-8 items-start">
            {
              jobs.map((item, index) => (
                <div className="app-cards" key={index}>
                  <div
                    className="appcard-1 aos-animate"
                    data-aos="fade-left"
                    data-aos-duration="600"
                    data-aos-delay="300"
                  >
                    <h3 className="text-xl text-[#22249B]">{item.job_title}</h3>
                    <p className="">{item.location}</p>
                    <ul className="mt-2">
                      <li className="mt-2 flex items-start">
                        <img className="mr-2" src={Listicon} alt="home-img" />
                        {item.experience}
                      </li>
                      <li className="mt-2 flex items-start">
                        <img className="mr-2" src={Listicon} alt="home-img" />
                        {item.salary}
                      </li>
                    </ul>
                    <Link
                      to={`/career/${item.title_slug}/${item.jobid}`}
                      className="primary-btn mt-3"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))

              //
            }
          </div>
        </>
      )}
    </>
  );
}
