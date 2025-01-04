import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import app1 from "../../assets/image/app-1.svg";
import app2 from "../../assets/image/app-2.svg";
import app3 from "../../assets/image/app-3.svg";
import Listicon from "../../assets/image/list-icon.svg";
import Aos from "aos";
import { Context } from "../../Context";


export default function Appshowcase() {
  const [activeTab, setActiveTab] = useState("admin");
  useEffect(() => {
    Aos.init(); // Refresh AOS for dynamically added components
  });
  const {setIsModalOpen, isModalOpen} = useContext(Context);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="overflow-hidden">
      <div
        className="w-11/12 p-2 mx-auto mt-8 text-center lg:w-8/12 md:p-10 aos-animate"
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <h1 className="pb-3 text-3xl">
          <span className="text-[#F3771E]">BT</span>
          <span className="text-[#22249B]">HAWK</span> App Showcase
        </h1>
        <p className="">
          In order to make the business less complicated, BTHAWK has introduced
          3 applications{" "}
        </p>
      </div>
      <div className="grid w-11/12 mx-auto mt-4 lg:grid-cols-3">
        <div
          className="grid grid-cols-3 gap-4 lg:grid-cols-2 apps place-content-center aos-animate"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="300"
        >
          <button
            className={`app-1 mx-auto lg:col-span-2 p-4 border-b-2 rounded-t-lg ${
              activeTab === "admin"
                ? "active"
                : "hover:text-gray-600  dark:hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("admin")}
            type="button"
            role="tab"
            aria-controls="admin"
            aria-selected={activeTab === "admin"}
          >
            <div className="m-auto app-icon">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <b className="text-[.7rem] mt-1 md:text-base leading-5">ADMIN APP (ADMINISTRATION APP)</b>
          </button>

          <button
            className={`p-4 app-1 border-b-2 rounded-t-lg ${
              activeTab === "fse"
                ? "active"
                : "hover:text-gray-600  dark:hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("fse")}
            type="button"
            role="tab"
            aria-controls="fse"
            aria-selected={activeTab === "fse"}
          >
            <div className="m-auto app-icon">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <b className="text-[.7rem] mt-1 md:text-base leading-5">FSE App</b>
          </button>
          <button
            className={`app-1 p-4 border-b-2 rounded-t-lg ${
              activeTab === "retailer" ? "active" : "hover:text-gray-600"
            }`}
            onClick={() => setActiveTab("retailer")}
            type="button"
            role="tab"
            aria-controls="retailer"
            aria-selected={activeTab === "retailer"}
          >
            <div className="m-auto app-icon">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <b className="text-[.7rem] mt-1 md:text-base leading-5 app-btn-1 mt">RETAILER APP</b>
          </button>
        </div>
        <div className="lg:col-span-2">
          {activeTab === "admin" && (
            <div
              className="grid mx-auto md:grid-cols-2 md:w-11/12"
              role="tabpanel"
              aria-labelledby="admin-tab"
            >
              <div
                className="text-center app-img aos-animate"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                <img src={app1} alt="home-img" className="mx-auto app-img" />
              </div>
              <div className="app-cards">
                <div className="appcard-1">
                  <h3 className="text-xl text-center mb-4 text-[#22249B]">
                  ADMIN APP (ADMINISTRATION APP)
                  </h3>
                  <p className="text-center">
                  Businessman App gives you the supremacy to maintain a hawk eye on
                    the activities of your FSEs.
                  </p>
                  <ul className="mt-4">
                    <li className="flex mt-2">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Prevents stock leakage.
                    </li>
                    <li className="flex mt-2">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Correct tracking of sales.
                    </li>
                    <li className="flex mt-2">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      More focus on core business instead of compliance
                    </li>
                  </ul>
                  <button className="mt-3 primary-btn" onClick={toggleModal}>Schedule a Demo</button>
                </div>
              </div>
            </div>
          )}
          {activeTab === "fse" && (
            <div
              className="grid mx-auto md:grid-cols-2 md:w-11/12 aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="400"
              role="tabpanel"
              aria-labelledby="admin-tab"
            >
              <div
                className="text-center app-img aos-animate"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                <img src={app2} alt="home-img" className="mx-auto app-img" />
              </div>
              <div className="app-cards">
                <div className="appcard-1 aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                  <h3 className="text-xl text-center text-[#22249B]">
                    FSE App
                  </h3>
                  <p className="text-center">
                    FSE app helps the FSEs to maintain a proper record of their
                    tasks and provides them hastle free work.
                  </p>
                  <ul className="mt-2">
                    <li className="flex mt-2">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Invoice Generation
                    </li>
                    <li className="flex mt-2">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      DSR Management
                    </li>
                    <li className="flex mt-2">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Collection Management
                    </li>
                  </ul>
                  <button className="mt-3 primary-btn" onClick={toggleModal}>Schedule a Demo</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "retailer" && (
            <div
              className="grid mx-auto md:grid-cols-2 md:w-11/12"
              role="tabpanel"
              aria-labelledby="admin-tab"
            >
              <div className="text-center app-img">
                <img src={app3} alt="home-img" className="mx-auto app-img" />
              </div>
              <div className="app-cards">
                <div className="appcard-1">
                  <h3 className="text-xl text-center text-[#22249B]">
                    Retailer App
                  </h3>
                  <p className="text-center">
                    For our retailers we have made business less complicated by
                    making everything being done automated.
                  </p>
                  <ul className="mt-2">
                    <li className="flex mt-2">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Forecasting of business plans.
                    </li>
                    <li className="flex mt-2">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Get complete details of credit bills of the customers.
                    </li>
                    <li className="flex mt-2">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Works as mini CRM for the retailers.
                    </li>
                  </ul>
                  <button className="mt-3 primary-btn" onClick={toggleModal}>Schedule a Demo</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
