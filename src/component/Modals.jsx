import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2"; // Ensure you have this installed

const Modals = ({ jobId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mname, setMname] = useState("");
  const [memail, setMemail] = useState("");
  const [mmobile, setMmobile] = useState("");
  const [mresume, setMresume] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFileChange = (e) => {
    setMresume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic field validation
    if (!mname || !memail || !mmobile || !mresume) {
      Swal.fire({
        title: "Error",
        text: "Please fill in all the fields",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Name validation 
    if (mname.length < 2 || mname.length > 100) {
      Swal.fire({
        title: "Error",
        text: "Name should be between 2 and 100 characters",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Email validation (simple regex for email format)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(memail)) {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid email address",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Phone number validation (only digits and length check)
    const phoneRegex = /^[0-9]{10}$/; // Simple 10-digit phone number format
    if (!phoneRegex.test(mmobile)) {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid 10-digit phone number",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // File validation (only allow PDF or DOCX files and check file size)
    const validFileTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxFileSize = 5 * 1024 * 1024; // Max file size of 5MB

    if (
      mresume &&
      (!validFileTypes.includes(mresume.type) || mresume.size > maxFileSize)
    ) {
      Swal.fire({
        title: "Error",
        text: "Please upload a valid resume (PDF or DOCX, max size: 5MB)",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const EmptyState = () => {
      setMname('');
      setMemail('');
      setMmobile('');
      setMresume(null);

    }

    try {
      const formData = new FormData();
      formData.append("type", "jobQuery");
      formData.append("applicant_name", mname);
      formData.append("applicant_email", memail);
      formData.append("applicant_mobile_number", mmobile);
      formData.append("user_doc", mresume);
      formData.append("job_id", jobId);

      const res = await axios.post(
        "https://www.bthawk.com/api/contact_quary_api",
        formData
      );

      console.log(res);

      if (res.data.status === 1) {
        Swal.fire({
          title: "Success",
          text: "Our team will contact you soon",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          setIsModalOpen(false);
          EmptyState();
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "There is some error",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error in submitting form:", error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong, please try again later",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex">
      {/* Show Modal Button */}
<<<<<<< HEAD
      <button className=" primary-btn py-2  transition font-medium duration-500" onClick={toggleModal}>
        SHOW MODAL
=======
      <button
        className="primary-btn py-2 transition font-medium duration-500"
        onClick={toggleModal}
      >
        Apply Now
>>>>>>> 09c2146b18f90445265c4b22a8354063ac3bea60
      </button>

      {/* Modal */}
      {isModalOpen && (
<<<<<<< HEAD
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal" >
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
=======
        <div
          className="fixed z-10 overflow-y-auto top-0 w-full left-0"
          id="modal"
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
>>>>>>> 09c2146b18f90445265c4b22a8354063ac3bea60
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <form
              onSubmit={handleSubmit}
              className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {/* Modal Content */}
              <div className="bg-white px-4 pt-5 pb-2 sm:p-6 sm:pb-4">
                <label className="font-medium text-gray-800">Name</label>
                <input
                  type="text"
                  className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                  value={mname}
                  onChange={(e) => setMname(e.target.value)}
                />
                <label className="font-medium text-gray-800">Email</label>
                <input
                  type="email"
                  className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                  value={memail}
                  onChange={(e) => setMemail(e.target.value)}
                />
                <label className="font-medium text-gray-800">Phone no.</label>
                <input
                  type="number"
                  className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                  value={mmobile}
                  onChange={(e) => setMmobile(e.target.value)}
                />
                <label className="font-medium text-gray-800">
                  Upload Your CV / Resume
                </label>
                <input
                  type="file"
                  className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                  onChange={handleFileChange}
                />
              </div>
              <div className="bg-gray-200 px-4 py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modals;
