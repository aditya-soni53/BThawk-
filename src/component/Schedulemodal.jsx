import React, { useContext, useState } from 'react'
import { Context } from '../Context';
import Quaryform from './Quaryform';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


export default function Schedulemodal() {
    // const [mname, setMname] = useState("");
    // const [memail, setMemail] = useState("");
    // const [mmobile, setMmobile] = useState("");
    // const [msubject, setMsubject] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [pincode, setPincode] = useState();
    const {setIsModalOpen, isModalOpen} = useContext(Context);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };


  return (
    <div className="flex">
      {/* Show Modal Button */}
  

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 z-[1000]" id="modal" >
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div
              className="inline-block align-center bg-blue-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >

              <Quaryform />

              <div className="bg-blue-00 px-4 h-1 text-right">
                {/* Cancel Button */}
                <button type="button" className="py-1 px-4 secoundary-btn border-2 mr-2 absolute right-1 lg:top-7 top-2" onClick={toggleModal} >
                <FontAwesomeIcon icon={faCircleXmark} className='text-2xl text-blue-900' />
                </button>
                {/* Create Button */}
             
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
