import React from 'react'
import Blogbanner from '../assets/image/blog-banner.jpg'

export default function Topbanner(props) {
  return (
    <>
    <div className="w-full banner-img relative">
    <img src={props.banner} alt="" className='w-full' />
    <h1 className='absolute top-[45%] lg:left-[10%] md:left-[5%] left-[3%] text-white lg:text-5xl md:text-3xl text-xl lg:w-6/12'>{props.heading.name}</h1>
    </div>
    
    </>
  )
}
