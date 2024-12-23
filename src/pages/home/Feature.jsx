import React, { useEffect, useState } from 'react';
import featureimg1 from '../../assets/image/feature-img-1.svg'
import featureimg2 from '../../assets/image/feature-img-2.svg'
import featureimg3 from '../../assets/image/feature-img-3.svg'
import featureimg4 from '../../assets/image/feature-img-4.svg'
import featureimg5 from '../../assets/image/feature-img-5.svg'
import featureimg6 from '../../assets/image/feature-img-6.svg'
import Aos from 'aos';

export default function Feature() {
    const [offset, setOffset] = useState(0);
    const [bgPosition, setBgPosition] = useState();

    useEffect(() => {
        const onScroll = () => {
        const scrollY = window.scrollY;
        setOffset(scrollY);

        // Update background position based on scroll
        if (scrollY >= 900) {
            console.log(scrollY);
            setBgPosition(scrollY - 750); // Adjust for smoother transition
            console.log(scrollY - 1200);
            
        } else {
            setBgPosition(0); // Reset position if below threshold
        }
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        // Cleanup event listener on unmount
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // console.log(offset); 


    useEffect(() => {
        Aos.init(); // Refresh AOS for dynamically added components
      });
      
    return (
        <>
            <div className='feature w-11/12 mx-auto relative grid lg:grid-cols-3 gap-2 mb-4' style={{backgroundPosition: `-${bgPosition}px center`}}>
                <div className="col-span-1 aos-animate" data-aos="fade-right" data-aos-duration="200" data-aos-delay="200">
                    <div className='sticky top-[120px]'>
                        <h1 className='Feature-heading border-b-2 border-b-zinc-950 w-full'>Top Features</h1>
                        <p className='pt-2 text-gray-600'>Start Working with Finest GST Billing Software and stay ahead from your competitors with more focus on core Business. With advanced technology,<b className='text-black'> BTHAWK </b>provide you complete accounting solutions for your growing business.</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 lg:w-9/12 mt-3 mb-4 ml-auto col-span-2 overflow-hidden p-2">
                    <div className="feature-card aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                        <h1 className='px-[25px] text-xl text-center'>GST Compliance</h1>
                        <p className='px-[25px] text-center'>The cancer in disguise problem for a Businessman will be sorted. Our aim is to make our client satisfied and stress free from all the compliance complications.</p>
                        <div className='card-footer mt-7'>
                            <img className='ml-auto' src={featureimg1} alt="" />
                        </div>
                    </div>
                    <div className="feature-card aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                        <h1 className='px-[25px] text-xl text-center'>Instant Invoice Generation</h1>
                        <p className='px-[25px] text-center'>Be digital with digitalized India. No need to use paper and pen. Share invoices in one go via WhatsApp, Email etc. in PDF format.</p>
                        <div className='card-footer mt-7'>
                            <img className='ml-auto' src={featureimg2} alt="" />
                        </div>
                    </div>
                    <div className="feature-card aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                        <h1 className='px-[25px] text-xl text-center'>Stock Management</h1>
                        <p className='px-[25px] text-center'>We know the intricacies of Stock Management and the importance of effective stock control</p>
                        <div className='card-footer mt-7'>
                            <img className='ml-auto' src={featureimg3} alt="" />
                        </div>
                    </div>
                    <div className="feature-card aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                        <h1 className='px-[25px] text-xl text-center'>Sales Tracking</h1>
                        <p className='px-[25px] text-center'>BTHAWK gives you complete freedom to track your entire sales and go through various dimensions during sales process.</p>
                        <div className='card-footer mt-7'>
                            <img className='ml-auto' src={featureimg4} alt="" />
                        </div>
                    </div>
                    <div className="feature-card aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                        <h1 className='px-[25px] text-xl text-center'>DSR Management</h1>
                        <p className='px-[25px] text-center'>Gone are the days of pen and paper, it's time to adapt digitalization for being safer. BTHAWK gives you automated DSR maintenance.</p>
                        <div className='card-footer mt-7'>
                            <img className='ml-auto' src={featureimg5} alt="" />
                        </div>
                    </div>

                    <div className="feature-card aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                        <h1 className='px-[25px] text-xl text-center'>Collection Management</h1>
                        <p className='px-[25px] text-center'>2 hours job brevatised in 2 minutes job. Just enter the denomination and you are good to go with your entire collection.</p>
                        <div className="card-footer mt-7 aos-animate" data-aos="fade-left" data-aos-duration="200" data-aos-delay="200" >
                            <img className='ml-auto' src={featureimg6} alt="" />
                        </div>
                    </div>
                    


                </div>
            </div>
        </>
    )
}
