import React from "react";
import Slider from "react-slick";
import reviewimg from "../../assets/image/review-img.webp";
import reviewimg1 from "../../assets/image/review-img-1.webp";
import reviewimg2 from "../../assets/image/review-img-2.webp";
import reviewimg3 from "../../assets/image/review-img-3.webp";
import reviewimg4 from "../../assets/image/review-img-4.webp";
import reviewimg5 from "../../assets/image/review-img-5.webp";
// import reviewimg6 from '../../assets/image/review-img-6.webp'
import reviewimg7 from "../../assets/image/review-img-7.webp";
import reviewimg8 from "../../assets/image/review-img-8.webp";
import reviewimg9 from "../../assets/image/review-img-9.webp";
import uparrow from "../../assets/image/arrow-up-right.svg";
import Heroslider from "../../component/Heroslider";
import { Link } from "react-router-dom";
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
      client_name: "विकास जैन (अक्षत इंटरप्राइजेज)",
      review:
        "मेरा नाम विकास जैन है और मेरी फर्म अक्षत इंटरप्राइजेज हैं जिसका कंप्लायंस का काम आपकी टीम द्वारा किया जा रहा है और मुझे इसमें कोई दिक्कत नहीं आ रही है। मेरा सभी काम समय पर हो रहा है।",
      client_img: reviewimg,
    },
    {
      id: 2,
      client_name: "DEEPAK KUMAR (M/S SWATANTRA TELICOM)",
      review:
        "MAI DEEPAK KUMAR HU. MERE FIRM KA NAAM M/S SWATANTRA TELICOM HAI. BTHAWK KE KAAM SE MAI BHUT SANTUSHT HU. INKI  SERVICES BHI BHUT ACHI HAI. MERE SABHI KAAM TIMR SE HO RHE HAI",
      client_img: reviewimg1,
    },
    {
      id: 3,
      client_name: "सुरेश कुमार चंद्राकर (साधना मोबाइल)",
      review:
        "मेरा नाम सुरेश कुमार चंद्राकर है। मेरा फर्म का नाम साधना मोबाइल और मैं Airtel का डिस्ट्रीब्यूटर हूँ। मैं जिला -कवर्धा, छत्तीसगढ़ से हूँ। मेरा काम BTHAWK टीम द्वारा किया जा रहा है और इनकी सेवा बहुत अच्छी है और सराहनीय है।",
      client_img: reviewimg2,
    },
    {
      id: 4,
      client_name: "RANJIT KUMAR SAHU (MAA TARINI TELECOM)",
      review:
        "मेरा नाम RANJIT KUMAR SAHU है। मेरे फर्म का नाम M/S MAA TARINI TELECOM है। इनकी सर्विसेज भी बहुत अच्छी है। मुझे इनके काम करने का तरीका पसंद है।से मेरा काम अच्छे से चल रहा है। मुझे कोई दिक्कत नहीं है।",
      client_img: reviewimg3,
    },
    {
      id: 5,
      client_name: "Panchanan Swain (Swain Agency)",
      review:
        "Helo Team Mera Naam Panchanan Swain Hai. Mere Firm Ka Naam Swain Agency. Jab Se Mai Bthawk Se Juda Hu. Mera Kaam Ache Se Chal Rha Hai. Thanks Team 🙏🏻",
      client_img: reviewimg4,
    },
    {
      id: 6,
      client_name: "VIJAY SINGH (MAA LAXMI COMMUNICATION)",
      review:
        "मेरा नाम VIJAY SINGH है। मेरे फर्म का नाम M/S JAY MAA LAXMI COMMUNICATION AND GENERAL STORE है। मेरा काम से बहुत अच्छे से चल रहा है। इनके काम से मुझे कोई परेशानी नहीं है। धन्यवाद",
      client_img: reviewimg7,
    },
    {
      id: 7,
      client_name: "omprakash (Parvati agency)",
      review:
        "Mera nam omprakash hai or me Parvati agency se hu Muje aapki service bahut acchi lagi me aapki service se santusht hu",
      client_img: reviewimg,
    },
    {
      id: 8,
      client_name: "VIRENDRA PANWAR (SANWARIYA AGENCY)",
      review:
        "MERA NAAM VIRENDRA PANWAR HAI. MERA FIRM NAME SANWARIYA AGENCY HAI. BTHAWK KI SERVICES BHUT ACHI HAI. MAI INKE KAAM SE BHUT SANTUSHT HU",
      client_img: reviewimg,
    },
    {
      id: 9,
      client_name: "मुन्तज़र खान (M Traders)",
      review:
        "मेरा नाम मज़हर खान मुन्तज़र खान है।  मेरे फर्म का नाम M Traders है। मेरा काम BTHAWK से चल रहा है इनकी सर्विसेज बहुत अच्छी है।  मै इनके काम से बहुत खुश हु। और टीम का व्यव्हार भी बहुत अच्छा है।",
      client_img: reviewimg5,
    },
    {
      id: 10,
      client_name: "RAJENDRA BENIWAL (SHREE GANESH COMPUTER AND MOBILE)",
      review:
        "Mera name RAJENDRA BENIWAL hai meri firm ka name SHREE GANESH COMPUTER AND MOBILE hai. Mera koi bthawk team dwara time par kiya ja rha hai. Mujhe aasha hai aap aage bhi aise hi sehyog krte rehenge.",
      client_img: reviewimg9,
    },
  ];

  return (
    <>
      <div className="bg-[#000] text-white">
        <div className="grid w-11/12 gap-4 mx-auto lg:grid-cols-2 grid-cols-1 mt-14">
          <div className="pt-12 cient-review md:p-12 w-full">
            <h1 className="mb-5 text-2xl">What Our Client Say About Us!</h1>
            <div className="slider-container">
              <Slider {...settings}>
                {review.map((item) => (
                  <div key={item.id}>
                    <div className="flex flex-row gap-4 review">
                      <img src={item.client_img} alt="review" />
                      <div>
                        <p className="review-data">{item.review}</p>
                        <i>- {item.client_name}</i>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <Link to="./Ourcustomer" className="flex mt-5 text-white">
              Visit our wall of love
              <img src={uparrow} alt="arrow" />
            </Link>
          </div>
          <div className="md:p-12 lg:p-6 lg:pt-12 w-full">
            <Heroslider />
          </div>
        </div>
      </div>
    </>
  );
}
