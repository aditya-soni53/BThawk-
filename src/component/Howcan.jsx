import React from 'react'
import help1 from '../assets/image/help-cractor-img.svg'
import Listicon from '../assets/image/list-icon.svg'


export default function Howcan() {
    return (
        <>
            <div className='bg-[#22249B] text-white'>
                <div className="md:w-8/12 mx-auto text-center p-10">
                    <h1 className='text-3xl pb-3'>How Can We Help In Your Business ?</h1>
                    <p className='text-slate-300'>Just like a doctor, BTHAWK makes the correct diagnosis of the business related problem, analyses it, & then initiates the process of treating the problem. BTHAWK is a Complete Accounting Solutions to your accounting & business complication.</p>
                </div>
                <div className='w-11/12 mx-auto grid md:grid-cols-3 mt-4 '>
                    <div className='col-span-1'>
                       <img src={help1} alt="" />
                    </div>
                    <div className='col-span-2 w-9/12 mx-auto'>
                    <h1 className='text-2xl pb-3'><span className='text-[#FFC403]'>BTHAWK</span> Loyal Partner For Your Business</h1>
                    <p className='text-slate-300'>BTHAWK is one of the best GST Billing software available in the market which is serving Businessmen from all the fields and backgrounds. We assist our clients in handling their accounting activities in the most innovative and cost effective manner.</p>
                    <ul className='mt-12'>
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
