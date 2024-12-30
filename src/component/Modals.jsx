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
        `${import.meta.env.VITE_API_BASE_URL}`,
        formData
      );

      // console.log(res);

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
      <button
        className="py-2 font-medium transition duration-500 primary-btn"
        onClick={toggleModal}
      >
        Apply Now
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 z-10 w-full overflow-y-auto"
          id="modal"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <form
              onSubmit={handleSubmit}
              className="inline-block overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl align-center sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {/* Modal Content */}
              <div className="px-4 pt-5 pb-2 bg-white sm:p-6 sm:pb-4">
                <label className="font-medium text-gray-800">Name</label>
                <input
                  type="text"
                  className="w-full p-2 mt-2 mb-3 bg-gray-100 rounded outline-none"
                  value={mname}
                  onChange={(e) => setMname(e.target.value)}
                />
                <label className="font-medium text-gray-800">Email</label>
                <input
                  type="email"
                  className="w-full p-2 mt-2 mb-3 bg-gray-100 rounded outline-none"
                  value={memail}
                  onChange={(e) => setMemail(e.target.value)}
                />
                <label className="font-medium text-gray-800">Phone no.</label>
                <input
                  type="number"
                  className="w-full p-2 mt-2 mb-3 bg-gray-100 rounded outline-none"
                  value={mmobile}
                  onChange={(e) => setMmobile(e.target.value)}
                />
                <label className="font-medium text-gray-800">
                  Upload Your CV / Resume
                </label>
                <input
                  type="file"
                  className="w-full p-2 mt-2 mb-3 bg-gray-100 rounded outline-none"
                  onChange={handleFileChange}
                />
              </div>
              <div className="px-4 py-3 text-right bg-gray-200">
                <button
                  type="button"
                  className="px-4 py-2 mr-2 text-white bg-gray-500 rounded hover:bg-gray-700"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 mr-2 font-medium text-white transition duration-500 bg-blue-500 rounded hover:bg-blue-700"
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
