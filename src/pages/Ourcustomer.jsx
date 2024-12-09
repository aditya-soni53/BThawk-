import React from 'react'
import Topbanner from "../component/Topbanner";
import Blogbanner from "../assets/image/blog-banner.jpg";
import Reviewlist from '../component/Reviewlist';

export default function Ourcustomer() {

    
  return (
    <>
    <Topbanner banner={Blogbanner}/>
    <Reviewlist />
    </>
  )
}

