import React from "react";
import mobile from "../assets/image/mobile-device.svg";
import playstore from "../assets/image/play-store.svg";
import appstore from "../assets/image/app-store.svg";
import webstore from "../assets/image/web-screen.svg";
export default function Bthawkdevice () {
  return (
    <>
      <div className="grid mx-auto md:w-11/12 md:grid-cols-2 mt-14">
        <div className="mobile-device bg-[#000000] md:p-14 p-6 text-white rounded-md">
          <p>Mobile App</p>
          <h1 className="text-xl">
            Carry your accounts <br />
            wherever you go!
          </h1>
          <img src={mobile} alt="" className="mx-auto my-10" />
          <div className="flex justify-center gap-2">
            <img src={playstore} alt="" className="store-img" />
            <img src={appstore} alt="" className="store-img" />
          </div>
        </div>
        <div className="web-device md:p-14 p-6 bg-[#F2F7F7] rounded-md">
          <p className="text-[#5152B0]">desktop App</p>
          <h1 className="text-xl text-[#5152B0]">
            A Simple, Secure standalone <br />
            Desktop Solution!
          </h1>
          <img src={webstore} alt="" className="mx-auto my-10" />
        </div>
      </div>
    </>
  );
}
