import { useContext } from "react";
import blogimg from "../../assets/image/blog-image.svg";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

export default function Ourblog() {
  const { data, error } = useContext(Context);

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="w-11/12 mx-auto mt-14">
        <div className="flex justify-between py-3 ourblog-heading align-center">
          <h1 className="text-2xl">Our Blogs</h1>
          <Link className="text-2xl text-[#22249B] primary-btn" to="/Blogs">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 py-8 md:py-14 md:grid-cols-2">
          {data.slice(0, 8).map((item, index) => (
            <Link to={`/Blogs/${item.title_slug}`} key={index}>
              <div  className="grid w-full grid-cols-4 gap-4 mb-5 review" >
                <img className="col-span-1 border-2 rounded-xl blog-img" width={170} src={ item.image ? `https://www.bthawk.com/panel/img/${item.image}` : blogimg } alt={item.title} />
                <div className="col-span-3">
                  <b className="mb-2 text-xl blog-detail text-wrap">
                    {item.blog_title}
                  </b>
                  <p className="mt-2 blog-detail" dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
