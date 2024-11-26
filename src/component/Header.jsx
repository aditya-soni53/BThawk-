import React, { useState, useEffect } from 'react'
import logo from '../assets/image/logo.svg';
import scrolledLogo from '../assets/image/white-logo.svg'; // Update with your scrolled logo path

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false); useEffect(() => { const handleScroll = () => { if (window.scrollY > 0) { setIsScrolled(true); } else { setIsScrolled(false); } }; window.addEventListener('scroll', handleScroll); return () => { window.removeEventListener('scroll', handleScroll); }; }, []);
  return (
    <>
      <header className={`w-full body-font ${isScrolled ? 'scrolled' : ''}`}>
        <div className="flex flex-col flex-wrap items-center w-11/12 mx-auto md:flex-row">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <img src={isScrolled ? scrolledLogo : logo} alt="Logo" />
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-5 text-base md:mr-auto md:ml-4 md:py-1 md:pl-4">
            <a className="hover:text-gray-900">Home</a>
            <a className="hover:text-gray-900">Accounting Service</a>
            <a className="hover:text-gray-900">Our Customer</a>
            <a className="hover:text-gray-900">Price</a>
            <a className="hover:text-gray-900">Blog</a>
            <a className="hover:text-gray-900">Contact</a>
          </nav>
          <button className="secoundry-btn">Sign Up
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button className="ml-2 primary-btn">Schedule a Demo
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}
