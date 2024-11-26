import React, { useState, useEffect } from 'react'
import logo from '../assets/image/logo.svg';
import scrolledLogo from '../assets/image/white-logo.svg'; // Update with your scrolled logo path

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false); useEffect(() => { const handleScroll = () => { if (window.scrollY > 0) { setIsScrolled(true); } else { setIsScrolled(false); } }; window.addEventListener('scroll', handleScroll); return () => { window.removeEventListener('scroll', handleScroll); }; }, []);
  return (
    <>
      <header className={`w-full body-font ${isScrolled ? 'scrolled' : ''}`}>
        <div class="w-11/12 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={isScrolled ? scrolledLogo : logo} alt="Logo" />
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center gap-5">
            <a class="hover:text-gray-900">Home</a>
            <a class="hover:text-gray-900">Accounting Service</a>
            <a class="hover:text-gray-900">Our Customer</a>
            <a class="hover:text-gray-900">Price</a>
            <a class="hover:text-gray-900">Blog</a>
            <a class="hover:text-gray-900">Contact</a>
          </nav>
          <button class="secoundry-btn">Sign Up
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button class="primary-btn ml-2">Schedule a Demo
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}
