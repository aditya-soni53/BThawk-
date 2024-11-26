import React from 'react'
import Slider from 'react-slick';
import Banner1 from '../assets/image/banner-1.svg'
import Banner2 from '../assets/image/banner-2.svg'
import Banner3 from '../assets/image/banner-3.svg'


export default function Banner() {
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
    autoplaySpeed: 3000,
        slidesToScroll: 1,
      };
      return (
        <>
        <div className='w-full' id='banner-slider'>
        <Slider {...settings}>
          <div>
            <img src={Banner1} alt="banner1" />
          </div>
          <div>
          <img src={Banner2} alt="banner2" />

          </div>
          <div>
          <img src={Banner3} alt="banner3" />
          </div>
         
        </Slider>
        </div>
        <div className="about-bthawk w-7/12">
            <p><b className='primary-color'>BTHAWK:</b> Where the word BT stands for Bell Technology and there is a reason that we have used the term HAWK because, Just a way a Hawk keeps a <b className='primary-color'>360 degree </b> eye on every single thing similarly, We keep a <b className='primary-color'>360 degree </b> eye on every financial and <b className='primary-color'>accounting complications of the businessmen </b> and the channel partners who are the backbone of a company.</p>
        </div>
        </>
      );
}
