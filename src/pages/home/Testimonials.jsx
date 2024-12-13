import React from 'react'
import Slider from "react-slick";
import reviewimg from '../../assets/image/review-img.svg'
import uparrow from '../../assets/image/arrow-up-right.svg'
import Heroslider from '../../component/Heroslider'
import { Link } from 'react-router-dom';
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
        vertical: true,
        verticalSwiping: true,
        // beforeChange: function (currentSlide, nextSlide) {
        //     console.log("before change", currentSlide, nextSlide);
        // },
        // afterChange: function (currentSlide) {
        //     console.log("after change", currentSlide);
        // }
    };
    const review = [
        {
            id: 1,
            client_name: "विकास जैन(अक्षत इंटरप्राइजेज)",
            review: "मेरा नाम विकास जैन है और मेरी फर्म अक्षत इंटरप्राइजेज हैं जिसका कंप्लायंस का काम आपकी टीम द्वारा किया जा रहा है और मुझे इसमें कोई दिक्कत नहीं आ रही है। मेरा सभी काम समय पर हो रहा है।",
            client_img: reviewimg
        },
        {
            id: 2,
            client_name: "DEEPAK KUMAR (M/S SWATANTRA TELICOM)",
            review: "MAI DEEPAK KUMAR HU. MERE FIRM KA NAAM M/S SWATANTRA TELICOM HAI. BTHAWK KE KAAM SE MAI BHUT SANTUSHT HU. INKI  SERVICES BHI BHUT ACHI HAI. MERE SABHI KAAM TIMR SE HO RHE HAI",
            client_img: reviewimg
        },
        {
            id: 3,
            client_name: "3 Airtel Distributor-Mumbai",
            review: "I have been using BTHAWK software since lkjfskfjskast year. I can easily manage all the retailers and stock. I can view multiple reports like sales ",
            client_img: reviewimg
        },
        {
            id: 4,
            client_name: "4 Airtel Distributor-Mumbai",
            review: "I have been using BTHAWK software since lkjfskfjskast year. I can easily manage all the retailers and stock. I can view multiple reports like sales ",
            client_img: reviewimg
        },
        {
            id: 5,
            client_name: "5 Airtel Distributor-Mumbai",
            review: "I have been using BTHAWK software since lkjfskfjskast year. I can easily manage all the retailers and stock. I can view multiple reports like sales ",
            client_img: reviewimg
        }
    ]

   
    return (
        <>
            <div className='bg-[#000] text-white'>
                <div className='grid w-11/12 gap-4 mx-auto lg:grid-cols-2 grid-cols-1 mt-14'>
                    <div className="pt-12 cient-review md:p-12 w-full">
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
                        <Link to="./Ourcustomer" className='flex mt-5 text-white'>Visit our wall of love <img src={uparrow} alt="arrow" /></Link>

                    </div>
                    <div className="md:p-12 lg:p-6 lg:pt-12 w-full">
                       
                        <Heroslider />
                    
                    </div>
                    
                </div>
            </div>
        </>
    )
}
