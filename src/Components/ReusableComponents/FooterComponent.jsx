import React from "react";
import WebLogo from "../images/Machzoa Logo 1.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaChevronRight, FaWhatsappSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiInstagramFill } from "react-icons/ri";

const List = ({ value }) => {
  console.log(value);

  const { page, path } = value || {};

  return (
    <div className="">
      <Link to={path}>
        <li className="flex gap-1">
          <FaChevronRight className="text-gray-700 mt-1" />
          {page}
        </li>
      </Link>
    </div>
  );
};

const FooterAbout = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <img src={WebLogo} alt="Machzoa Logo" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eius
        quaerat cumque consequatur et dignissimos vitae, qui soluta voluptate
        ullam doloremque, expedita magnam id quo molestiae, deserunt quae
        aliquid ab?
      </p>
    </div>
  );
};

const SparesByBikeComp = () => {
  const sparesByBike = [
    { page: "Yamaha", path: "/yamaha" },
    { page: "KTM", path: "/ktm" },
    { page: "Hero", path: "/hero" },
    { page: "Honda", path: "/honda" },
    { page: "Bajaj", path: "/bajaj" },
    { page: "TVS", path: "/tvs" },
  ];

  return (
    <div className="flex max-sm:w-[200px] flex-col gap-3">
      <h3 className="font-bold">SPARES BY BIKE</h3>
      <ul className="w-[100px] flex flex-col gap-2">
        {sparesByBike.map((value, index) => (
          <List key={index} value={value} />
        ))}
      </ul>
    </div>
  );
};

const FooterAccesories = () => {
  const accesories = [
    { page: "Bike Protection", path: "/bikeprotection" },
    { page: "Handlebar & Accesories", path: "/handlebaraccesories" },
    { page: "Performance Accesories", path: "/performanceaccesories" },
    { page: "Body Fairing & Fenders", path: "/bodyfairingfenders" },
    { page: "Cleaning Accesories", path: "/cleaningaccesories" },
    { page: "Bike Essentials", path: "/bikeessential" },
    { page: "Foot Accesories", path: "/footaccesories" },
    { page: "Lighting", path: "/lighting" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">ACCESORIES</h3>
      <ul className="w-[200px] flex flex-col gap-2">
        {accesories.map((value, index) => (
          <List key={index} value={value} />
        ))}
      </ul>
    </div>
  );
};

const FooterDelivery = () => {
  const delivery = [
    { page: "Privacy Policy", path: "/privacypolicy" },
    { page: "Terms & Conditions", path: "/termsandcondition" },
    { page: "Returns & Refunds", path: "/returnsandrefunds" },
    { page: "Cancellation Policy", path: "/cancellationpolicy" },
    { page: "Shipping Policy", path: "/shippingpolicy" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">DELIVERY & RETURNS</h3>
      <ul className="w-[200px] flex flex-col gap-2">
        {delivery.map((value, index) => (
          <List key={index} value={value} />
        ))}
      </ul>
    </div>
  );
};

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold pl-1">CONTACT US</h3>
      <div className="w-[180px] flex flex-col gap-3">
        <p className="flex gap-2">
          <span>
            <FaLocationDot className="text-red-800 mt-1" />
          </span>
          NO : 51, Anna Nagar, Near Police Station, Nagapattinam - 614810.
        </p>
        <p className="flex gap-2">
          <span>
            <FaPhone className="text-blue-500 mt-1" />
          </span>
          91+ 8344024735
        </p>
      </div>
    </div>
  );
};

const FooterComp = () => {
  return (
    <div className="w-full min-h-[200px] mt-36 flex flex-col justify-center pt-5 items-center bg-gray-200 drop-shadow-md gap-4">
      <div className="flex flex-row flex-wrap w-full justify-center h-full gap-9">
        <div className="w-[340px] text-justify h-full">
          <FooterAbout />
        </div>
        <div className="flex flex-row flex-wrap w-[72%] h-full justify-evenly gap-5 items-start">
          <SparesByBikeComp />
          <FooterAccesories />
          <FooterDelivery />
          <FooterContact />
        </div>
      </div>

      <div className="w-full min-h-[80px] max-sm:py-4 px-20 bg-gradient-to-b from-[#0E4257] to-[#058CA6] flex flex-row flex-wrap gap-5 justify-between text-gray-300 items-center">
        <div className="w-[400px] flex flex-col items-center justify-start gap-[8px]">
          <p
            className="flex gap-2 font-[500] cursor-pointer"
            style={{ textShadow: "0px 0px 6px #000000" }}
          >
            <span>
              <FaWhatsappSquare className="text-green-500 mt-[2px] text-xl" />
            </span>
            WHATSAPP
          </p>
          <p>91+ 8344024735</p>
        </div>
        <div className="w-[400px] h-full max-sm:border-none border-r-2 border-l-2 border-black flex flex-col items-center justify-start gap-[8px]">
          <p
            className="flex gap-2 font-[500] cursor-pointer"
            style={{ textShadow: "0px 0px 6px #000000" }}
          >
            <span>
              <FcGoogle className="mt-[2px] text-xl " />
            </span>
            GMAIL
          </p>
          <p>yesspares@gmail.com</p>
        </div>
        <div className=" w-[400px] justify-center items-center flex flex-col gap-3">
          <p
            className="font-[500]"
            style={{ textShadow: "0px 0px 6px #000000" }}
          >
            STAY IN TOUCH
          </p>
          <div className="flex flex-row flex-wrap justify-center text-xl items-center text-black gap-6">
            <FaXTwitter className="text-black cursor-pointer text-2xl" />
            <RiInstagramFill className="text-pink-700 cursor-pointer text-2xl" />
            <FaFacebookF
              className="text-blue-800 cursor-pointer text-2xl"
              style={{ textShadow: "px px 5px #FFFFFF" }}
            />
            <FaYoutube className="text-red-800 cursor-pointer text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterComp;
