import React,{useEffect} from 'react'
import Slider from 'react-slick';
import Banner1 from '../../assets/image/new/banner-1.webp'
import Banner2 from '../../assets/image/new/banner-2.webp'
import Banner3 from '../../assets/image/banner-3.webp'
import Aos from 'aos';

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

      useEffect(() => {
        Aos.init(); // Refresh AOS for dynamically added components
      });


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
        <div className="about-bthawk md:w-7/12 overflow-hidden" data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
            <p><b className='primary-color'>BTHAWK:</b>A Name with Meaning and Purpose </p>
            <p>The "BT" in BTHAWK stands for Bell Technology, reflecting our commitment to cutting-edge innovation. The term "HAWK" is deliberate, symbolizing vigilance and precision.</p>
            <p>Just as a hawk keeps a 360-degree watch over its surroundings, BTHAWK ensures comprehensive oversight of every financial and accounting detail for businesses and their channel partners — the true backbone of any organization.</p>
            <p>BTHAWK is not just a solution but a trusted partner dedicated to simplifying your financial complexities and enhancing Business Growth.</p>
        </div>
        </>
      );
}
