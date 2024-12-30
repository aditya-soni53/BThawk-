/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import logo from "../../../assets/image/logo-11.png";
import playstore from "../../../assets/image/play-store-1.svg";
import appstore from "../../../assets/image/app-store-1.svg";
import youtube from "../../../assets/image/youtube.png";
import { Link } from "react-router-dom";
// import faArrowRightFromBracket from '@fortawesome/react-fontawesome'

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const footerData = [
    {
      name: "BTPoint",
      link: "https://www.bthawk.com/btpoint/",
    },
    {
      name: "BTPrime",
      link: "https://www.bthawk.com/btprime/",
    },
    {
      name: "BTRESTRO",
      link: "https://www.btrestro.com/",
    },
    {
      name: "BTCAMPUS",
      link: "https://www.btcampus.in/",
    },
    {
      name: "BTRoomer",
      link: "https://www.btroomer.com/",
    },
    {
      name: "BTRise",
      link: "https://btrise.bthawk.com/",
    },

    // {
    //   name: "Z-WEALTH",
    //   link: "https://www.bthawk.com/zucol-wealth/",
    // },
  ];

  return (
    <footer className="text-white bg-black body-font">
      <div className="grid w-11/12 grid-cols-2 pb-6 mx-auto md:px-5 pt-14 lg:grid-cols-5 ">
        <div className="flex-shrink-0 col-span-2 mx-auto mb-8 text-center lg:mx-0 md:text-left">
          <Link
            to="/"
            className="flex items-center justify-center mb-4 font-medium text-gray-900 title-font md:justify-start md:mb-10"
          >
            <img src={logo} alt="" width={200} />
          </Link>
          <p className="md:mt-2 md:mb-10 md-4 text-md ">
            Start working with BTHAWK that can provide everything you need to
            increase your business revenue.
          </p>
          <span className="inline-flex items-center justify-center mt-4 sm:ml-auto sm:mt-0">
            <Link
              to="https://www.facebook.com/Bell.BTHawk/"
              target="_blank"
              className="px-4 text-center border-r-2"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link
              to="https://www.youtube.com/channel/UC4T9nnKwOAxOvwXfDm9qlhg"
              target="_blank"
              className="px-4 text-center border-r-2"
            >
              <img src={youtube} alt="twitter" width={17} />
            </Link>
            <Link
              to="https://www.instagram.com/bell.bthawk/?hl=en"
              target="_blank"
              className="px-4 text-center border-r-2"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link
              to="https://www.linkedin.com/company/bthawk2019/?viewAsMember=true"
              target="_blank"
              className="px-4 text-center"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
        <div className="px-4">
          <h2 className="mb-3 text-2xl font-medium tracking-widest title-font">
            Solution
          </h2>
          <nav className="grid gap-2 mb-10 list-none">
            {footerData.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  target="_blank"
                  className=" hover:text-[#FF553E]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </nav>
        </div>
        <div className="px-4">
          <h2 className="mb-3 text-2xl font-medium tracking-widest title-font">
            Quick link
          </h2>
          <nav className="grid gap-2 mb-10 list-none">
            <li>
              <Link to="/about" className=" hover:text-[#FF553E]">
                About
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className=" hover:text-[#FF553E]">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/faq" className=" hover:text-[#FF553E]">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className=" hover:text-[#FF553E]">
                Terms & Cond.
              </Link>
            </li>
            <li>
              <Link to="/career" className=" hover:text-[#FF553E]">
                Career
              </Link>
            </li>
            <li>
              <Link to="/contact" className=" hover:text-[#FF553E]">
                Contact us
              </Link>
            </li>
          </nav>
        </div>
        <div className="col-span-2 px-4 md:col-span-1">
          <h2 className="mb-3 text-xl tracking-widest title-font">
            Download App
          </h2>
          <nav className="flex gap-2 mb-10 list-none">
            <li>
              <a className="">
                <img src={playstore} alt="playstore" />
              </a>
            </li>
            {/* <li>
              <a className="">
                <img src={appstore} alt="playstore" />
              </a>
            </li> */}
          </nav>
          <h2 className="mb-3 text-xl tracking-widest title-font">
            News Letter
          </h2>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="submit-btn w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#FF553E] "
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#ffffff"
                  d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="flex flex-col flex-wrap w-11/12 px-5 mx-auto text-center border-t-2 py-7 sm:flex-row">
          <p className="mx-auto text-center text-md">
            © 2019-2025 BTHAWK Developed by <Link to={"https://zucol.in/"} target="#">ZUCOL</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
