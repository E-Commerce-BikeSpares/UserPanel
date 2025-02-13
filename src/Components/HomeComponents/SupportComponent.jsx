import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { GrCurrency } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import backgroundImage from "../../assets/car.jpg";
import supportImage from "../../assets/car.jpg";

const Data = [
  {
    id: "01",
    img: <TbTruckDelivery className="w-[60px] h-[60px] font-normal text-yellow-400" />,
    title: "FREE SHIPPING",
    description: "FREE SHIPPING ON ORDER ABOVE 2000",
  },
  {
    id: "02",
    img: <GrCurrency className="w-[60px] h-[60px] text-yellow-400" />,
    title: "100% MONEY BACK",
    description: "YOU HAVE 30 DAYS TO RETURN",
  },
  {
    id: "03",
    img: <BiSupport className="w-[60px] h-[60px] text-yellow-400" />,
    title: "24/7 CUSTOMER SUPPORT",
    description: "SUPPORT ONLINE 24 HRS A DAY",
  },
  {
    id: "04",
    img: <FaMapLocationDot className="w-[60px] h-[60px] text-yellow-400" />,
    title: "LIVE TRACKING",
    description: "TRACK YOUR ORDER FROM START TO FINISH",
  },
];

const Content = [
  {
    title: "OUR ORDER SUPPORT",
    description:
      "We are here to help you with any questions or concerns you may have about your order.",
  },
];

export const CardDesign = ({ value }) => {
  const { id, img, title, description } = value || {};
  return (
    <div className="w-[280px] h-[220px] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800/50 backdrop-blur-md rounded-3xl flex flex-col gap-2.5 px-3 py-3 hover:scale-105 transition-transform duration-300 ease-in-out ">
      <h3 className="text-white font-semibold ">{id}</h3>
      <hr className="w-full h-[2px] bg-yellow-400 rounded" />
      <div className="flex items-center justify-center">{img}</div>
      <p className="text-white font-semibold ">{title}</p>
      <p className="text-yellow-100 font-medium ">{description}</p>
    </div>
  );
};

export const SupportDiscription = ({ value }) => {
  const { title, description } = value || {};
  return (
    <div className="w-full h-[100px] flex flex-col justify-start items-start px-6 gap-2 py-4">
      <h2 className="font-bold text-4xl text-yellow-400 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
      </h2>
      <p className="text-gray-200 font-medium text-lg">{description}</p>
    </div>
  );
};

const SupportHome = () => {
  return (
    <div className="w-full h-full flex mt-12 items-center justify-center">
      <div
        className="w-[97%] min-h-[650px] rounded-2xl bg-cover bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Parallax Background */}
        <div className="absolute inset-0 bg-black/80 rounded-2xl"></div>

        {/* Content */}
        <div className="relative w-full min-h-[650px] flex flex-col items-start justify-evenly">
          {/* Support Description */}
          <div className="min-h-[100px] h-full">
            {Content.map((value) => (
              <SupportDiscription key={value.title} value={value} />
            ))}
          </div>

          {/* Support Image and Cards */}
          <div className="min-h-[500px] w-full flex flex-col xl:flex-row 2xl:flex-row justify-around items-center gap-5">
            {/* Support Image */}
            <div className="min-w-[50%] h-[80%] px-5 p-4 flex items-center justify-center">
              <img
                className="w-full h-[500px] rounded-xl object-cover shadow-lg shadow-blue-900/50"
                src={supportImage}
                alt="Support Person"
              />
            </div>

            {/* Cards */}
            <div className="min-w-[50%] h-full flex flex-wrap justify-center items-center gap-8 p-4">
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