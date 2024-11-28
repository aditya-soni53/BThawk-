import React, { useState } from 'react'
import logo from '../assets/image/logo.svg';
import playstore from '../assets/image/play-store-1.svg';
import appstore from '../assets/image/app-store-1.svg';
import twitter from '../assets/image/twitter.png'
// import faArrowRightFromBracket from '@fortawesome/react-fontawesome'


export default function Footer() {
    const [email, setEmail] = useState(''); const handleSubmit = (event) => { event.preventDefault(); };
    return (
        <footer className="text-white body-font bg-black">
            <div className="w-11/12 md:px-5 pb-6 pt-14 mx-auto grid lg:grid-cols-5 grid-cols-2 ">
                <div className="flex-shrink-0 lg:mx-0 mx-auto text-center col-span-2 md:text-left mb-8">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center md:mb-10 mb-4 text-gray-900">
                        <img src={logo} alt="" />
                    </a>
                    <p className="md:mt-2 md:mb-10 md-4 text-md ">Start working with BTHAWK that can provide everything you need to increase your business revenue.</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center">
                        <a className="px-4 border-r-2 text-center">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="px-4 border-r-2 text-center">
                            <img src={twitter} alt="twitter" width={17} />
                        </a>
                        <a className="px-4 border-r-2 text-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="px-4 text-center">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
                <div className="px-4">
                    <h2 className="title-font font-medium  tracking-widest text-2xl mb-3">Our solution</h2>
                    <nav className="list-none mb-10 grid gap-4">
                        <li>
                            <a className=" hover:text-[#FF553E]">BTHAWK</a>
                        </li>
                        <li>
                            <a className=" hover:text-[#FF553E]">BTRESTRO</a>
                        </li>
                        <li>
                            <a className=" hover:text-[#FF553E]">BTEDGE</a>
                        </li>
                        <li>
                            <a className=" hover:text-[#FF553E]">BTPRIME</a>
                        </li>
                        <li>
                            <a className=" hover:text-[#FF553E]">BTPOINT</a>
                        </li>
                    </nav>
                </div>
                <div className="px-4">
                    <h2 className="title-font font-medium tracking-widest text-2xl mb-3">Quick link</h2>
                    <nav className="list-none mb-10 grid gap-4">
                       
                        <li>
                            <a className=" hover:text-[#FF553E]">About</a>
                        </li>
                        <li>
                            <a className=" hover:text-[#FF553E]">Privacy policy</a>
                        </li>
                        <li>
                            <a className=" hover:text-[#FF553E]">FAQ</a>
                        </li>
                        <li>
                            <a className=" hover:text-[#FF553E]">Terms & Cond.</a>
                        </li>
                        <li>
                            <a className=" hover:text-[#FF553E]">Career</a>
                        </li>
                        <li>
                            <a className=" hover:text-[#FF553E]">Contact us</a>
                        </li>
                    </nav>
                </div>
                <div className="px-4 md:col-span-1 col-span-2">
                    <h2 className="title-font  tracking-widest text-xl mb-3">Download App Now</h2>
                    <nav className="list-none flex gap-2 mb-10">
                        <li>
                            <a className="">
                                <img src={playstore} alt="playstore" />
                            </a>
                        </li>
                        <li>
                            <a className="">
                                <img src={appstore} alt="playstore" />
                            </a>
                        </li>

                    </nav>
                    <h2 className="title-font  tracking-widest text-xl mb-3">News Letter</h2>
                    <div className='relative'>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your email" required />
                        <button type="submit" className="submit-btn w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#FF553E] " >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>    
                        </button>

                    </div>
                </div>
            </div>
            <div className="bg-black">
                <div className="w-11/12 mx-auto py-7 px-5 border-t-2 flex flex-wrap text-center flex-col sm:flex-row">
                    <p className=" text-md text-center mx-auto">© 2019-2024 BTHAWK Developed with  by ZUCOL
                    </p>

                </div>
            </div>
        </footer>
    )
}
