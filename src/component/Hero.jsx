import React from 'react';
const Hero = ({text, show, heading, bg}) => {

  const mb_3 = heading === 'Privacy Policy' || heading === 'Terms & Conditions' ? 'mb-0' : 'mb-3';
  return (
    <section className="about-hero-section" style={{backgroundColor: bg}}>
      <div className="about-hero_img" />
      <div className="about-hero_content">
        {/* <img className='w-full' src={bannerimage} alt="hero-img" /> */}
        
        <div className="lg:w-8/12 w-11/12 mx-auto md:-mt-12 relative z-10 bg-shadow">
          <div className={`${!show && "lg:py-6 py-3"} w-10/12 mx-auto`}>
              {!show && <h2 className={`${mb_3} lg:text-3xl md:text-2xl text-xl text-center text-[#22249B]`}>{heading}</h2>}
            <p className={`${show ? "lg:py-8 py-4" : ""} text-base text-center`}>
              {show && <span className="text-orange-500">BTHAWK:</span>}
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
