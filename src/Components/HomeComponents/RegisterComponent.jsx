import React from "react";
import bikeRacingImage from "../../assets/HomePage/Home-Register.jpg";

const HomeRegister = () => {
  return (
    <div className="w-full h-full flex-wrap flex justify-center items-center mt-20">
      <div className="w-[750px] max-lg:w-full h-[500px]">
        <img
          src={bikeRacingImage}
          alt="Bike Racing"
          className="w-[100%] h-[500px] rounded-l-2xl max-md:rounded-none object-cover"
        />
      </div>

      <div className="form-container w-[720px] min-h-[500px] max-lg:w-full flex flex-col justify-start items-center bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 rounded-r-2xl max-md:rounded-none">
        <div className="heading py-3 px-4 flex justify-center items-center flex-col">
          <h2 className="font-bold text-2xl py-5 text-white">
            WANT TO BUY A SPARES ?
          </h2>
          <h3 className="font-extrabold text-3xl text-yellow-400 mb-4">
            REGISTER NOW
          </h3>
        </div>

        <div className="w-full form-field relative flex flex-wrap md:flex-row flex-col justify-center items-center gap-14 py-7 text-white">
          <div className="relative w-[300px] md:w-[220px]">
            <input
              type="text"
              id="username"
              placeholder=" "
              className="peer block w-full  bg-transparent px-2.5 pb-2 pt-5 text-sm text-white focus:outline-none focus:ring-0 border-b-2 border-yellow-400"
            />
            <label
              htmlFor="username"
              className="absolute left-0 top-1 text-sm text-yellow-400 transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-200 peer-placeholder-shown:text-base peer-focus:top-[0] peer-focus:text-xs peer-focus:text-yellow-400"
            >
              USER NAME
            </label>
          </div>

          <div className="relative w-[300px] md:w-[220px]">
            <input
              type="text"
              id="mobile"
              placeholder=" "
              className="peer block w-full bg-transparent px-2.5 pb-2 pt-5 text-sm text-white focus:outline-none focus:ring-0 border-b-2 border-yellow-400"
            />
            <label
              htmlFor="mobile"
              className="absolute left-0 top-1 text-sm text-yellow-400 transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-200 peer-placeholder-shown:text-base peer-focus:top-[0] peer-focus:text-xs peer-focus:text-yellow-400"
            >
              MOBILE NO
            </label>
          </div>
        </div>

        <div className="email py-4 md:w-[502px] w-[300px] flex items-center justify-center">
          <div className="relative w-[300px] md:w-[500px]">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer block w-full bg-transparent px-2.5 pb-2 pt-5 text-sm text-white focus:outline-none focus:ring-0 border-b-2 border-yellow-400"
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-1 text-sm text-yellow-400 transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-200 peer-placeholder-shown:text-base peer-focus:top-[0] peer-focus:text-xs peer-focus:text-yellow-400"
            >
              EMAIL
            </label>
          </div>
        </div>

        <div className="btn w-[250px] h-[45px] mt-10 mb-8 md:mb-0 py-6 bg-yellow-400 text-black font-semibold text-lg flex justify-center items-center text-center rounded-3xl hover:scale-105 transform ease-in-out duration-500 cursor-pointer">
          <button>REGISTER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default HomeRegister;