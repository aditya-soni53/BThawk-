import Topbanner from "../../component/layout/topBanner/Topbanner";
import Blogbanner from "../../assets/image/blog-banner.jpg";
import Bloglist from "../../component/Bloglist"
import { Helmet } from "react-helmet";

export default function Blogs() {

  const basePath = window.location.origin;

  return (
    <>
      <Helmet>
        <title>BTHAWK Blogs: GST, Accounting, Business Tips & Insights</title>
        <meta
          name="keywords"
          content="GST, accounting, business tips, compliance updates, tax insights, BTHAWk"
        />
        <meta
          name="description"
          content="Explore BTHAWK blogs for the latest insights on GST, accounting, business tips, and compliance updates to help your business grow and succeed."
        />
        {/* <!-- Title --> */}
        <link rel="canonical" href={`${basePath}/blogs`} />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={`${basePath}/blogs`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BTHAWK Blogs: GST, Accounting, Business Tips & Insights"
        />
        <meta
          property="og:description"
          content="Explore BTHAWK blogs for the latest insights on GST, accounting, business tips, and compliance updates to help your business grow and succeed."
        />
        {/* <!-- Twitter Meta Tags --> */}
        <meta property="twitter:domain" content="BTHAWK.com" />
        <meta property="twitter:url" content={`${basePath}/blogs`} />
        <meta
          name="twitter:title"
          content="BTHAWK Blogs: GST, Accounting, Business Tips & Insights"
        />
        <meta
          name="twitter:description"
          content="Explore BTHAWK blogs for the latest insights on GST, accounting, business tips, and compliance updates to help your business grow and succeed."
        />
      </Helmet>
      <Topbanner banner={Blogbanner} />
      <Bloglist />
    </>
  );
}
