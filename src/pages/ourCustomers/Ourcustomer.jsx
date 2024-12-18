import React from "react";
import Topbanner from "../../component/layout/topBanner/Topbanner";
import Blogbanner from "../../assets/image/ourcoustomer.webp";
import Reviewlist from "./Reviewlist";

export default function Ourcustomer() {
  return (
    <>
      <Topbanner banner={Blogbanner} />
      <Reviewlist />
    </>
  );
}
