import React from "react";
import ReuseableCard from "../ReusableComponents/CardComponent";
import Dome from "../../assets/HeroSection/Hero-Head.jpg";
import Engine from "../../assets/HomePage/Home-Register.jpg";
import Brake from "../../assets/HeroSection/Hero-Wheel.jpg";
import Chain from "../../assets/HeroSection/Hero-Head.jpg";

const HomeCard = () => {
  const data = [
    {
      image: Dome,
      brand: "HERO",
      sparename: "DOME",
      discription:
        "Hero Honda Cbz Xtreme Bike Spare Parts - Safexbikes Motorcycle Superstore",
      rating: 3,
      price: 3000,
      path: "/prod-1",
    },
    {
      image:Engine,
      brand: "HONDA",
      sparename: "ENGNEE",
      discription:
        "The GX160’s 1/2 reduction mechanism is specifically developed for long-tail",
      rating: 4,
      price: 8000,
      path: "/prod-2",
    },
    {
      image:Brake,
      brand: "YAMAHA",
      sparename: "BRAKE SPARE",
      discription:
        "Conversely, a lower final drive ratio will lead to slower initial acceleration.....",
      rating: 2,
      price: 2000,
      path: "/prod-3",
    },
    {
      image:Chain,
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
    <div className="w-full h-full p-8 mt-0">
      <h2 className="text-3xl font-bold text-gray-600 text-left mb-6">
        New Arrivals
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-sm:gap-4">
        {data.map((value, index) => (
          <ReuseableCard key={index} value={value} />
        ))}
      </div>
    </div>
  );
};

export default HomeCard;