import React from 'react'
import clientbanner1 from '../assets/image/clientbanner-1.png'
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
    return (
        <>
            <div className='bg-[#000] text-white'>
                <div className='w-11/12 mx-auto grid lg:grid-cols-2 gap-4 mt-14 pb-12'>
                    <div className="cient-review md:p-12 p-6 pt-12">
                        <h1 className='text-2xl mb-5'>What Our Client Say About Us!</h1>
                        <div className="slider-container">
                        <Slider {...settings}>
                            {
                                review.map((item) =>
                                    <div>
                                        <div className='review flex flex-row gap-4'>
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
                        <p className='text-white mt-5 flex'>Visit our wall of love <img src={uparrow} alt="arrow" /></p>

                    </div>
                    <div className="client-banner grid place-content-center">
                        <img src={clientbanner1} className='mx-auto trust-img' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
