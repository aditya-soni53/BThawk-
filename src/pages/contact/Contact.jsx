import { useState } from "react";
import Hero from "../../component/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import letter_send from "../../assets/image/letter_send 1.png";
import { Helmet } from "react-helmet";
import axios from "axios";
import Swal from "sweetalert2";
import banner1 from '../../assets/image/contact-us.jpg'
import Topbanner from "../../component/layout/topBanner/Topbanner";
const HeroText = "Any question or remarks? Just write us a message !";
const ContactInfo = [
  {
    id: 1,
    icon: faPhoneVolume,
    text: "7340040171,7849904543",
  },
  {
    id: 2,
    icon: faEnvelope,
    text: "sales@bthawk.com",
  },
  {
    id: 3,
    icon: faLocationDot,
    text: "15&16, 18th Floor, AIPL Business Club Sector 62, Gurugram 122102",
  },
];
const Contact = () => {
  const basePath = window.location.origin;

  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({}); // To store validation errors

  // Validation function
  const validate = () => {

    let newErrors = {};
    if (!formData.f_name.trim()) newErrors.f_name = "First Name is required";
    if (!formData.l_name.trim()) newErrors.l_name = "Last Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be 10 digits";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear the error for the specific field when user types
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }

    if (name === "phone") {
      // Restrict input to numbers only
      const sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, phone: sanitizedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}`,
        {
          type: "addContact",
          first_name: formData.f_name,
          last_name: formData.l_name,
          email: formData.email,
          mobile_number: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }
      );


      if (res.data.status === 1) {
        setLoading(false);
        Swal.fire({
          title: "Success",
          text: "Our Team Wil Contact You Soon",
          icon: "success",
          confirmButtonText: "OK",
        }).then(()=>{
          setFormData({
            f_name: "",
            l_name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          })
        })
      } else {
        setLoading(false);
        Swal.fire({
          title: "Error",
          text: "There is Some Error",
          icon: "error",
          confirmButtonText: "OK",
        });
        // console.log(res.data)
      }
    }
  };

  return (
    <>
      <Helmet>
        <title> Contact BTHAWK - GST Billing, Accounting, and Compliance Help </title>
        <meta name="keywords" content="contact BTHAWK, GST billing support, accounting help, business compliance, BTHAWK support" />
        <meta name="description" content="Get in touch with BTHAWK for GST billing, accounting, and compliance support. Contact us for expert assistance and streamline your business needs." />
        <link rel="canonical" href={`${basePath}/contact`} />
      </Helmet>
      <section className="contact-section">
      <Topbanner banner={banner1} />
        <Hero text={HeroText} show={false} heading="Contact Us"  />
        <div className="w-11/12 mx-auto mt-14 contact_us-details mb-14">
          <div className="container flex flex-col p-2 mx-auto md:flex-row contact_us-container">
            <aside className="p-10 contact_us-details_left md:w-4/12">
              <div className="text-white contact_us-heading">
                <h2 className="mb-4 text-3xl">Contact Information</h2>
                <p className="text-sm">
                  (We are available all 7 days from 9AM to 9PM)
                </p>
              </div>
              <div className="mt-24 contact_us-details_info">
                {ContactInfo.map((info) => (
                  <div key={info.id} className="flex items-center gap-3 mb-6">
                    <FontAwesomeIcon
                      className={`${
                        info.id === 3 ? "self-start mt-3" : ""
                      } text-white`}
                      icon={info.icon}
                    />
                    <span className="text-base text-white">{info.text}</span>
                  </div>
                ))}
              </div>
            </aside>
            <aside className="contact_us-details_right md:w-8/12">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-between gap-8 px-4 mt-12 md:px-10 contact_us-form">
                  {/* First Name */}
                  <div className="flex items-center justify-center w-full md:w-5/12">
                    <div className="relative w-full">
                      <input
                        id="f_name"
                        name="f_name"
                        type="text"
                        className="w-full py-1 transition-colors border-b border-black custom-input focus:border-b-2 focus:border-blue-700 focus:outline-none peer bg-inherit"
                        value={formData.f_name}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="f_name"
                        className={`absolute text-[#8D8D8D] left-0 transition-all cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-700 ${
                          formData.f_name ? "text-xs -top-5 text-blue-700" : ""
                        }`}
                      >
                        First Name
                      </label>
                      <p className="pt-1 text-sm text-red-600">
                        {errors.f_name}
                      </p>
                    </div>
                  </div>
                  {/* Last Name */}
                  <div className="flex items-center justify-center w-full md:w-5/12">
                    <div className="relative w-full">
                      <input
                        id="l_name"
                        name="l_name"
                        type="text"
                        className="w-full py-1 transition-colors border-b border-black custom-input focus:border-b-2 focus:border-blue-700 focus:outline-none peer bg-inherit"
                        value={formData.l_name}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="l_name"
                        className={`absolute text-[#8D8D8D] left-0 transition-all cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-700 ${
                          formData.l_name ? "text-xs -top-5 text-blue-700" : ""
                        }`}
                      >
                        Last Name
                      </label>
                      <p className="pt-1 text-sm text-red-600">
                        {errors.l_name}
                      </p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-center justify-center w-full md:w-5/12">
                    <div className="relative w-full">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full py-1 transition-colors border-b border-black custom-input focus:border-b-2 focus:border-blue-700 focus:outline-none peer bg-inherit"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="email"
                        className={`absolute text-[#8D8D8D] left-0 transition-all cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-700 ${
                          formData.email ? "text-xs -top-5 text-blue-700" : ""
                        }`}
                      >
                        Email
                      </label>
                      <p className="pt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center justify-center w-full md:w-5/12">
                    <div className="relative w-full">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        className="w-full py-1 transition-colors border-b border-black custom-input focus:border-b-2 focus:border-blue-700 focus:outline-none peer bg-inherit"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="phone"
                        className={`absolute text-[#8D8D8D] left-0 transition-all cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-700 ${
                          formData.phone ? "text-xs -top-5 text-blue-700" : ""
                        }`}
                      >
                        Phone Number
                      </label>
                      <p className="pt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    </div>
                  </div>
                  {/* Subject */}
                  <div className="flex items-center justify-center w-full md:w-5/12">
                    <div className="relative w-full">
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="w-full py-1 transition-colors border-b border-black custom-input focus:border-b-2 focus:border-blue-700 focus:outline-none peer bg-inherit"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {/* <select className="w-full py-1 transition-colors border-b border-black custom-input focus:border-b-2 focus:border-blue-700 focus:outline-none peer bg-inherit" name="" id="" value={formData.subject} onChange={handleChange}>
                        <option value="query">Query</option>
                        <option value="question">Question</option>
                        <option value="remark">Remark</option>
                        <option value="Query"></option>
                      </select> */}
                      <label
                        htmlFor="subject"
                        className={`absolute text-[#8D8D8D] left-0 transition-all cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-700 ${
                          formData.subject ? "text-xs -top-5 text-blue-700" : ""
                        }`}
                      >
                        Subject
                      </label>
                      <p className="pt-1 text-sm text-red-600">
                        {errors.subject}
                      </p>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="flex items-center justify-center w-full">
                    <div className="relative w-full">
                      <input
                        id="message"
                        name="message"
                        type="text"
                        className="w-full py-1 transition-colors border-b border-black custom-input focus:border-b-2 focus:border-blue-700 focus:outline-none peer bg-inherit"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="message"
                        className={`absolute text-[#8D8D8D] left-0 transition-all cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-700 ${
                          formData.message ? "text-xs -top-5 text-blue-700" : ""
                        }`}
                      >
                        Message
                      </label>
                      <p className="pt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    </div>
                  </div>
                  {/* Submit */}
                  <div className="w-full">
                    <div className="flex items-center justify-center">
                      <div className="w-full md:w-1/2"></div>
                      <div className="w-full md:w-1/2 text-end">
                        <button className="px-8 py-2 text-sm font-normal text-white transition-all duration-300 ease-in-out bg-blue-700 rounded sm:text-base hover:bg-blue-800 hover:shadow-lg hover:scale-105">
                          {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Send Message"}
                        </button>
                      </div>
                    </div>
                    <div className="w-full">
                      <img
                        className="w-[10rem] -mt-9 sm:w-[12rem] md:w-[15rem] sm:mx-auto sm:-mt-14"
                        src={letter_send}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </form>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
