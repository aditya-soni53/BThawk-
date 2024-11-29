import React from 'react'
import clientbanner1 from '../assets/image/clientbanner-1.png'
import clientbanner2 from '../assets/image/clientbanner-2.png'
import clientbanner3 from '../assets/image/clientbanner-3.gif'
import clientbanner4 from '../assets/image/clientbanner-4.png'
import clientbanner5 from '../assets/image/clientbanner-5.png'
import Slider from "react-slick";
import reviewimg from '../assets/image/review-img.svg'
import uparrow from '../assets/image/arrow-up-right.svg'
// import faArrowUpRight from '@fortawesome/react-fontawesome'


export default function Testimonials() {
    const settings = {
        dots: false,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };
    const review = [
        {
            id: 1,
            client_name: "1Airtel Distributor-Mumbai",
            review: "I have been using BTHAWK software since lkjfskfjskast year. I can easily manage all the retailers and stock. I can view multiple reports like sales ",
            client_img: reviewimg
        },
        {
            id: 2,
            client_name: "2Airtel Distributor-Mumbai",
            review: "I have been using BTHAWK software since lkjfskfjskast year. I can easily manage all the retailers and stock. I can view multiple reports like sales ",
            client_img: reviewimg
        },
        {
            id: 3,
            client_name: "3Airtel Distributor-Mumbai",
            review: "I have been using BTHAWK software since lkjfskfjskast year. I can easily manage all the retailers and stock. I can view multiple reports like sales ",
            client_img: reviewimg
        },
        {
            id: 4,
            client_name: "4Airtel Distributor-Mumbai",
            review: "I have been using BTHAWK software since lkjfskfjskast year. I can easily manage all the retailers and stock. I can view multiple reports like sales ",
            client_img: reviewimg
        },
        {
            id: 5,
            client_name: "5Airtel Distributor-Mumbai",
            review: "I have been using BTHAWK software since lkjfskfjskast year. I can easily manage all the retailers and stock. I can view multiple reports like sales ",
            client_img: reviewimg
        }
    ]

    const banner = {
        dots: false,
        arrows:false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
    return (
        <>
            <div className='bg-[#000] text-white'>
                <div className='grid w-11/12 gap-4 pb-12 mx-auto lg:grid-cols-2 mt-14'>
                    <div className="p-6 pt-12 cient-review md:p-12">
                        <h1 className='mb-5 text-2xl'>What Our Client Say About Us!</h1>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {
                                    review.map((item) =>
                                        <div key={item.id}>
                                            <div className='flex flex-row gap-4 review'>
                                                <img src={item.client_img} alt="review" />
                                                <div>
                                                    <p className='review-data'>{item.review}</p>
                                                    <i>- {item.client_name}</i>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </Slider>
                        </div>
                        <p className='flex mt-5 text-white'>Visit our wall of love <img src={uparrow} alt="arrow" /></p>

                    </div>
                    <div className="p-6 pt-12 client-banner md:p-12">
                        <div className="slider-container">
                        <Slider {...banner}>
                            <div>
                            <img src={clientbanner1} className='mx-auto trust-img' alt="" />
                            </div>
                            <div>
                            <img src={clientbanner2} className='mx-auto trust-img' alt="" />
                            </div>
                            <div>
                            <img src={clientbanner3} className='mx-auto trust-img' alt="" />
                            </div>
                            <div>
                            <img src={clientbanner4} className='mx-auto trust-img' alt="" />
                            </div>
                            <div>
                            <img src={clientbanner5} className='mx-auto trust-img' alt="" />
                            </div>
                        </Slider>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
