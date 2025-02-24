import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/image/logo-11.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import scrolledLogo from "../../../assets/image/new-logo.png"; // Update with your scrolled logo path
import { Context } from "../../../Context";
import Schedulemodal from "../../Schedulemodal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [subMenuStates, setSubMenuStates] = useState({
    showHtmlCssSubMenu: false,
    showJsSubMenu: false,
    showMoreSubMenu: false,
  });
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const toggleSearch = () => {
    setShowInput(!showInput);
  };
  const toggleSubMenu = (menu) => {
    setSubMenuStates((prevStates) => ({
      ...prevStates,
      [menu]: !prevStates[menu],
    }));
  };
  const location = useLocation();
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isTaxPreparationOpen, setIsTaxPreparationOpen] = useState(false);
  const [isPayrollManagementOpen, setIsPayrollManagementOpen] = useState(false);
  const [isTaxserviceOpen, setIsTaxserviceOpen] = useState(false);
  const [isTaxcounsultancyOpen, setIsTaxcounsultancyOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 0);
  const {setIsModalOpen, isModalOpen } = useContext(Context);
  const [mobileClick, setMobileClick] = useState(true);

  // Update state based on window width
  useEffect(() => {
    if (window.innerWidth > 990) {
      setMobileClick(false)
    }
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 0)
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 0) {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Find Base URL
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    // window.location.origin will give the base URL (protocol + hostname + port)
    const base = window.location.origin;
    setBaseUrl(base);
  }, []);
  useEffect(() => {
    if (window.location.hash === "#pricing") {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        // Adjust scroll position by offsetting with the height of the fixed header
        const headerOffset = -1000; // Adjust this value according to your header's height
        const elementPosition = pricingSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [window.location.hash]);

  return (
    <>
      <header
        className={`w-full body-font transition duration-150 ease-out md:ease-in ${
          isScrolled ? "scrolled drop-shadow-md" : ""
        }`}
      >
        <div className="w-11/12 mx-auto header-1 ">
          <Link
            to="./"
            className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
          >
            <img
              src={isScrolled ? scrolledLogo : logo}
              alt="Logo"
              className="desk-logo logo-main"
            />
            <img
              src={scrolledLogo}
              alt="Logo"
              className="mobile-logo logo-main"
            />
          </Link>
          <div className={`navbar-mobile  ${isNavbarOpen ? "flex" : "none"}`}>
            <nav className="lg:mr-auto lg:ml-4 lg:py-1 lg:pl-4 lg:gap-5 w-full md:w-[unset]">
              <ul className="flex flex-wrap items-center justify-center gap-1 mb-0 text-base lg:gap-3 md:gap-2 nav-links">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `cursor-pointer hover:text-orange-400 ${
                        isActive ? "text-orange-400" : ""
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="w-full md:w-[unset]">
                  <div className={`relative ${isDesktop ? "" : "block"}`}
                    onMouseEnter={() =>
                      !mobileClick && setIsMainDropdownOpen(true)
                    }
                    onMouseLeave={() =>
                      !mobileClick && setIsMainDropdownOpen(false)
                    }
                  >
                    <span className="cursor-pointer hover:text-orange-400 service-h" onClick={() => mobileClick && setIsMainDropdownOpen(!isMainDropdownOpen)}>
                      Service <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                    {/* Dropdown Menu */}
                    {(isMainDropdownOpen || !isDesktop) && (
                      <div
                        className={`lg:absolute w-11/12 ${
                          isDesktop
                            ? "md:w-max submenu1 text-black bg-white lg:shadow-lg px-0 py-1 rounded top-full left-0"
                            : "relative m-submenu bg-white p-3 lg:mt-2 rounded"
                        }`}
                      >
                        <ul className="flex flex-col gap-1 pb-1 mb-0">
                          {/* Accounting solution with Sub-Submenu */}
                          <li
                            className={`relative ${
                              isDesktop ? "" : "block"
                            }cursor-pointer`}
                            onMouseEnter={() =>
                              !mobileClick && setIsTaxPreparationOpen(true)
                            }
                            onMouseLeave={() =>
                              !mobileClick && setIsTaxPreparationOpen(false)
                            }
                            onClick={() =>
                              mobileClick &&
                              setIsTaxPreparationOpen(!isTaxPreparationOpen)
                            }
                          >
                            <span
                              className={`flex justify-between cursor-pointer items-center lg:pl-3 lg:pr-2 lg:pt-2 hover:text-orange-400 ${
                                isTaxPreparationOpen ? "text-orange-400" : ""
                              }`}
                            >
                              Accounting Solution{" "}
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                className="ml-4"
                              />
                            </span>
                            {(isTaxPreparationOpen || !isDesktop) && (
                              <div
                                className={`lg:absolute transition ease-in-out delay-150 
                                  ${ isDesktop ? "w-max submenu2 bg-white md:shadow-lg p-3 rounded left-[100%] top-0" : ""}`}
                              >
                                <ul className="flex flex-col gap-3 mb-0">
                                  <li>
                                    <NavLink
                                      to="https://bthawk.appexperts.net/" target="_blank"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      BTHAWK
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>

                          {/* Accounting service with Sub-Submenu */}
                          <li
                            className={`relative ${
                              isDesktop ? "" : "block"
                            } cursor-pointer`}
                            onMouseEnter={() =>
                              !mobileClick && setIsPayrollManagementOpen(true)
                            }
                            onMouseLeave={() =>
                              !mobileClick && setIsPayrollManagementOpen(false)
                            }
                            onClick={() =>
                              mobileClick &&
                              setIsPayrollManagementOpen(
                                !isPayrollManagementOpen
                              )
                            }
                          >
                            <span
                              className={`flex justify-between cursor-pointer lg:pl-3 lg:pr-2 lg:pt-2 items-center hover:text-orange-400 ${
                                isPayrollManagementOpen ? "text-orange-400" : ""
                              }`}
                            >
                              Accounting Service{" "}
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                className="ml-4"
                              />
                            </span>
                            {(isPayrollManagementOpen || !isDesktop) && (
                              <div
                                className={`lg:absolute ${
                                  isDesktop
                                    ? "w-max submenu2 bg-white lg:shadow-lg p-3 rounded left-[100%] top-0"
                                    : "relative bg-white m-submenu-1 p-3 mt-2 rounded"
                                }`}
                              >
                                <ul className="flex flex-col gap-2 mb-0">
                                <li>
                                    <NavLink
                                      to="/Service/accounting"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Accounting Service
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/comingsoon"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Balance Sheet
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/comingsoon"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Profit & Loss
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/comingsoon"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Capital Account
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/comingsoon"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Inventory Management
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/comingsoon"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      CMA Report
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/comingsoon"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Asset Register
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/Service/scrutiny-assessment"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Scrutiny Assessment
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>
                          {/* Tax service with Sub-Submenu */}
                          <li
                            className={`relative ${
                              isDesktop ? "" : "block"
                            } cursor-pointer`}
                            onMouseEnter={() =>
                              !mobileClick && setIsTaxserviceOpen(true)
                            }
                            onMouseLeave={() =>
                              !mobileClick && setIsTaxserviceOpen(false)
                            }
                            onClick={() =>
                              mobileClick &&
                              setIsTaxserviceOpen(!isTaxserviceOpen)
                            }
                          >
                            <span
                              className={`flex justify-between cursor-pointer lg:pl-3 lg:pr-2 lg:pt-2 hover:text-orange-400 ${
                                isTaxserviceOpen ? "text-orange-400" : ""
                              }`}
                            >
                              Tax Service{" "}
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                className="ml-4"
                              />
                            </span>
                            {(isTaxserviceOpen || !isDesktop) && (
                              <div
                                className={`lg:absolute ${
                                  isDesktop
                                    ? "w-max submenu2 bg-white lg:shadow-lg p-3 rounded left-[100%] top-0"
                                    : "relative bg-white m-submenu-1 p-3 mt-2 rounded"
                                }`}
                              >
                                <ul className="flex flex-col gap-2 mb-0">
                                  <li>
                                    <NavLink
                                      to="/Service/gst-filing-service"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      GST Filing
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/Service/tds-return-filing"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      TDS Starts
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/Service/income-tax-return-filing"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Income Tax Return Filing
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/comingsoon"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Financial Prepration
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>
                          {/* Tax counslatancy with Sub-Submenu */}
                          <li
                            className={`relative ${
                              isDesktop ? "" : "block"
                            } cursor-pointer`}
                            onMouseEnter={() =>
                              !mobileClick && setIsTaxcounsultancyOpen(true)
                            }
                            onMouseLeave={() =>
                              !mobileClick && setIsTaxcounsultancyOpen(false)
                            }
                            onClick={() =>
                              mobileClick &&
                              setIsTaxcounsultancyOpen(!isTaxcounsultancyOpen)
                            }
                          >
                            <span
                              className={`flex justify-between cursor-pointer lg:pl-3 lg:pr-2 lg:pt-2 hover:text-orange-400 ${
                                isTaxcounsultancyOpen ? "text-orange-400" : ""
                              }`}
                            >
                              Tax Consultancy{" "}
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                className="ml-4"
                              />
                            </span>
                            {(isTaxcounsultancyOpen || !isDesktop) && (
                              <div
                                className={`lg:absolute ${
                                  isDesktop
                                    ? "w-max submenu2 bg-white lg:shadow-lg p-3 rounded left-[100%] top-0"
                                    : "relative bg-white m-submenu-1 p-3 mt-2 rounded"
                                }`}
                              >
                                <ul className="flex flex-col gap-2 mb-0">
                                  <li>
                                    <NavLink
                                      to="/Service/gst-registration-online"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      GST Registration
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/Service/msme-udyam-registration"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      MSME Udyam Registration
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/Service/business-registration-number"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      BRN Number Registration
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/Service/company-registration-service"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Company Registration
                                    </NavLink>
                                  </li>
                                  {/* <li>
                                    <NavLink
                                      to="/Service/private-limited-company-registration"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Private Limited Company Registration
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/Service/limited-liability-company-registration"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Limited Liability Company Registration
                                    </NavLink>
                                  </li> */}
                                  <li>
                                    <NavLink
                                      to="/Service/trade-license"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Trade License Online
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/Service/digital-signature-certificate"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Digital Signature Certificate
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/Service/fssai-registration"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      FSSAI Registration
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/Service/import-export-code-registration"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Import Export Code Registration
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/comingsoon"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Virtual CFO
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/comingsoon"
                                      className={({ isActive }) =>
                                        `cursor-pointer hover:text-orange-400 ${
                                          isActive ? "text-orange-400" : ""
                                        }`
                                      }
                                    >
                                      Virtual Accounting
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/Ourcustomer"
                    className={({ isActive }) =>
                      `cursor-pointer hover:text-orange-400 ${
                        isActive ? "text-orange-400" : ""
                      }`
                    }
                  >
                    Our Customer
                  </NavLink>
                </li>
                <li>
                  <a
                    href={baseUrl + "/#pricing"}
                    className="cursor-pointer hover:text-orange-400"
                  >
                    Price
                  </a>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      `cursor-pointer hover:text-orange-400 ${
                        isActive ? "text-orange-400" : ""
                      }`
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `cursor-pointer hover:text-orange-400 ${
                        isActive ? "text-orange-400" : ""
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `cursor-pointer hover:text-orange-400 ${
                        isActive ? "text-orange-400" : ""
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Link
                  to="https://bthawk.appexperts.net/"
                  target="_blank" className="relative mb-1 primary-btn lg:mb-0 group hover:dropdown-menu">
              Login
              {/* <div className="absolute top-0 hidden w-32 transition-opacity ease-in-out bg-white rounded-md shadow-lg duration-50000 md:-left-7 md:top-9 left-24 dropdown-menu group-hover:block">
                <Link
                  to="https://bthawk.appexperts.net/signup/"
                  target="_blank"
                  className="block px-4 pt-2 pb-3 text-base text-gray-800 rounded-md hover:text-orange-400 text-start"
                >
                  Sign Up
                </Link>
                <Link
                  to="https://bthawk.appexperts.net/"
                  target="_blank"
                  className="block px-4 pb-3 text-base text-gray-800 rounded-md hover:text-orange-400 text-start"
                >
                  Sign In
                </Link>
              </div> */}
            </Link>
            <button className="lg:ml-2 primary-btn " onClick={toggleModal}>
              Schedule a Demo
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <span className="nav-btn" onClick={handleToggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              {" "}
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />{" "}
            </svg>{" "}
          </span>
        </div>
      </header>
      <Schedulemodal />
    </>
  );
}
