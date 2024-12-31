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

    if (name.length < 3) {
      return;
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
              setName(() => e.target.value.replace(/[^a-zA-Z]/g, ""));
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
          className="bg-[#2E30A5] px-5 w-full text-white rounded-xl py-1 mt-4"
          type="submit"
        >
          Get Started
        </button>
      </div>
    </form>
  );
}
