import Banner from "./Banner";
import Feature from "./Feature";
import Howcan from "./Howcan";
import Appshowcase from "./Appshowcase";
import Moduls from "./Moduls";
import Bthawkdevice from "./Bthawkdevice";
import Testimonials from "./Testimonials";
import Partnerslider from "./Partnerslider";
import Ourblog from "./Ourblog";
import { Helmet } from "react-helmet";

export default function Home() {
  const basePath = window.location.origin;

  return (
    <>
      <Helmet>
        <title>
          GST Billing Software for Seamless Business Accounting | BTHawk
        </title>
        <meta
          name="keywords"
          content="GST billing software, GST billing, GST billing and accounting, ITR Filing, Accounting solution, GST billing and accounting solution, GST, GST registration"
        />
        <meta
          name="description"
          content="Simplify your business accounting with GST billing software. Manage invoices, inventory, and compliance effortlessly with BTHawk’s robust solutions."
        />
        {/* Basic OG Tags */}
        <meta
          property="og:title"
          content="GST Billing Software for Seamless Business Accounting | BTHawk"
        />
        <meta
          property="og:description"
          content="Simplify your business accounting with GST billing software. Manage invoices, inventory, and compliance effortlessly with BTHawk’s robust solutions."
        />
        <meta property="og:url" content={`${basePath}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BTHAWK" />
        <meta property="og:locale" content="en_in" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="GST Billing Software for Seamless Business Accounting | BTHawk"
        />
        <meta
          property="twitter:description"
          content="Simplify your business accounting with GST billing software. Manage invoices, inventory, and compliance effortlessly with BTHawk’s robust solutions."
        />
        <meta property="twitter:url" content={`${basePath}/`} />
        <meta property="twitter:type" content="BTHAWK" />
        <link rel="canonical" href={`${basePath}/`} />
      </Helmet>
      <Banner />
       <Feature />
     <Howcan />
       <Appshowcase />
      <Moduls />
     <Bthawkdevice />
      <Testimonials />
      <Partnerslider />
      <Ourblog />
    </>
  );
}
