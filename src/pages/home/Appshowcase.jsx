import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import app1 from "../../assets/image/app-1.svg";
import Listicon from "../../assets/image/list-icon.svg";
import Aos from "aos";

export default function Appshowcase() {
  const [activeTab, setActiveTab] = useState("admin");
  useEffect(() => {
    Aos.init(); // Refresh AOS for dynamically added components
  });

  return (
    <div className="overflow-hidden">
      <div
        className="lg:w-8/12 w-11/12 mx-auto text-center md:p-10 p-2 mt-8 aos-animate"
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <h1 className="text-3xl pb-3">
          <span className="text-[#22249B]">BT</span>
          <span className="text-[#E45325]">HAWK</span> App Showcase
        </h1>
        <p className="">
          In order to make the business less complicated, BTHAWK has introduced
          3 applications{" "}
        </p>
      </div>
      <div className="w-11/12 mx-auto grid lg:grid-cols-3 mt-4">
        <div
          className="grid lg:grid-cols-2 grid-cols-3  apps gap-4 place-content-center aos-animate"
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
            <div className="app-icon m-auto">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <b>Admin</b>
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
            <div className="app-icon m-auto">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <b>FSE App</b>
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
            <div className="app-icon m-auto">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <b className="app-btn-1">RETAILER APP</b>
          </button>
        </div>
        <div className="lg:col-span-2">
          {activeTab === "admin" && (
            <div
              className="grid md:grid-cols-2 md:w-11/12 mx-auto"
              role="tabpanel"
              aria-labelledby="admin-tab"
            >
              <div
                className="app-img text-center aos-animate"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                <img src={app1} alt="home-img" className="mx-auto app-img" />
              </div>
              <div className="app-cards">
                <div className="appcard-1">
                  <h3 className="text-xl text-center text-[#22249B]">
                    Admin App and Dashboard
                  </h3>
                  <p className="text-center">
                    Admin App gives you the supremacy to maintain a hawk eye on
                    the activities of your FSEs.
                  </p>
                  <ul className="mt-2">
                    <li className="mt-2 flex">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Prevents stock leakage.
                    </li>
                    <li className="mt-2 flex">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Correct tracking of sales.
                    </li>
                    <li className="mt-2 flex">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      More focus on core business instead of compliance
                    </li>
                  </ul>
                  <button className="primary-btn mt-3">Schedule a Demo</button>
                </div>
              </div>
            </div>
          )}
          {activeTab === "fse" && (
            <div
              className="grid md:grid-cols-2 md:w-11/12 mx-auto aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="400"
              role="tabpanel"
              aria-labelledby="admin-tab"
            >
              <div
                className="app-img text-center aos-animate"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                <img src={app1} alt="home-img" className="mx-auto app-img" />
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
                    <li className="mt-2 flex">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Invoice Generation
                    </li>
                    <li className="mt-2 flex">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      DSR Management
                    </li>
                    <li className="mt-2 flex">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Collection Management
                    </li>
                  </ul>
                  <button className="primary-btn mt-3">Schedule a Demo</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "retailer" && (
            <div
              className="grid md:grid-cols-2 md:w-11/12 mx-auto"
              role="tabpanel"
              aria-labelledby="admin-tab"
            >
              <div className="app-img text-center">
                <img src={app1} alt="home-img" className="mx-auto app-img" />
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
                    <li className="mt-2 flex">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Forecasting of business plans.
                    </li>
                    <li className="mt-2 flex">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Get complete details of credit bills of the customers.
                    </li>
                    <li className="mt-2 flex">
                      <img className="mr-2" src={Listicon} alt="home-img" />
                      Works as mini CRM for the retailers.
                    </li>
                  </ul>
                  <button className="primary-btn mt-3">Schedule a Demo</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
