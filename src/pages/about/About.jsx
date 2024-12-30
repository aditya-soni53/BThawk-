import { Link } from "react-router-dom";
import { mentorsImg } from "../../helper";
import Hero from "../../component/Hero";
import { Helmet } from "react-helmet";
import banner1 from '../../assets/image/about-banner.webp'
import Topbanner from "../../component/layout/topBanner/Topbanner";

const features = [
  {
    id: 1,
    title: "B",
    description: "Bills at anyplace, anytime",
    margin_left: true,
  },
  {
    id: 2,
    title: "A",
    description: "Auto Tax Calculation",
    margin_left: true,
  },
  {
    id: 3,
    title: "M",
    description: "Mobile App Based E-invoice",
    margin_left: true,
  },
  {
    id: 4,
    title: "O",
    description: "Order Management",
    margin_left: true,
  },
  {
    id: 5,
    title: "I",
    description: "Inventory Management",
    margin_left: false,
  },
  {
    id: 6,
    title: "G",
    description: "GST Compliance",
    margin_left: true,
  },
  {
    id: 7,
    title: "B",
    description: "Business Reports",
    margin_left: true,
  },
  {
    id: 8,
    title: "T",
    description: "Track Salesman Location",
    margin_left: true,
  },
];

const mentors = [
  {
    id: 1,
    name: "Dr. Sanjay Khandelwal",
    designation: "Founder",
    img: mentorsImg[0],
    link: "https://www.linkedin.com/in/dr-sanjay-khandelwal-phd-b3b8078/",
  },
  {
    id: 2,
    name: "Dushyant Yadav",
    designation: "Founder",
    img: mentorsImg[1],
    link: "https://www.linkedin.com/in/ceodushyant/",
  },
  {
    id: 3,
    name: "Ankush Tambi",
    designation: "Co-Founder",
    img: mentorsImg[2],
    link: "https://www.linkedin.com/in/ankushtambi/",
  },
  {
    id: 4,
    name: "Arpit Aeron",
    designation: "Operation Head",
    img: mentorsImg[3],
    link: "https://www.linkedin.com/in/arpit-aeron/",
  },
  {
    id: 5,
    name: "Abhishek Sharma",
    designation: "CFO",
    img: mentorsImg[4],
    link: "https://www.linkedin.com/in/cfozucol/",
  },
  {
    id: 6,
    name: "Padam Yadav",
    designation: "Technical Head",
    img: mentorsImg[5],
    link: "https://www.linkedin.com/in/padam-yadav/",
  },
  {
    id: 12,
    name: "Shilpa Khandelwal",
    designation: "Technical Leader",
    img: mentorsImg[11],
    link: "https://www.linkedin.com/in/shilpa-khandelwal-09b850107/",
  },
  {
    id: 7,
    name: "Sunil Pareek",
    designation: "Compliance Leader",
    img: mentorsImg[6],
    link: "https://www.linkedin.com/in/agmzucol/",
  },
  {
    id: 8,
    name: "Neha Jain",
    designation: "Compliance Leader",
    img: mentorsImg[7],
    link: "https://www.linkedin.com/in/agm-zucol-neha/",
  },
  {
    id: 11,
    name: "Ghanshyam Vyas",
    designation: "Complince Leader",
    img: mentorsImg[10],
    link: "https://www.linkedin.com/in/cmno1zucol/",
  },
  {
    id: 13,
    name: "Jeevika Tomer",
    designation: "Business Head",
    img: mentorsImg[12],
    link: "https://www.linkedin.com/in/jeevika-tomer-7b198b208/",
  },
  {
    id: 9,
    name: "Priyanka Pal",
    designation: "Business Leader",
    img: mentorsImg[8],
    link: "https://www.linkedin.com/in/priyanka-pal-22bb99235/",
  },
  {
    id: 10,
    name: "Ankit Gori",
    designation: "Business Leader",
    img: mentorsImg[9],
    link: "https://www.linkedin.com/in/ankit-gori-00b16a23a/",
  }
];

const HeroText = ` Bell Technology’s
              BTHAWK ensures a 360-degree focus on your financial and accounting
              needs, just like a hawk watches its surroundings. With BTHAWK, you
              don’t need an accountant or extensive accounting knowledge. We’re
              your trusted support, freeing you to focus on growing your
              business. Say goodbye to outdated systems—our modern solution is
              designed for businesses across all industries, from telecom and
              pharma to retail and more. Available in all Indian languages,
              BTHAWK simplifies compliance and empowers businesses nationwide.
              Stay ahead with BTHAWK—your partner for financial clarity and
              business excellence.`;

const About = () => {

  const basePath = window.location.origin;


  return (
    <>
      <Helmet>
        <title>BTHAWK About us </title>
        <meta
          name="keywords"
          content="Jobs, career, billing software, accounting software. "
        />
        <meta property="og:url" content={`${basePath}/about`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GST billing and accounting | GST Billing software | ITR Filing- BTHAWK"
        />
        <meta
          property="og:description"
          content="GST billing and accounting | GST Billing software | ITR Filing- BTHAWK"
        />
        <meta property="twitter:domain" content="bthawk.com" />
        <meta property="twitter:url" content={`${basePath}/about`} />
        <meta
          name="twitter:title"
          content="GST billing and accounting | GST Billing software | ITR Filing- BTHAWK"
        />
      </Helmet>
      <Topbanner banner={banner1} />
      <Hero text={HeroText} show={true} bg={"#22249b"} />
      <section className="our-mentors bg-[#22249B] py-8">
        <div className="container mx-auto">
          <div className="text-center text-white about-features_heading">
            <h2 className="text-3xl">Our Mentors</h2>
            <p className="mt-2 text-xl md:w-7/12 md:mx-auto">
              Start working with <span className="text-orange-500">BTHAWK</span>{" "}
              that can provide everything you need to generate awareness, drive
              traffic, connect.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-12 our-mentors_box gap-y-12">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="flex flex-col items-center justify-center md:w-3/12"
              >
              <Link to={mentor.link} target="_blank"><img src={mentor.img} alt="" width={200} /></Link>
                <div className="text-center text-white mentors_details">
                  <Link
                    to={mentor.link}
                    target="_blank"
                    className="font-normal transition-all duration-300 ease-in-out hover:underline hover:text-orange-500"
                  >
                    {mentor.name}
                  </Link>
                  <p className="text-sm font-extralight">
                    {mentor.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 mb-6 about-features-section">
        <div className="container mx-auto">
          <div className="text-center about-features_heading">
            <h2 className="text-3xl">Key Features</h2>
            <p className="mt-2 text-xl md:w-7/12 md:mx-auto">
              As a team <span className="text-orange-500">BTHAWK</span> that can
              provide everything you need to generate awareness, drive traffic,
              connect.
            </p>
          </div>
          <div className="flex flex-wrap about-features_content">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex justify-center w-full md:w-1/2 features_box"
              >
                <div className="flex items-center w-8/12 features-details_wrapper">
                  <div className="features_box_icon text-9xl">
                    <span className="font-[750]">{feature.title}</span>
                  </div>
                  <div
                    className={`${
                      feature.margin_left ? "-ml-14" : ""
                    } features_box_text w-80`}
                  >
                    <span className="py-1 pl-3 pr-6 text-[10px] sm:text-base md:text-lg text-[#252424] font-semibold">
                      {feature.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
