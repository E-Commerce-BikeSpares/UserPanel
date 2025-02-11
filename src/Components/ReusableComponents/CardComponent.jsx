import React from "react";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { IoStarHalfOutline, IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BlackVarient, DarkVarient, LightVarient, WhiteVarient } from "../ColorComponent/ColorComponent";
// import { DarkVarient ,LightVarient, WhiteVarient,BlackVarient} from "../ColorComponent/ColorComponent";

export const CardMaping = ({ value }) => {
  const { image, brand, sparename, discription, price, path } =
    value;
  return (
    <>
      <div class={`w-[330px] max-h-[500px] mt-20 flex flex-col overflow-hidden rounded-xl shadow-lg shadow-black text-[${DarkVarient()}] `}>
       
        <div class={`w-full h-[380px] relative overflow-hidden text-${DarkVarient()} bg-transparent rounded-xl `}>
          <img
            src={image}
            alt="ui/ux review check"
            className="w-full h-[60%] px-4 py-4 rounded-xl"
          />
          <div className={`flex justify-center items-center h-8 w-9 absolute top-5 right-5  bg-${WhiteVarient()} rounded-[10px] hover:scale-125  hover:text-[${DarkVarient()}]`}>
            <FaRegHeart className={`text-lg text-${DarkVarient()}`} />
          </div>

          <div class="w-full h-[30%] px-3 flex flex-col items-start justify-center gap-0">
            <div className="w-full h-[50%] flex flex-col items-start justify-center ">
              <p class={`text-sm text-[${DarkVarient()}]`}>{brand}</p>
              <h4 class="text-xl font-semibold">
                {sparename}
              </h4>
            </div >
            <p class={`w-full h-[50%] font-normal text-sm text-justify text-${BlackVarient()} `}>{discription}</p>
          </div>

            <div className="w-full h-[10%] flex items-start justify-start px-3 gap-1">
              <IoStarSharp className="text-xl" />
              <IoStarSharp className="text-xl"/>
              <IoStarSharp className="text-xl"/>
              <IoStarSharp className="text-xl" />
              <IoStarHalfOutline className="text-xl" />

            </div>
        </div>

        <div
          class={`relative w-[330px] h-[80px] px-7 flex items-center justify-between  bg-gradient-to-r from-[${DarkVarient()}] to-[${LightVarient()}]
             `}
        >
             <div className={`w-[40%] h-full text-${WhiteVarient()} flex justify-center items-center gap-1`}>
             <span className=" font-bold text-lg">RS :</span>
             <span className="text-xl">{price}</span>
             </div>
             
          <div class={` absolute -top-5 left-36 flex items-center h-10 w-10 bg-${WhiteVarient()} border-4 border-[${LightVarient()}]  rounded-full hover:scale-125 hover:border-[#0E4257]  `}>
            <FaCartPlus class="text-xl  ml-1" />
          </div>

          <div className="w-[40%] h-full flex items-center justify-center">
            <Link to={path}>
              <button className={`px-2 py-1.5 hover:scale-110 border bg-${WhiteVarient()} rounded-lg text-[${DarkVarient()}] font-semibold text-sm  `}>
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const ReusableCard = () => {
  const data = [
    {
      image:
        "https://imgd.aeplcdn.com/476x268/n/cw/ec/103795/yzf-r15-front-suspension-preload-adjuster.jpeg",
      brand: "HERO",
      sparename: "DOME",
      discription:
        "Hero Honda Cbz Xtreme Bike Spare Parts - Safexbikes Motorcycle Superstore",
      rating: 3,
      price: 3000,
      path: "/prod-1",
    },
    {
      image:
        "https://www.carparts.com/blog/wp-content/uploads/2020/03/timing-chain-system-1024x683.jpeg",
      brand: "HONDA",
      sparename: "ENGNEE",
      discription:
        "The GX160’s 1/2 reduction mechanism is specifically developed for long-tail",
      rating: 4,
      price: 8000,
      path: "/prod-2",
    },
    {
      image:
        "https://imgd.aeplcdn.com/476x268/n/cw/ec/103795/yzf-r15-rear-disc-brake.jpeg",
      brand: "YAMAHA",
      sparename: "BRAKE SPARE",
      discription:
        "Conversely, a lower final drive ratio will lead to slower initial acceleration.....",
      rating: 2,
      price: 2000,
      path: "/prod-3",
    },
    {
      image:
        "https://i.pinimg.com/originals/77/6e/38/776e389b1783f0af7cb1dd3f6dff1c78.jpg",
      brand: "DUKE",
      sparename: "CHAINSPRAKET",
      discription:
        "Hero Honda Cbz Xtreme Bike Spare Parts - Safexbikes Motorcycle Superstore",
      rating: 3,
      price: 5000,
      path: "/prod-4",
    },
  ];

  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-wrap gap-11">
        {data.map((value, index) => (
          <CardMaping key={index} value={value} />
        ))}
      </div>
    </>
  );
};

export default ReusableCard;
