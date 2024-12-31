import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import profileimg from "../assets/image/favicon.svg";
import user from "../assets/image/user.svg";
import lock from "../assets/image/lock.svg";
import { Context } from "../Context";

export default function QueryForm() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    mobileNumber: "",
    pincode: "",
  }); // Error state for each input
  const { setIsModalOpen, isModalOpen } = useContext(Context);

  const validateForm = () => {
    let formErrors = { name: "", mobileNumber: "", pincode: "" };
    let valid = true;

    if (!name) {
      formErrors.name = "Please enter your name";
      valid = false;
    } else if (name.length < 2 || name.length > 50) {
      formErrors.name = "Name should be between 2 and 50 characters";
      valid = false;
    }

    if (!mobileNumber) {
      formErrors.mobileNumber = "Please enter your mobile number";
      valid = false;
    } else if (mobileNumber.length !== 10) {
      formErrors.mobileNumber = "Mobile number should be exactly 10 digits";
      valid = false;
    }

    if (!pincode) {
      formErrors.pincode = "Please enter your pincode";
      valid = false;
    } else if (pincode.length < 6) {
      formErrors.pincode = "Pincode should be 6 digits";
      valid = false;
    }

    setErrors(formErrors); // Update the error state
    return valid;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if form is invalid
    }

    try {
      const res = await axios.post("https://www.bthawk.com/api/api", {
        pincode: pincode,
        mobile_number: mobileNumber,
        name: name,
        type: "contectQuery",
      });

      if (res.data.status === 1) {
        Swal.fire({
          title: "Success",
          text: "Our Team Will Contact You Soon",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          setMobileNumber("");
          setPincode("");
          setName("");
          setErrors({ name: "", mobileNumber: "", pincode: "" }); // Reset errors on success
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
      console.error("Error in submitting the details:", error);
    }
  };

  return (
    <form
      className="lg:shadow-2xl border-2 p-7 py-8 rounded-xl bg-white"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl mb-3">
        Connect with <span className="text-[#F3771E] font-semibold">BT</span>
        <span className="font-semibold text-[#2E30A5] ">HAWK</span>
      </p>

      {/* Name Field */}
      <div className="form-group mt-2">
        <div className="relative">
          <label htmlFor="">Name</label> <br />
          <input
            type="text"
            className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
            maxLength={30}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <img src={user} className="absolute bottom-3 left-2" alt="user" />
        </div>
        {errors.name && <p className="pt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* Mobile Number Field */}
      <div className="form-group relative mt-2">
        <div className="relative">
          <label htmlFor="">Mobile Number</label> <br />
          <input
            type="text" // Use text type and validate manually
            className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
            maxLength={10} // Max length of 10 for mobile number
            value={mobileNumber}
            placeholder="Mobile Number"
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // Allow only digits
              setMobileNumber(value);
            }}
          />
          <img src={user} className="absolute bottom-3 left-2" alt="user" />
        </div>
        {errors.mobileNumber && (
          <p className="pt-1 text-sm text-red-600">{errors.mobileNumber}</p>
        )}
      </div>

      {/* Pincode Field */}
      <div className="form-group mt-2">
        <div className="relative">
          <label htmlFor="">Pincode</label> <br />
          <input
            type="text" // Use text type and validate manually
            className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
            maxLength={6} // Max length of 6 for pincode
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // Allow only digits
              setPincode(value);
            }}
          />
          <img src={lock} className="absolute bottom-3 left-2" alt="lock" />
        </div>
        {errors.pincode && <p className="pt-1 text-sm text-red-600">{errors.pincode}</p>}
      </div>

      {/* Submit Button */}
      <div className="form-group relative">
        <button
          className="bg-[#2E30A5] px-5 w-full text-white rounded-xl py-1 mt-4"
          type="submit"
        >
          Get Started
        </button>
      </div>
    </form>
  );
}
