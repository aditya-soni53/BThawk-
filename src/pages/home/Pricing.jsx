import React, { useContext, useEffect, useState } from "react";
import micon1 from "../../assets/image/module-icon-2.svg";
import micon2 from "../../assets/image/module-icon-3.svg";
import micon3 from "../../assets/image/module-icon-3.svg";
import Aos from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../Context";
import axios from "axios";
export default function Pricing() {
  const [packageData, setPackageData] = useState([]);

  const [isYearly, setIsYearly] = useState(false);
  useEffect(() => {
    Aos.init(); // Refresh AOS for dynamically added components
  });
  const ContactInfo = [
    {
      id: 1,
      icon: faPhoneVolume,
      text: "7340040171,7849904543",
    },
    {
      id: 2,
      icon: faEnvelope,
      text: "sales@bthawk.com",
    },
    {
      id: 3,
      icon: faLocationDot,
      text: "15&16, 18th Floor, AIPL Business Club Sector 62, Gurugram 122102",
    },
  ];
  const handleToggle = () => {
    setIsYearly(!isYearly);
  };
  const { setIsModalOpen, isModalOpen } = useContext(Context);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const fetchPackages = async () => {
    try {
      const res = await axios.post("https://www.bthawk.com/api/api", {
        type: "packageDetails", // Send as request body
      });
      console.log(res);
      if (res.data.status == 1) {
        setPackageData(res.data.data);
        console.log("Working");
        
      } else {
        console.error("Something Went Wrong");
      }
    } catch (error) {
      console.error(error);
    } finally {
      // console.log("Packages", packageData);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <>
      <div
        className="lg:w-8/12 w-11/12 mx-auto text-center md:p-10 md:mt-5 mt-14 mb-4 aos-animate overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <h1 className="text-3xl pb-3">
           Different plan of <span className="text-[#22249B]">BT</span>
          <span className="text-[#E45325]">HAWK</span> as per your need
        </h1>
        <p className="">(With 100% customization) </p>
        {/* <button className='primary-btn' onClick={togglePricing}> {isMonthly ? 'Switch to Yearly' : 'Switch to Monthly'}
                   </button> */}
      </div>
      <div className="w-11/12 mx-auto grid mb-3 relative lg:grid-cols-3 md:grid-cols-2 md:gap-14 gap-6 mt-2 overflow-hidden">
        <div className="aos-animate " data-aos="fade-right">
          <div className="">
            <div className="plan-toggle-wrap active mb-5">
              {/* <p className="pera">Save up to 32% with yearly billing.</p>  */}
              <div className="toggle-inner toggle-inner2">
                <input
                  id="ce-toggle"
                  checked={isYearly}
                  type="checkbox"
                  onChange={handleToggle}
                />
                <span className="custom-toggle"></span>{" "}
                <span className="t-month">Monthly</span>
                <span className="t-year">Yearly (Save 50%)</span>{" "}
              </div>{" "}
              <div className="price">
                {/* <p>{isYearly ? '₹2400 / year' : '₹240 / month'}</p>  */}
              </div>
            </div>
            <h2 className="text-3xl mb-5">
              Choose the Right Plan for Your Business Success
            </h2>
            <div className="mb-4">
              <b className="text-2xl mb-2 text-[#6851b1]">Business Plan</b>
              <p>
                Affordable and feature-rich for growing businesses. Simplify
                billing, inventory, and compliance with intuitive tools designed
                to scale your business seamlessly.
              </p>
            </div>
            <div className="mb-4">
              <b className="text-2xl mb-2 text-[#9c4b21]">
                Business Pro<sup className="text-xl">+</sup> Plan
              </b>
              <p>
                Comprehensive tools for advanced business needs. From automation
                to detailed reports, enjoy unmatched control, efficiency, and
                support to boost profitability and compliance.
              </p>
            </div>
            <div className=" mt-3 contact_us-details_info">
              {ContactInfo.map((info) => (
                <div key={info.id} className="flex items-center gap-3 mb-2">
                  <FontAwesomeIcon
                    className={`${info.id === 3 ? "self-start mt-3" : ""}`}
                    icon={info.icon}
                  />
                  <span className="text-base">{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ------------ Plans ------- */}

        <div
          className="aos-animate border-2  border-[#6851b1] rounded-lg"
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <div className="bg-[#EDEAFF] block p-4 rounded-lg leading-none">
            <h2>Starting from</h2>
            <div className="flex my-3 items-baseline">
              <s>{isYearly ? "4999" : "1999"}</s>
              <h2 className="text-5xl">₹{isYearly ? "1999" : "199"}/ </h2>
              <p>{isYearly ? "yearly" : "monthly"}</p>
            </div>
            <h2>Business Plan</h2>
            {/* <p className='leading-none'>Small businesses and startups automating their operations.</p> */}
          </div>
          <div className="mt-5 px-5">
            <ul className="mb-3">
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon1} alt="" />
                Access upto 5 user.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon1} alt="" />
                Financial dashboard for business insights.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon1} alt="" />
                Generate and manage E-way bills.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon1} alt="" />
                Track raw materials, in-progress goods, and finished goods.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon1} alt="" />
                E-invoice generation and GST return filing.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon1} alt="" />
                Record and monitor company expenses.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon1} alt="" />
                100 free credits for E-invoice & E-way bill generation.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon1} alt="" />
                Reports on payables, receivables, and financial health.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon1} alt="" />
                Barcode-based billing for items and batches.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon1} alt="" />
                Includes a 14-day free trial.
              </li>
            </ul>
            <button
              className="bg-[#7861ca] align-bottom p-2 rounded-lg text-white mt-3 w-full"
              onClick={toggleModal}
            >
              Schedule a Demo
            </button>
          </div>
        </div>

        <div
          className="aos-animate grid align-bottom border-2  border-[#9c4b21] rounded-lg"
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <div className="bg-[#FFF7E2]  p-4 rounded-lg leading-none relative">
            <h2>Starting from</h2>
            <div className="flex my-3 items-baseline">
              <s>{isYearly ? "8999" : "3999"}</s>
              <h2 className="text-5xl">₹{isYearly ? "2999" : "299"}/ </h2>
              <p>{isYearly ? "yearly" : "monthly"}</p>
            </div>
            <h2>
              Business Pro<sup className="text-sm">+</sup> Plan
            </h2>
            <p className="absolute top-0 bg-[#d4882c] text-white p-3 right-0 rounded-s-full">
              50% off
            </p>
          </div>
          <div className="mt-5 px-5 mb-3">
            <ul className="mb-3">
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon2} alt="" />
                Access upto 7 user.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon2} alt="" />
                Automate sales quotations, delivery notes, and purchase orders.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon2} alt="" />
                Reconcile bank transactions and adjust bill-to-bill entries.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon2} alt="" />
                Manage stock with batch tracking and warehouse transfers.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon2} alt="" />
                Role-based access control for users.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon2} alt="" />
                Customize fields for invoices, items, and forms.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon2} alt="" />
                Detailed reports on batch-wise and party-wise profit/loss.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon2} alt="" />
                Unlimited E-invoices and E-way bills.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon2} alt="" />
                Barcode and serial tracking for inventory.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon2} alt="" />
                Export data to Tally and other accounting tools.
              </li>
              <li className="mt-2 flex">
                {" "}
                <img className="mr-2" src={micon2} alt="" />
                Dedicated support and training for premium users.
              </li>
            </ul>
            <button
              className="bg-[#d4882c] p-2 rounded-lg text-white mt-3 w-full"
              onClick={toggleModal}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
