import React, { useEffect, useState } from 'react';
import profileimg from '../assets/image/favicon.svg';
import Blogbanner from '../assets/image/blog-banner.jpg';
import { Link } from 'react-router-dom';

export default function Bloglist() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleBlogs, setVisibleBlogs] = useState(12); // Pagination control

  // Fetch blog data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.bthawk.com/api/blog_api", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ type: 'blogFetch' }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result.data); // Ensure this matches your API's response structure
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Format date strings
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date)) throw new Error('Invalid Date');
      return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return 'Invalid Date';
    }
  };

  // Load more blogs
  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 12);
  };

  // Display loaders or error messages
  if (loading) return <div className='w-full h-96 grid place-content-center'><span class="loader"></span></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="w-11/12 mx-auto mt-12">
        <h1 className="text-2xl">Latest Blog</h1>
      </div>
      <div className="w-11/12 mx-auto my-10 mb-16 grid lg:grid-cols-3 grid-cols-1 gap-4">
        {
          data.slice(0, visibleBlogs).map((item, index) => (
            <div key={index} className="blog-card">
              {/* Image with fallback */}
              <img
                src={`https://www.bthawk.com/panel/img/` + item.image}
                className="rounded-xl"
                alt={item.blog_title}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = Blogbanner; // Fallback image
                }}
              />

              {/* Blog content */}
              <div className="blog-card-content pt-3">
              <Link to={`/Blogs/${item.title_slug}`}><b className="text-lg">{item.blog_title}</b></Link>
              <p className='mt-2 blog-detail' dangerouslySetInnerHTML={{ __html: item.content }} />
                <div className="blog-card-footer grid grid-cols-2">
                  <div className="flex p-2">
                    <img src={profileimg} alt="Profile" className="w-6 mr-1" />
                    <span>{item.blog_posted_by || "Unknown Author"}</span>
                  </div>
                  <div className="flex p-2">
                    <img src={profileimg} alt="Date" className="w-6 mr-1" />
                    <span>{formatDate(item.blog_date)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {/* Load More Button */}
      {
        visibleBlogs < data.length && (
          <div className="text-center my-4 mb-14">
            <button
              onClick={loadMoreBlogs}
              className="primary-btn"
            >
              Load More
            </button>
          </div>
        )
      }
    </>
  );
}
