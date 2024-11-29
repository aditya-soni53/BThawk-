import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/logo.svg";
import scrolledLogo from "../assets/image/white-logo.svg"; // Update with your scrolled logo path

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 991) {
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
  return (
    <>
      <header className={`w-full body-font ${isScrolled ? "scrolled" : ""}`}>
        <div className="w-11/12 mx-auto header-1 ">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <img
              src={isScrolled ? scrolledLogo : logo}
              alt="Logo"
              className="desk-logo"
            />
            <img src={scrolledLogo} alt="Logo" className="mobile-logo" />
          </a>
          <div className={`navbar-mobile ${isNavbarOpen ? "flex" : "none"}`}>
            <nav className="flex flex-wrap items-center justify-center gap-3 text-base lg:mr-auto lg:ml-4 lg:py-1 lg:pl-4 lg:gap-5 nav-links">
              {/* <a class="hover:text-gray-900">Home</a>
            <a class="hover:text-gray-900">Accounting Service</a>
            <a class="hover:text-gray-900">Our Customer</a>
            <a class="hover:text-gray-900">Price</a>
            <a class="hover:text-gray-900">Blog</a>
            <a class="hover:text-gray-900">Contact</a> */}
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
              <NavLink to="/" className="hover:text-orange-400">
                Accounting Service
              </NavLink>
              <NavLink to="/" className="hover:text-orange-400">
                Our Customer
              </NavLink>
              <NavLink to="/" className="hover:text-orange-400">
                Price
              </NavLink>
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
              {/* <NavLink to="/contact">Contact</NavLink> */}
            </nav>
            <button
              className={`primary-btn lg:mb-0 mb-1 ${
                isScrolled ? "scrolled" : ""
              }`}
            >
              Sign Up
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className="ml-2 primary-btn ">
              Schedule a Demo
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
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
    </>
  );
}
