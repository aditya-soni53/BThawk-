import React, { useState } from "react";

const Modals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mname, setMname] = useState("GOurav");
  const [memail, setMemail] = useState("test@gmail.com");
  const [mmobile, setMmobile] = useState("9602029575");
  const [mresume, setMresume] = useState();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const  handlefilechange = (e) => {
    setMresume(e.target.files[0])
  }
  const  handlesubmit = async(e) =>{
    e.preventDefault();
    if(!mname ||!memail ||!mnumber ||!mresume){
        Swal.fire({
            title: 'Error',
            text: "Please Insert All The Details",
            icon: 'error',
            confirmButtonText: 'OK'
        })
        return;
    }
    try{
        const res = await axios.post('https://www.bthawk.com/api/contact_quary_api',{
            type:"jobQuery",
            applicant_name:mname,
            applicant_email:memail,
            applicant_mobile_number:mmobile,
            applicant_cv:mresume

        });
        if(res.data.status === 1){
            Swal.fire({
                title: 'Error',
                text: "Our Team Wil Contact You Soon",
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
        else{
            Swal.fire({
                title: 'Error',
                text: "There is Some Error",
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }

    }
    catch (error) {
        console.error("Error in submitting bank details:", error);
    }
  }
  return (
    <div className="flex">
      {/* Show Modal Button */}
      <button className=" primary-btn py-2  transition font-medium duration-500" onClick={toggleModal}>
        SHOW MODAL
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal" >
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <form onSubmit={handlesubmit}
              className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {/* Modal Content */}
              <div className="bg-white px-4 pt-5 pb-2 sm:p-6 sm:pb-4">
                <label className="font-medium text-gray-800">Name</label>
                <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" value={mname} onChange={(e)=>{ setMname(e.target.value) }} />
                <label className="font-medium text-gray-800">Email</label>
                <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" value={memail} onChange={(e)=>{setMemail(e.target.value)}} />
                <label className="font-medium text-gray-800">Phone no.</label>
                <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" value={mmobile} onChange={(e)=>{setMmobile(e.target.mmobile)}} />
                <label className="font-medium text-gray-800">Upload Your Cv / Resume </label>
                <input type="file" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" value={mresume} onChange={handlefilechange} />
              </div>
              <div className="bg-gray-200 px-4 py-3 text-right">
                {/* Cancel Button */}
                <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={toggleModal} >
                  Cancel
                </button>
                {/* Create Button */}
                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500" >
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
