import React, { useEffect } from 'react'
import help1 from '../../assets/image/help-cractor-img.webp'
import Listicon from '../../assets/image/list-icon.svg'
import Aos from 'aos';


export default function Howcan() {

    useEffect(() => {
        Aos.init(); // Refresh AOS for dynamically added components
      });
    return (
        <>
            <div className='bg-[#22249B] text-white overflow-hidden'>
                <div className="lg:w-8/12 mx-auto text-center p-10 aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                    <h1 className='text-3xl pb-3'>BTHAWK: आपके Business का डॉक्टर</h1>
                    <p className='text-slate-300'>Just like a doctor diagnosing and treating health issues, BTHAWK identifies business-related challenges, analyzes them thoroughly, and initiates a tailored Solution.It’s a complete accounting solution designed to simplify your financial and business complexities, empowering you to focus on growth and success of BUSINESS. <b className='text-[#FFC403]'>BTHAWK बिलकुल एक डॉक्टर की तरह आपके Business से जुड़ी समस्याओं का सही Resolution करता है</b></p>
                </div>
                <div className='w-11/12 mx-auto grid lg:grid-cols-3 mt-4'>
                    <div className="aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                        <img src={help1} alt="cractor" className='mx-auto' />
                    </div>
                    <div className="lg:col-span-2 lg:w-9/12 mx-auto aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                        <h1 className='text-2xl pb-3'><span className='text-[#FFC403]'>BTHAWK</span> Integrated Partner for Business Success</h1>
                        <p className='text-slate-300'>BTHAWK is the ultimate GST billing and accounting solution, trusted by businesses across diverse industries.We specialize in helping you manage your <b className='text-[#FFC403]'>Accounting activities, streamline Financial processes, and ensure Compliance (GST& IT) with government regulations.</b> All this is achieved with a focus on innovation and cost efficiency, enabling seamless operations and sustainable growth for your business.</p>
                        <ul className='md:mt-12 mt-8 mb-8'>
                            <li className='mt-5 flex text-xl'> <img className='mr-2' src={Listicon} alt="" />GST and Income Tax Filings</li>
                            <li className='mt-5 flex text-xl'> <img className='mr-2' src={Listicon} alt="" />Compliance Guidance</li>
                            <li className='mt-5 flex text-xl'> <img className='mr-2' src={Listicon} alt="" />Accounting & Inventory Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
