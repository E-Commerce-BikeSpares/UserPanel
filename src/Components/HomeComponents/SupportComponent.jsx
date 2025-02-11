import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { GrCurrency } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";

const Data = [
  {
    id: "01",
    img: <TbTruckDelivery className="w-[60px] h-[60px] " />,
    title: "FREE SHIPPING",
    description: "FREE SHIPPING ON ORDER ABOVE 2000",
  },
  {
    id: "02",
    img: <GrCurrency className="w-[60px] h-[60px] " />,
    title: "100% MONEY BACK",
    description: "YOU HAVE 30 DAYS TO RETURN",
  },
  {
    id: "03",
    img: <BiSupport className="w-[60px] h-[60px] " />,
    title: "24/7 CUSTOMER SUPPORT",
    description: "SUPPORT ONLINE 24 HRS A DAY",
  },
  {
    id: "04",
    img: <FaMapLocationDot className="w-[60px] h-[60px] " />,
    title: "LIVE TRACKING",
    description: "TRACK YOUR ORDER FROM START TO FINISH",
  },
];

const Content = [
  {
    title: "OUR ORDER SUPPORT",
    description:
      "We are here to help you with any questions or concerns you may have about your order .",
  },
];

export const CardDesign = ({ value }) => {
  const { id, img, title, description } = value || {};
  return (
    <div className="w-[280px] h-[220px] bg-gradient-to-br from-[#0E4257] to-[#058CA6] rounded-3xl flex flex-col gap-2.5 px-3 py-3">
      <h3 className="text-white font-semibold ">{id}</h3>
      <hr className="w-full h-[2px] bg-white rounded" />
      <div className="flex items-center justify-center">
      {img}
      </div>
      <p className="text-white font-semibold ">{title}</p>
      <p className="text-black font-medium ">{description}</p>
    </div>
  );
};

export const SupportDiscription = ({ value }) => {
  const { title, description } = value || {};
  return (
    <div className="w-full h-[100px] flex flex-col justify-start items-start px-6 gap-2 py-4">
      <h2
        className="font-bold text-2xl text-white ">
        {title}
      </h2>
      <p className="text-gray-200 font-medium">
        {description}
      </p>
    </div>
  );
};


const SupportHome = () => {
  return (
   <div className="w-full h-full flex items-center justify-center">
     <div className="w-[95%] min-h-[650px] rounded-2xl bg-[url('https://t4.ftcdn.net/jpg/03/65/60/33/360_F_365603381_jl2eSsk2nsz7hFbGpfZSWwfXLxO1Unp4.jpg')] bg-cover bg-no-repeat  ">
      <div className="w-full min-h-[650px]  bg-black rounded-2xl bg-opacity-90 flex flex-col items-start justify-evenly">
        <div className="min-h-[100px] h-full">
        {Content.map((value) => (
          <SupportDiscription key={value.title} value={value} />
        ))}
        </div>
        
        <div className="min-h-[500px] w-full flex flex-col  xl:flex-row 2xl:flex-row  justify-around items-center gap-5">
          <div className="min-w-[50%] h-full px-5 p-4 flex items-center justify-center">
            <img
              className="w-full h-full rounded-xl"
              src="https://shutterstock.com/image-photo/portrait-beautiful-charming-asian-female-600nw-2352304361.jpg"
              alt=""
            />
          </div>
          <div className="min-w-[50%] h-full flex flex-wrap justify-center items-center gap-8 p-4 ">
            {Data.map((value) => (
              <CardDesign key={value.id} value={value} />
            ))}
            
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default SupportHome;
