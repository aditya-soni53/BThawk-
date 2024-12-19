import React, { useEffect, useState } from "react";
import Blogbanner from "../../assets/image/blog-banner.jpg";
import Topbanner from "../../component/layout/topBanner/Topbanner";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faLocationDot,
  faSuitcase,
  faGraduationCap,
  faIndianRupee,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faClockFour } from "@fortawesome/free-regular-svg-icons/faClockFour";
import Modals from "../../component/Modals";

export default function Careerdetail() {
  const { jobSlug, jobId } = useParams();
  const [jobsData, setJobdata] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const retaledJob = async () => {
      try {
        console.log(jobSlug);

        const res = await axios.post(
          `${"https://www.bthawk.com/api/blog_api"}`,
          {
            type: "jobDetailFetch",
            title_slug: jobSlug,
          }
        );
        console.log(res.data.data.status == 1);
        if (res.data.data.status == 1) {
          setJobdata(res.data.data);
          console.log(res.data.data);
          setSpinner(false);
        } else {
          throw new Error("job not find");
        }
      } catch (err) {
        console.log("error");
      }
    };
    retaledJob();
  }, [jobSlug]);
  return (
    <>
      <Topbanner banner={Blogbanner} />
      {spinner ? (
        <div className="grid w-full h-96 place-content-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="w-11/12 mx-auto my-8 grid grid-cols-4">
          <div className="border-2 p-3 rounded-xl">
            <h3 className="text-xl text-[#22249B] border-b-2 py-3">
              Job Information
            </h3>
            <div className="p-4">
              <div className="widget">
                <FontAwesomeIcon
                  className="float-left mr-3"
                  icon={faUserCheck}
                />
                <div className="overflow-hidden d-block">
                  <h4 className="">Employee Type:</h4>

                  <p className="text-green-500">{jobsData.employee_type}</p>
                </div>
              </div>
              <div className="widget">
                <FontAwesomeIcon
                  className="float-left mr-3"
                  icon={faLocationDot}
                />
                <div className="overflow-hidden d-block">
                  <h4 className="">Location:</h4>
                  <p className="text-green-500">{jobsData.location}</p>
                </div>
              </div>
              <div className="widget">
                <FontAwesomeIcon
                  className="float-left mr-3"
                  icon={faSuitcase}
                />
                <div className="overflow-hidden d-block">
                  <h4 className="">Experience:</h4>
                  <p className="text-green-500">{jobsData.experience}</p>
                </div>
              </div>
              <div className="widget">
                <FontAwesomeIcon
                  className="float-left mr-3"
                  icon={faGraduationCap}
                />
                <div className="overflow-hidden d-block">
                  <h4 className="">Skill:</h4>
                  <p className="text-green-500">{jobsData.skill}</p>
                </div>
              </div>
              <div className="widget">
                <FontAwesomeIcon
                  className="float-left mr-3"
                  icon={faIndianRupee}
                />
                <div className="overflow-hidden d-block">
                  <h4 className="">Skill:</h4>
                  <p className="text-green-500">Full Type</p>
                </div>
              </div>
              <div className="widget">
                <FontAwesomeIcon
                  className="float-left mr-3"
                  icon={faClockFour}
                />
                <div className="overflow-hidden d-block">
                  <h4 className="">Date posted:</h4>
                  <p className="text-green-500">{jobsData.postedDate}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 p-4">
            <div>
              <p dangerouslySetInnerHTML={{ __html: jobsData.description }} />
              {/* {} */}
            </div>
            <Modals jobId={jobId} />
          </div>
        </div>
      )}
    </>
  );
}
