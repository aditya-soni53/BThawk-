import { useState, useContext } from 'react';
import profileimg from '../assets/image/favicon.svg';
import Blogbanner from '../assets/image/blog-banner.jpg';
import { Link } from 'react-router-dom';
import { Context } from '../Context';


export default function Bloglist() {
  const [visibleBlogs, setVisibleBlogs] = useState(12);

  const { data, error, loading } = useContext(Context);

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
  if (loading) return <div className='grid w-full h-96 place-content-center'><span className="loader"></span></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="w-11/12 mx-auto mt-12">
        <h1 className="text-2xl">Latest Blog</h1>
      </div>
      <div className="grid w-11/12 grid-cols-1 gap-4 mx-auto my-10 mb-16 lg:grid-cols-3">
        {
          data.slice(0, visibleBlogs).map((item, index) => (
            <Link key={index} to={`/Blogs/${item.title_slug}`}>
            <div className="blog-card">
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
              <div className="pt-3 blog-card-content">
              <b className="text-lg">{item.blog_title}</b>
              <p className='mt-2 blog-detail' dangerouslySetInnerHTML={{ __html: item.content }} />
                <div className="grid grid-cols-2 blog-card-footer">
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
            </Link>
          ))
        }
      </div>

      {/* Load More Button */}
      {visibleBlogs < data.length && (
          <div className="my-4 text-center mb-14">
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
