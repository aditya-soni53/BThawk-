import React from "react";
import Topbanner from "../../component/layout/topBanner/Topbanner";
import Blogbanner from "../../assets/image/ourcoustomer.webp";
import Reviewlist from "./Reviewlist";
import { Helmet } from "react-helmet";

export default function Ourcustomer() {
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

        {/* Twitter Meta Tags */}

        <meta
          property="twitter:title"
          content="GST Billing Software for Seamless Business Accounting | BTHawk"
        />
        <meta
          property="twitter:description"
          content="Simplify your business accounting with GST billing software. Manage invoices, inventory, and compliance effortlessly with BTHawk’s robust solutions."
        />
        
      </Helmet>
      <Topbanner banner={Blogbanner} />
      <Reviewlist />
    </>
  );
}
