import Topbanner from "../component/Topbanner";
import Blogbanner from "../assets/image/blog-banner.jpg";
import Bloglist from "../component/Bloglist";

export default function Blogs() {
  return (
    <>
      <Topbanner banner={Blogbanner} />
      <Bloglist />
    </>
  );
}
