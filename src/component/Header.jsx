import React, { useState, useEffect } from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../assets/image/logo.svg';
import scrolledLogo from '../assets/image/white-logo.svg'; // Update with your scrolled logo path

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
   useEffect(() => { const handleScroll = () => {
     if (window.innerWidth >= 991) { if (window.scrollY > 0) { setIsScrolled(true); } 
     else { setIsScrolled(false); } } 
     else { setIsScrolled(false); } };
    window.addEventListener('scroll', handleScroll);
    return () => {
       window.removeEventListener('scroll', handleScroll);
     }; }, []);
     const handleToggleNavbar = () => { setIsNavbarOpen(!isNavbarOpen); };
  return (
    <>
      <header className={`w-full body-font ${isScrolled ? 'scrolled' : ''}`}>
        <div class="w-11/12 mx-auto header-1 ">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={isScrolled ? scrolledLogo : logo} alt="Logo"className='desk-logo' />
          <img src={scrolledLogo} alt="Logo" className='mobile-logo' />
          </a>
          <div className={`navbar-mobile ${isNavbarOpen ? 'flex' : 'none'}`}>
          <nav class="lg:mr-auto lg:ml-4 lg:py-1 lg:pl-4	flex flex-wrap items-center text-base justify-center lg:gap-5 gap-3 nav-links">
            {/* <a class="hover:text-gray-900">Home</a>
            <a class="hover:text-gray-900">Accounting Service</a>
            <a class="hover:text-gray-900">Our Customer</a>
            <a class="hover:text-gray-900">Price</a>
            <a class="hover:text-gray-900">Blog</a>
            <a class="hover:text-gray-900">Contact</a> */}
            <NavLink to="/" class="hover:text-gray-900">Home</NavLink>
            <NavLink to="/" class="hover:text-gray-900">Accounting Service</NavLink>
            <NavLink to="/" class="hover:text-gray-900">Our Customer</NavLink>
            <NavLink to="/" class="hover:text-gray-900">Price</NavLink>
            <NavLink to="/blogs" class="hover:text-gray-900">Blog</NavLink>
            <NavLink to="/" class="hover:text-gray-900">Contact</NavLink>
            {/* <NavLink to="/contact">Contact</NavLink> */}
          </nav>
          <button className={`primary-btn lg:mb-0 mb-1 ${isScrolled ? 'scrolled' : ''}`}>Sign Up
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button class="primary-btn ml-2 ">Schedule a Demo
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </div>
          <span className='nav-btn' onClick={handleToggleNavbar}> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/> </svg> </span>
        </div>
      </header>
    </>
  )
}
