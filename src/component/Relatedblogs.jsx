import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Blogbanner from '../assets/image/blog-banner.jpg';

import Slider from "react-slick";

export default function Relatedblogs({data}) {

console.log(data);
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "60px",
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((related, index) => (
            <div key={index} className="blog-card m-2">
                {/* Image with fallback */}
              <img
                src={`https://www.bthawk.com/panel/img/` + related.image}
                className="rounded-xl"
                alt={related.blog_title}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = Blogbanner; // Fallback image
                }}
                />
                <Link to={`/Blogs/${related.title_slug}`}><b className="text-lg">{related.blog_title}</b></Link>
              
              {/* <img src={`https://www.bthawk.com/panel/img/${related.image}`} alt={related.title} /> */}
            </div>
          ))}
        </Slider>
      </div>
    );
}
