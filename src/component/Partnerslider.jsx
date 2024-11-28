import React from 'react'
import Slider from "react-slick";
import partner1 from '../assets/image/partner-1.svg'
import partner2 from '../assets/image/partner-2.svg'
import partner3 from '../assets/image/partner-3.svg'
import partner4 from '../assets/image/partner-4.svg'
import partner5 from '../assets/image/partner-5.svg'
import partner6 from '../assets/image/partner-6.svg'
import partner7 from '../assets/image/partner-7.svg'
import partner8 from '../assets/image/partner-8.svg'
import partner9 from '../assets/image/partner-9.svg'

export default function Partnerslider() {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
      };
      const partnerimg = [
        {
            id:1,
            parnter_img:partner1
        },
        {
            id:2,
            parnter_img:partner2
        },
        {
            id:3,
            parnter_img:partner3
        },
        {
            id:4,
            parnter_img:partner4
        },
        {
            id:5,
            parnter_img:partner5
        },
        {
            id:6,
            parnter_img:partner6
        },
        {
            id:7,
            parnter_img:partner7
        },
        {
            id:8,
            parnter_img:partner8
        },
        {
            id:9,
            parnter_img:partner9
        }
      ]
    return (
        <>
            <div className='w-11/12 text-white rounded-2xl mx-auto mt-14 partner-slider py-12'>
                <div className="lg:w-7/12 w-11/12 mx-auto text-center  mb-14">
                    <h1 className='text-3xl pb-2 capitalize'>Our Trusted Clients</h1>
                    <p className=''>BTHAWK provide complete accounting solutions and pay utmost attention towards our client's satisfaction that is why we have 100% client retention till date.</p>
                </div>
                <div className='mx-auto md:w-10/12 w-12/12 partner-slider-main'>
                    <Slider {...settings}>
                        {
                            partnerimg.map((item)=>
                            <div>
                                <img src={item.parnter_img} alt="partner-img" />
                            </div>
                            
                            )
                        }
                        
                    </Slider>
                </div>

            </div>
        </>
    )
}
