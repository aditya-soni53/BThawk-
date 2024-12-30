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
                    <h1 className='text-3xl pb-3'>How Can We Help In Your Business ?</h1>
                    <p className='text-slate-300'>Just like a doctor, BTHAWK makes the correct diagnosis of the business related problem, analyses it, & then initiates the process of treating the problem. BTHAWK is a Complete Accounting Solutions to your accounting & business complication.</p>
                </div>
                <div className='w-11/12 mx-auto grid lg:grid-cols-3 mt-4'>
                    <div className="aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                        <img src={help1} alt="cractor" className='mx-auto' />
                    </div>
                    <div className="lg:col-span-2 lg:w-9/12 mx-auto aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                        <h1 className='text-2xl pb-3'><span className='text-[#FFC403]'>BTHAWK</span> Loyal Partner For Your Business</h1>
                        <p className='text-slate-300'>BTHAWK is the best GST Billing solution available in the market which is serving bussiness accross the industry & bussinesses. We assist our clients in handling their accounting activities in the most innovative and cost effective manner.</p>
                        <ul className='md:mt-12 mt-8 mb-8'>
                            <li className='mt-5 flex text-xl'> <img className='mr-2' src={Listicon} alt="" />Complete Accounting Solutions for Ease of Doing Business</li>
                            <li className='mt-5 flex text-xl'> <img className='mr-2' src={Listicon} alt="" />Direct and Indirect tax filings are done as per regulations</li>
                            <li className='mt-5 flex text-xl'> <img className='mr-2' src={Listicon} alt="" />We offer guidance required to fulfil all the compliance measures.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
