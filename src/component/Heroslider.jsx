import React from 'react'
import Slider from "react-slick";
import clientbanner1 from '../assets/image/clientbanner-1.png'
import clientbanner2 from '../assets/image/clientbanner-2.png'
import clientbanner3 from '../assets/image/clientbanner-3.gif'
import clientbanner4 from '../assets/image/clientbanner-4.png'
import clientbanner5 from '../assets/image/clientbanner-5.png'

export default function Heroslider() {
    const banner1 = {
        dots: false,
        arrows:false,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
    return (
        <>
           <div className='slider-container '>
           <Slider {...banner1} >
                <div>
                    <img src={clientbanner1} className='rounded-xl mx-auto' alt="heroslider" />
                </div>
                <div>
                    <img src={clientbanner2} className='rounded-xl mx-auto' alt="heroslider" />
                </div>
                <div>
                    <img src={clientbanner3} className='rounded-xl mx-auto' alt="heroslider" />
                </div>
                <div>
                    <img src={clientbanner4} className='rounded-xl mx-auto' alt="heroslider" />
                </div>
                <div>
                    <img src={clientbanner5} className='rounded-xl mx-auto' alt="heroslider" />
                </div>
            </Slider>
           </div>
        </>
    )
}
