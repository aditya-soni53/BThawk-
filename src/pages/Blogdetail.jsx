import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Topbanner from '../component/Topbanner';
import Blogbanner from '../assets/image/blog-banner.jpg'
import clientbanner1 from '../assets/image/clientbanner-1.png'
import clientbanner2 from '../assets/image/clientbanner-2.png'
import clientbanner3 from '../assets/image/clientbanner-3.gif'
import clientbanner4 from '../assets/image/clientbanner-4.png'
import clientbanner5 from '../assets/image/clientbanner-5.png'
import twitter from "../assets/image/twitter.png";
import profileimg from '../assets/image/favicon.svg';
import Slider from "react-slick";
import Heroslider from '../component/Heroslider';

export default function Blogdetail(props) {
  const { blogId } = useParams(); // Extract blog ID from URL
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [headings, setHeadings] = useState([]);
  
  let currentUrl = useLocation().pathname;
  let currentId = currentUrl.split('/');
  let finalId = currentId.pop();
  
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("https://www.bthawk.com/api/blog_api", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'blogDetailFetch', blogId: blogId }),
        });

        if (!response.ok) throw new Error('Failed to fetch blog details');
        const result = await response.json();

        if (result.status === 1) {
          setBlog(result.data);

          // Extract H2 headings from blog content
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = result.data.content;
          const h2Tags = Array.from(tempDiv.querySelectorAll('h2')).map(h2 => h2.innerText);
          setHeadings(h2Tags);
        } else {
          throw new Error(result.message || 'Blog not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [blogId]);
  
  if (loading) return <div className='w-full h-96 grid place-content-center'><span className="loader"></span></div>;
  if (error) return <div className='w-full h-96 grid place-content-center'>Error: {error}</div>;

 
  
  return (
    <>
      <Topbanner banner={Blogbanner} />

      <div className="w-11/12 grid lg:grid-cols-4 grid-cols-1 mx-auto  lg:mt-8 mt-4">
        <div className="lg:col-span-3 lg:p-4">
          <p className='mb-3'><span className='bg-[#F7F7F7] p-2 rounded-md'>
            <Link to="/Home" >Home </Link>/
            <Link to="/blogs" > blog </Link>/ {finalId}
            </span></p>
        
       <div className='relative rounded-xl overflow-hidden mb-4'>
         <img
           src={`https://www.bthawk.com/panel/img/` + blog.image}
           alt={blog.blog_title}
           onError={(e) => {
             e.target.onerror = null;
             e.target.src = '/path-to-fallback-image.jpg';
           }}
         />
         <div className="blog-main-img p-8">
           <h1 className='text-2xl'>{blog.title}</h1>
           <div className="blog-card-footer flex">
             <div className="flex p-2">
               <img src={profileimg} alt="Profile" className="w-6 mr-1" />
               <span>{blog.posted || "Unknown Author"}</span>
             </div>
             <div className="flex p-2">
               <img src={profileimg} alt="Date" className="w-6 mr-1" />
               <span>{blog.postedDate}</span>
             </div>
           </div>
         </div>
       </div>
       <div className='blog-content'>
         <p dangerouslySetInnerHTML={{ __html: blog.content }} />
       </div>
        
       </div>
       <div className='lg:p-4 w-full'>
       <div className='sticky top-[84px]'>
         <div className="">
          <Heroslider />
         </div>
         
         <div className='share-card'>
           <h6 className='text-sm mb-4'>Share with your community!</h6>
           <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0">
           <a className="px-4 text-center border-r-2">
             <svg
               fill="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               className="w-5 h-5"
               viewBox="0 0 24 24"
             >
               <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
             </svg>
           </a>
           <a className="px-4 text-center border-r-2">
             <img src={twitter} alt="twitter" width={17} />
           </a>
           <a className="px-4 text-center border-r-2">
             <svg
               fill="none"
               stroke="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               className="w-5 h-5"
               viewBox="0 0 24 24"
             >
               <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
               <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
             </svg>
           </a>
           <a className="px-4 text-center">
             <svg
               fill="currentColor"
               stroke="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="0"
               className="w-5 h-5"
               viewBox="0 0 24 24"
             >
               <path
                 stroke="none"
                 d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
               ></path>
               <circle cx="4" cy="4" r="2" stroke="none"></circle>
             </svg>
           </a>
         </span>
         </div>
         {/* <div className="table-of-content">
           <h2>Table of Contents</h2>
           <ul>
             {headings.map((heading, index) => (
               <li key={index}>{heading}</li>
             ))}
           </ul>
         </div> */}
         </div>
         <div>

         </div>
       </div>

     </div>

     <div>
       {/* <h2>Related Blogs</h2>
       <div className="related-blogs">
         {relatedBlogs.map((related, index) => (
           <div key={index}>
             <h3>{related.blog_title}</h3>
           </div>
         ))}
       </div> */}
     </div>
   </>
  );
}
