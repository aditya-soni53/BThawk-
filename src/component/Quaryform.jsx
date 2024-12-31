import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import profileimg from "../assets/image/favicon.svg";
import user from "../assets/image/user.svg";
import lock from "../assets/image/lock.svg";
import { Context } from "../Context";

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

    if (name.length < 3) {
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}`, {
        pincode: pincode,
        mobile_number: mobileNumber,
        name: name,
        type: "contectQuery",
      });

      if (res.data.status === 1) {
        Swal.fire({
          title: "Success",
          text: "Our Team Wil Contact You Soon",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          setMobileNumber("");
          setPincode("");
          setName("");
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
    } finally {
      setName("");
      setMobileNumber("");
      setPincode("");
    }
  };

  return (
    <form
      action=""
      className="py-8 bg-white border-2 lg:shadow-2xl p-7 rounded-xl"
      onSubmit={handleSubmit}
    >
      <p className="mb-3 text-2xl">
        Connect with <span className="text-[#F3771E] font-semibold">BT</span>
        <span className="font-semibold text-[#2E30A5] ">HAWK</span>
      </p>
      <div className="form-group">
        <div className="relative ">
          <label htmlFor="">Name</label> <br />
          <input
            type="text"
            className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
            maxLength={30}
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(()=> e.target.value.replace(/[^a-zA-Z]/g, ""));
            }}
          />
          <img src={user} className="absolute bottom-3 left-2" alt="user" />
        </div>
        {name && name.length < 3 ? (
          <p className="py-2 pl-1 text-xs text-red-500">
            Name must be at least 2 characters long
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="relative form-group">
        <label htmlFor="">Mobile Number</label> <br />
        <input
          type="text"
          className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
          maxLength={10}
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => {
            setMobileNumber(e.target.value.replace(/[^0-9]/g, ""));
          }}
        />
        <img src={user} className="absolute bottom-3 left-2" alt="user" />
      </div>
      <div className="relative form-group">
        <label htmlFor="">Pincode</label> <br />
        <input
          type="text"
          className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
          maxLength={6}
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value.replace(/[^0-9]/g, ""));
          }}
        />
        <img src={lock} className="absolute bottom-3 left-2" alt="user" />
      </div>
      <div className="relative form-group">
        <button
          className="bg-[#2E30A5] px-5px w-full text-white rounded-xl py-1 mt-4"
          type="submit"
        >
          Get Started
        </button>
      </div>
    </form>
  );
}
