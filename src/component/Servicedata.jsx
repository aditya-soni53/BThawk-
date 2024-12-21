import React, { useState, useEffect, useRef } from 'react';
import google from '../assets/image/google.svg';
import Faqdetail from "./Faqdetail";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'; 
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Quaryform from './Quaryform';



export default function Servicedata(propes) {
    const rating = 3.5; 
    const totalStars = 5; 
    const filledStars = Math.floor(rating); 
    const halfStars = rating % 1 !== 0 ? 1 : 0; 
    const emptyStars = totalStars - filledStars - halfStars;

    const [headings, setHeadings] = useState([]);
    const [activeHeading, setActiveHeading] = useState(null);
    const contentRef = useRef(null);




    useEffect(() => {
        // Add IDs to H2 tags after content is rendered
        if (contentRef.current) {
            const h2Tags = contentRef.current.querySelectorAll("h2");
            const headingIds = [];

            h2Tags.forEach((element, i) => {
                if (!element.id) {
                    const id = `heading_${i}`;
                    element.setAttribute("id", id);
                    headingIds.push({ id, text: element.innerText });
                } else {
                    headingIds.push({ id: element.id, text: element.innerText });
                }
            });
            setHeadings(headingIds);
        }
    }, [propes.servicedata.description]);

    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current) return;
            const h2Tags = contentRef.current.querySelectorAll("h2");

            let activeId = null;
            let closestDistance = Infinity;

            h2Tags.forEach((heading) => {
                const rect = heading.getBoundingClientRect();
                const distance = Math.abs(rect.top);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    activeId = heading.id;
                }
            });

            setActiveHeading(activeId);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <div className="grid w-11/12 grid-cols-1 mx-auto mt-4 lg:grid-cols-4 lg:mt-8">
            <div className="lg:col-span-3 lg:p-4 blog-content" >
            <p className="mb-3">
            <span className="bg-[#F7F7F7] p-2 rounded-md">
              <Link to="/Home">Home </Link>/<Link to="/Home"> service </Link>/{" "}
              {propes.servicedata.slug}   
            </span>
          </p>
            {/* <img className='relative pb-4 overflow-hidden rounded-xl'
              src={`https://www.bthawk.com/panel/img/` + propes.servicedata.image}
              alt=""
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/path-to-fallback-image.jpg";
              }}
            /> */}
            
          <div ref={contentRef}>
                <div dangerouslySetInnerHTML={{ __html: propes.servicedata.description }} />
                    <Faqdetail faq={propes.servicedata.faqs}/>
                </div>
            </div>
            <div className="w-full lg:p-4 mb-10">
                <Quaryform />
                <div className="rating grid grid-cols-3 my-4 border-2 border-[#22249B] p-3">
                    <div>
                        <img src={google} alt="google" />
                    </div>
                    <div className='col-span-2'>
                        <p className='text-xl text-gray-500 font-semibold'>Google Rating</p>
                        <p>
                            {[...Array(filledStars)].map((_, index) => (
                                <FontAwesomeIcon key={`filled-${index}`} icon={fasStar} style={{ color: '#FFCE31' }} />
                            ))}
                            {[...Array(halfStars)].map((_, index) => (
                                <FontAwesomeIcon key={`half-${index}`} icon={fasStar} style={{ color: '#FFCE31', clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
                            ))}
                            {[...Array(emptyStars)].map((_, index) => (
                                <FontAwesomeIcon key={`empty-${index}`} icon={farStar} style={{ color: 'gray' }} />
                            ))}
                        </p>
                        <p className='text-gray-500 text-sm'>See all our reviews</p>
                    </div>
                </div>
                <div className="table-of-contents sticky top-[100px]">
                    <h2 className='mb-2 text-xl'>Overview</h2>
                    <ul>
                        {headings.map((heading) => (
                            <li key={heading.id} className={`py-1 pl-2 text-sm ${activeHeading === heading.id ? "text-orange-500 font-semibold side-line" : ""}`}>
                                <a href={`#${heading.id}`}>{heading.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
