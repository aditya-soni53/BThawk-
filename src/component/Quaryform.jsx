import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import profileimg from "../assets/image/favicon.svg";
<<<<<<< HEAD
import user from "../assets/image/user.svg";
import lock from "../assets/image/lock.svg";
import { Context } from "../Context";
=======
import user from '../assets/image/user.svg';
import lock from '../assets/image/lock.svg';
import seclogo from '../assets/image/secoundary-logo.png'
import { Context } from '../Context';
>>>>>>> 0a7d06d90ed4437b36fe8d517d6bebeffcc70be0

export default function Quaryform() {
  const [mobileNumber, setMobileNumber] = useState();
  const [pincode, setPincode] = useState();
  const [name, setName] = useState();
  const { setIsModalOpen, isModalOpen } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure all fields are filled
    if (
      !pincode ||
      !mobileNumber ||
      mobileNumber.length > 12 ||
      pincode.length > 6
    ) {
      Swal.fire({
        title: "Error",
        text: "Please Insert All The Details",
        icon: "error",
        confirmButtonText: "OK",
      });

      return;
    }

<<<<<<< HEAD
    try {
      console.log(import.meta.env.VITE_API_BASE_URL);
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}`, {
        pincode: pincode,
        mobile_number: mobileNumber,
        name: "Akshaysnh",
        type: "contectQuery",
      });

      console.log(res);

      if (res.data.status === 1) {
        Swal.fire({
          title: "Success",
          text: "Our Team Wil Contact You Soon",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          setMobileNumber("");
          setPincode("");
          setIsModalOpen(!isModalOpen);
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "There is Some Error",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error in submitting bank details:", error);
    }
  };

  return (
    <form
      action=""
      className="lg:shadow-2xl border-2 p-7 py-8 rounded-xl bg-white"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl mb-3">
        Connect with <span className="text-[#2E30A5] font-semibold">BT</span>
        <span className="font-semibold text-[#F3771E]">HAWK</span>
      </p>
      <div className="form-group relative">
        <label htmlFor="">Mobile Number</label> <br />
        <input
          type="text"
          className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
          maxLength={12}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <img src={user} className="absolute bottom-3 left-2" alt="user" />
      </div>
      <div className="form-group relative">
        <label htmlFor="">Mobile Number</label> <br />
        <input
          type="number"
          className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
          maxLength={12}
          placeholder="Mobile Number"
          onChange={(e) => {
            setMobileNumber(e.target.value);
          }}
        />
        <img src={user} className="absolute bottom-3 left-2" alt="user" />
      </div>
      <div className="form-group relative">
        <label htmlFor="">Pincode</label> <br />
        <input
          type="number"
          className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
          maxLength={6}
          placeholder="Pincode"
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
        <img src={lock} className="absolute bottom-3 left-2" alt="user" />
      </div>
      <div className="form-group relative">
        <button
          className="bg-[#2E30A5] px-5px w-full text-white rounded-xl py-1 mt-4"
          type="submit"
        >
          Get Started
        </button>
      </div>
    </form>
  );
=======
    return (
        <form action="" className='lg:shadow-2xl border-2 p-7 py-8 rounded-xl bg-white' onSubmit={handleSubmit}>
            <p className='text-2xl mb-3 flex items-center'>Connect with 
                <span className='text-[#2E30A5] font-semibold'>BT</span><span className='font-semibold text-[#F3771E]'>HAWK</span>
                {/* <span className='mr-1'><img src={seclogo} alt="" width={80}/></span> */}
                </p>
            <div className="form-group relative">
                <label htmlFor="">Mobile Number</label> <br />
                <input type="text" className='bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl' maxLength={12} placeholder='Mobile Number' onChange={(e) => { setMobileNumber(e.target.value) }} />
                <img src={user} className='absolute bottom-3 left-2' alt="user" />
            </div>
            <div className="form-group relative">
                <label htmlFor="">Pincode</label> <br />
                <input type="text" className='bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl' maxLength={6} placeholder='Pincode' onChange={(e) => { setPincode(e.target.value) }} />
                <img src={lock} className='absolute bottom-3 left-2' alt="user" />
            </div>
            <div className="form-group relative">
                <button className='bg-[#2E30A5] px-5px w-full text-white rounded-xl py-1 mt-4' type="submit">Get Started</button>
            </div>
        </form>
    )
>>>>>>> 0a7d06d90ed4437b36fe8d517d6bebeffcc70be0
}
