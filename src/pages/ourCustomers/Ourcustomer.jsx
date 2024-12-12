import React from "react";
import Topbanner from "../../component/layout/topBanner/Topbanner";
import Blogbanner from "../../assets/image/blog-banner.jpg";
import Reviewlist from "./Reviewlist";

export default function Ourcustomer() {
  return (
    <>
      <Topbanner banner={Blogbanner} />
      <Reviewlist />
    </>
  );
}
