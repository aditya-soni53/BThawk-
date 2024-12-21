import React from 'react'
import Topbanner from '../component/layout/topBanner/Topbanner'
import Blogbanner from "../assets/image/faq.jpg";
import Faqdetail from "../component/Faqdetail"

export default function Faq() {
    const FaqData =[
        {
          id:1,
          question:"What is BTHAWK ?",
          answer:"BTHAWK is a GST billing software. BTHAWK also provides complete accounting solutions for your growing business. ."
        },
        {
          id:2,
          question: "Why do we need BTHAWK ?",
          answer: "Because BTHAWK makes the correct diagnosis of the business related problems and provides the solutions. BTHAWK is the loyal partner for your business."
        },
        {
          id:3,
          question: "How is BTHAWK helpful to businessmen ?",
          answer: "BTHAWK provides Complete Accounting solution to your accounting and business complications. BTHAWK pays utmost attention towards client’s satisfaction. ."
        },
        {
          id:4,
          question: "Is BTHAWK a mobile based or a windows based software ?",
          answer: "Yes, BTHAWK is both mobile based and windows based software."
        },
        {
          id:5,
          question: "What is the real pain of businessmen and channel partners ?",
          answer: "Inventory management, maintain data. They are not able to maintain sales and purchase data."
        },
        {
          id:6,
          question: "Why you should use BTHAWK as your GST billing software ?",
          answer: "GST compliance, Instant Invoice Generation, stock management, sales tracking, DSR management, collection management."
        },
        {
          id:7,
          question: "How can you get a demo of BTHAWK ?",
          answer: "Our business team assign demo for the client or you can assign your own demo through login page."
        },
        {
          id:8,
          question: "How is your data secure with BTHAWK ?",
          answer: "We have a cloud based software which store and secure your data in the cloud."
        },
        {
          id:9,
          question: "What is the difference between BTHAWK and other accounting software ?",
          answer: "BTHAWK is the best distribution accounting tool with 100% retention till now. BTHAWK keeps the 360 degree eye on every complications and problems of the businessmen and channel partners."
        },
        {
          id:10,
          question: "BTHAWK provide solutions for ?",
          answer: "BTHAWK provides solutions for FMCG, Telecom, Pharma, Automobile."
        }
      ]
      
  return (
    <>
      <Topbanner banner={Blogbanner} />
      <div className='w-11/12 m-auto mt-10'>
        <Faqdetail faq={FaqData} />
      </div>
    </>
  )
}
