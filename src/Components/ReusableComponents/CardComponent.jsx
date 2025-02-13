import React, { useState } from "react";
import { FaShoppingBag, FaRegHeart } from "react-icons/fa";
import { IoStarHalfOutline, IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export const ReuseableCard = ({ value }) => {
  const { image, brand, sparename, discription, price, path } = value;
  const [cartItems, setCartItems] = useState(0); 
  const [isBouncing, setIsBouncing] = useState(false);


  const handleAddToCart = () => {
    setCartItems((prev) => prev + 1);
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 300);
  };

  return (
    <div className="max-h-[500px] flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white">
  
      <div className="w-full h-[250px] relative overflow-hidden group">
        <img
          src={image}
          alt="ui/ux review check"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />

        <div
          className={`absolute top-4 left-4 p-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out cursor-pointer group ${
            isBouncing ? "animate-bounce" : ""
          }`}
          onClick={handleAddToCart}
        >
          <FaShoppingBag className="text-xl text-gray-600 hover:text-white transform group-hover:scale-110 transition-transform duration-300 ease-in-out" />
          {cartItems > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems}
            </div>
          )}
        </div>

        <div className="absolute top-4 right-4 p-2 text-gray-600 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out cursor-pointer">
          <FaRegHeart className="text-lg" />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-blue-600 font-medium">{brand}</p>
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <IoStarSharp key={i} className="text-xl text-yellow-400" />
            ))}
            <IoStarHalfOutline className="text-xl text-yellow-400" />
          </div>
        </div>

        <h4 className="text-xl font-semibold text-gray-800">{sparename}</h4>

        <p className="text-sm text-gray-600">{discription}</p>
      </div>

      <div className="mt-auto p-4 bg-gradient-to-r from-blue-900 via-blue-900 to-blue-800 rounded-b-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">₹</span>
            <span className="text-white text-xl">{price}</span>
          </div>

          <div className="w-[40%] flex items-center justify-end">
            <Link to={path}>
              <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-transparent hover:text-white transition-all duration-300 ease-in-out relative overflow-hidden group">
                <span className="relative z-10">BUY NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out -translate-x-full group-hover:translate-x-0"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReuseableCard;