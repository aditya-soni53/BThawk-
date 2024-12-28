/* eslint-disable react/no-unknown-property */
import { useEffect, useState, useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Topbanner from "../component/layout/topBanner/Topbanner";
import Blogbanner from "../assets/image/blog-banner.jpg";
import twitter from "../assets/image/twitter.png";
import profileimg from "../assets/image/favicon.svg";
import Heroslider from "../component/Heroslider";
import Faqdetail from "../component/Faqdetail";
import Relatedblogs from "../component/Relatedblogs";
import { Context } from "../Context";
import { Helmet } from "react-helmet";

export default function Blogdetail() {
  const { blogId } = useParams(); // Extract blog ID from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [headings, setHeadings] = useState([]);
  const { data } = useContext(Context);
  const url = window.location.href;
  const blogTitle = blog?.meta_title;
  const basePath = window.location.origin;

  // To keep track of the active heading in the TOC
  const [activeHeading, setActiveHeading] = useState(null);

  // Create a ref for the content container to access the H2 elements directly
  const contentRef = useRef(null);
  // Format date strings
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date)) throw new Error("Invalid Date");
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "Invalid Date";
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://www.bthawk.com/api/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "blogDetailFetch", blogId: blogId }),
        });

        if (!response.ok) throw new Error("Failed to fetch blog details");
        const result = await response.json();
        if (result.status === 1) {
          console.log(response);
          setBlog(result.data);

          // Extract H2 headings from blog content
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = result.data.content;
          const h2Tags = Array.from(tempDiv.querySelectorAll("h2")).map(
            (h2) => h2.innerText
          );
          setHeadings(h2Tags);
        } else {
          throw new Error(result.message || "Blog not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [blogId]);

  useEffect(() => {
    // Add ids to H2 tags after content is rendered
    if (contentRef.current) {
      const h2Tags = contentRef.current.querySelectorAll("h2");

      h2Tags.forEach((element, i) => {
        if (!element.id) {
          element.setAttribute("id", `heading_${i}`);
        }
      });
    }
  }, [blog]); // Run only after `blog` data is set

  // Scroll event listener to update active heading
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

  // if (loading)
  //   return (

  //   );
  if (error)
    return (
      <div className="grid w-full h-96 place-content-center">
        Error: {error}
      </div>
    );

  return (
    <>
      <Topbanner banner={Blogbanner} />
      {loading ? (
        <div className="grid w-full h-96 place-content-center">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <Helmet>
            <title>{blog.meta_title}</title>
            <meta name="keywords" content={blog.tags} />
            <meta name="description" content={blog.meta_description} />
            <link rel="canonical" href={url} />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={blog.meta_title} />
            <meta property="og:description" content={blog.meta_description} />

            {/* <!-- Twitter Meta Tags --> */}
            <meta property="twitter:domain" content={basePath} />
            <meta property="twitter:url" content={url} />
            <meta name="twitter:title" content={blog.meta_title} />
            <meta name="twitter:description" content={blog.meta_description} />
          </Helmet>
          <div className="grid w-11/12 grid-cols-1 mx-auto mt-4 lg:grid-cols-4 lg:mt-8">
            <div className="lg:col-span-3 lg:p-4">
              <p className="mb-3">
                <span className="bg-[#F7F7F7] p-2 rounded-md">
                  <Link to="/Home">Home </Link>/<Link to="/blogs"> blog </Link>/{" "}
                  {blogId}
                </span>
              </p>

              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={`https://www.bthawk.com/panel/img/` + blog.image}
                  alt={blog.blog_title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/path-to-fallback-image.jpg";
                  }}
                />
                <div className="p-8 blog-main-img">
                  <h1 className="text-2xl">{blog.title}</h1>
                  <div className="flex blog-card-footer">
                    <div className="flex p-2">
                      <img
                        src={profileimg}
                        alt="Profile"
                        className="w-6 mr-1"
                      />
                      <span>{blog.posted || "Unknown Author"}</span>
                    </div>
                    <div className="flex p-2">
                      <img src={profileimg} alt="Date" className="w-6 mr-1" />
                      <span>{formatDate(blog.blog_date)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={contentRef} className="blog-content">
                <p dangerouslySetInnerHTML={{ __html: blog.content }} />
                <div>
                  <Faqdetail faq={blog.faqs} />
                </div>
                <div>
                  <h2 className="related-blogs-heading">Related Blogs</h2>
                  <div className="related-blogs">
                    <Relatedblogs data={data} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:p-4">
              <div className="">
                <Heroslider />
              </div>
              <div className="sticky top-[84px]">
                <div className="share-card">
                  <h6 className="mb-4 text-sm">Share with your community!</h6>
                  <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        url
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 text-center border-r-2"
                    >
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        blogTitle
                      )}&url=${encodeURIComponent(url)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 text-center border-r-2"
                    >
                      <img src={twitter} alt="twitter" width={17} />
                    </a>
                    <a
                      href={`https://www.instagram.com/p/${url}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Instagram Post"
                      className="px-4 text-center border-r-2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        url
                      )}&title=${encodeURIComponent(blogTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 text-center"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
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
                <div className="pr-0 mt-4 table-of-content">
                  <h2 className="table_content">Table of Contents</h2>
                  <ul>
                    {headings.map((heading, index) => (
                      <li
                        className={`mt-1 py-1 pl-2 ${
                          activeHeading === `heading_${index}`
                            ? "text-orange-500 side-line"
                            : ""
                        }`}
                        key={index}
                      >
                        <a
                          className="hover:text-orange-500"
                          href={`#heading_${index}`}
                        >
                          {heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
