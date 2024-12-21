import React, { useContext, useEffect } from 'react'
import micon1 from '../../assets/image/module-icon-1.svg'
import micon2 from '../../assets/image/module-icon-2.svg'
import micon3 from '../../assets/image/module-icon-3.svg'
import Aos from 'aos';
import { Context } from '../../Context';

export default function Moduls() {
    const {setIsModalOpen, isModalOpen} = useContext(Context);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    useEffect(() => {
        Aos.init(); // Refresh AOS for dynamically added components
      });
    return (
        <>
            <div className="lg:w-8/12 w-11/12 mx-auto text-center md:p-10 md:mt-5 mt-14 mb-4 aos-animate overflow-hidden" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                <h1 className='text-3xl pb-3'> Different plan of <span className='text-[#22249B]'>BT</span><span className='text-[#E45325]'>HAWK</span> as per your need</h1>
                <p className=''>(With 100% customization) </p>
            </div>
            <div className='w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 md:gap-14 gap-6 mt-2 overflow-hidden'>
                <div className="module-1 aos-animate" data-aos="fade-right" data-aos-duration="600" data-aos-delay="400">
                    <h3>Businessman PLan</h3>
                    <p className='text-slate-700'>(With Salesman)</p>
                    <ul className='mt-4 mb-3'>
                        <li className='mt-2 flex'> <img className='mr-2' src={micon1} alt="" />Businessman App + FSE App + Free Retailer App</li>
                        <li className='mt-2 flex'> <img className='mr-2' src={micon1} alt="" />Full Access</li>
                        <li className='mt-2 flex'> <img className='mr-2' src={micon1} alt="" />Minimum 2 User License Required</li>
                    </ul>
                    <button className='primary-btn mt-3' onClick={toggleModal}>Schedule a Demo</button>
                </div>
                <div className="module-2 aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                    <h3>Businessman Plan</h3>
                    <p className='text-slate-700'>(Without Salesman).</p>
                    <ul className='mt-4 mb-3'>
                        <li className='mt-2 flex'> <img className='mr-2' src={micon2} alt="" />Businessman App + FSE App</li>
                        <li className='mt-2 flex'> <img className='mr-2' src={micon2} alt="" />Free Retailer App</li>
                        <li className='mt-2 flex'> <img className='mr-2' src={micon2} alt="" />Full Access</li>
                    </ul>
                    <button className='primary-btn mt-3' onClick={toggleModal}>Schedule a Demo</button>
                </div>
                <div className="module-3 aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="400">
                    <h3>Retail Plan</h3>
                    <p className='text-slate-700'>(Complete)</p>
                    <ul className='mt-4 mb-3'>
                        <li className='mt-2 flex'> <img className='mr-2' src={micon3} alt="" />Businessman App + FSE App</li>
                        <li className='mt-2 flex'> <img className='mr-2' src={micon3} alt="" />Free Retailer App</li>
                        <li className='mt-2 flex'> <img className='mr-2' src={micon3} alt="" />Full Access</li>
                    </ul>
                    <button className='primary-btn mt-3' onClick={toggleModal}>Schedule a Demo</button>
                </div>

            </div>
        </>
    )
}
