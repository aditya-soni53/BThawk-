import React, { useEffect } from 'react'
import Blogbanner from "../../assets/image/blog-banner.jpg";
import Topbanner from '../../component/layout/topBanner/Topbanner';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

export default function Careerdetail() {
  const { jobSlug } = useParams();

  useEffect(()=>{
    const retaledJob = async() => {
      try{
        const res = await axios.post(`${"https://www.bthawk.com/api/blog_api"}`,{
          type:"jobDetailFetch",
          title_slug:jobSlug
        })
        console.log(res);
        if(res.data.data.status === 1){
        console.log(res.data.data)
        }
        else{
          throw new Error("job not find")
        }

      }
      catch(err){
        console.log("errro");
      }
      
    }
    retaledJob();
  }, [jobSlug])
  return (
    <>
    <Topbanner banner={Blogbanner}/>
    <div className='w-11/12 mx-auto my-8 grid grid-cols-4'>
      <div className='border-2 p-3 rounded-xl'> 
        <h3 className="text-xl text-[#22249B] border-b-2 py-3">Job Information</h3>
                    <div className='p-4'>
                      <div className='widget'>
                      <FontAwesomeIcon className='float-left mr-3' icon={faUserCheck} />
                          <div class="overflow-hidden d-block">
                            <h4 class="">Employee Type:</h4>
                            <p class="text-green-500">Full Type</p>
                          </div>
                      </div>
                    </div>
      </div>
      <div className='col-span-3'></div>
    </div>
    </>
  )
}
