import React from 'react'
import Blogbanner from '../assets/image/blog-banner.jpg'

export default function Topbanner(props) {
  return (
    <>
    <div className="w-full banner-img">
    <img src={props.banner} alt="" className='w-full' />
    </div>
    
    </>
  )
}
