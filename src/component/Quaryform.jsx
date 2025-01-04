import { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import profileimg from "../assets/image/favicon.svg";
import user from "../assets/image/user.svg";
import lock from "../assets/image/lock.svg";
import { Context } from "../Context";

export default function Quaryform() {
  const { setIsModalOpen, isModalOpen } = useContext(Context);
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({}); // To store validation errors

  const validate = () => {
    let newErrors = {};

    // Name Validation
    if (!name) {
      newErrors.name = "Name is required";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    // Mobile Number Validation
    if (!mobileNumber) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (mobileNumber.length !== 10) {
      newErrors.mobileNumber = "Mobile Number must be 10 digits long";
    }

    // Pincode Validation
    if (!pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (pincode.length !== 6) {
      newErrors.pincode = "Pincode must be 6 digits long";
    }

    // Set the errors and return validation result
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

    // Handle specific field sanitization
    if (name === "mobileNumber" || name === "pincode") {
      const sanitizedValue = value.replace(/\D/g, ""); // Allow only numbers
      if (name === "mobileNumber") setMobileNumber(sanitizedValue);
      else setPincode(sanitizedValue);
    } else if (name === "name") {
      const sanitizedValue = value.replace(/[^a-zA-Z\s]/g, ""); // Allow letters and spaces
      setName(sanitizedValue);
    }
  };

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

    if (validate()) {
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
        <div className="relative">
          <label htmlFor="name" className="required">Name</label> <br />
          <input
            type="text"
            name="name"
            className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
            maxLength={30}
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <img src={user} className="absolute bottom-3 left-2" alt="user" />
        </div>
        {errors.name && (
          <p className="py-2 pl-1 text-xs text-red-500">{errors.name}</p>
        )}
        
      </div>
      <div className="form-group">
        <div className="relative">
          <label htmlFor="mobileNumber" className="required">Mobile Number</label> <br />
          <input
            type="text"
            name="mobileNumber"
            className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
            maxLength={10}
            value={mobileNumber}
            placeholder="Mobile Number"
            onChange={handleChange}
          />
          <img src={user} className="absolute bottom-3 left-2" alt="user" />
        </div>
        {errors.mobileNumber && (
          <p className="py-2 pl-1 text-xs text-red-500">
            {errors.mobileNumber}
          </p>
        )}
      </div>
      <div className="form-group">
        <div className="relative">
          <label htmlFor="pincode" className="required">Pincode</label> <br />
          <input
            type="text"
            name="pincode"
            className="bg-[#F4F4F4] w-full my-1 p-1 pl-10 rounded-xl"
            maxLength={6}
            placeholder="Pincode"
            value={pincode}
            onChange={handleChange}
          />
          <img src={lock} className="absolute bottom-3 left-2" alt="user" />
        </div>
        {errors.pincode && (
          <p className="py-2 pl-1 text-xs text-red-500">{errors.pincode}</p>
        )}
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
