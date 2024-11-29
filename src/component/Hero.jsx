import PropTypes from 'prop-types';
const Hero = ({text, show}) => {
  return (
    <section className="about-hero-section">
      <div className="about-hero_img h-[9rem] lg:h-[33rem] md:h-[18rem]" />
      <div className="about-hero_content">
        <div className="container mx-auto md:-mt-16 bg-shadow">
          <div className={`${!show && "py-6"} w-10/12 mx-auto`}>
              {!show && <h2 className="mb-3 text-3xl text-center text-[#22249B]">Contact Us</h2>}
            <p className={`${show ? "py-8" : ""} text-base text-center`}>
              {show && <span className="text-orange-500">BTHAWK:</span>}
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
    text: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
  };

export default Hero;
