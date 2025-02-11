import { Box, TextField } from "@mui/material";
import React from "react";

const HomeRegister = () => {
  return (
    <div className="w-full h-full flex-wrap flex justify-center items-center mt-20">
      <div className="w-[720px] h-[500px] ">
        <img
          src="https://4.bp.blogspot.com/-LAMcP2zbjIQ/UHK_iZ5OauI/AAAAAAAAALA/x2Fau3cGGMQ/s1600/Bike+Racing.jpg"
          alt=""
          className="w-[100%] h-[500px] rounded-l-2xl"
        />
      </div>
      <div className="form-container w-[720px] min-h-[500px] flex flex-col justify-start items-center bg-gradient-to-r from-[#0E4257] to-[#058CA6] rounded-r-2xl">
        <div className="heading py-3 px-4 flex justify-center items-center flex-col  ">
          <h2 className="font-bold text-2xl py-5 text-white ">
            WANT TO BUY A SPARES ?
          </h2>
          <h3 className="font-extrabold text-3xl text-white mb-4">
            REGISTER NOW
          </h3>
        </div>

        <div className=" w-full form-feild relative flex flex-wrap md:flex-row flex-col justify-center items-center gap-14 py-7 text-white">
          <div class=" USERNAME relative w-[300px] md:w-[220px]">
            <input
              type="text"
              id="floatingInput"
              placeholder="  "
              class="peer block w-full rounded-md  bg-transparent px-2.5 pb-2 pt-5 text-sm text-gray-900 focus:text-white focus:outline-none focus:ring-0"
            />
            <hr className="" />
            <label
              for="floatingInput"
              class="absolute left-3 top-1 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[0] peer-focus:text-xs peer-focus:text-white"
            >
              USER NAME
            </label>
          </div>
          <div class=" USERNAME relative w-[300px] md:w-[220px]">
            <input
              type="text"
              id="floatingInput"
              placeholder="  "
              class="peer block w-full rounded-md  bg-transparent px-2.5 pb-2 pt-5 text-sm text-gray-900 focus:text-white focus:outline-none focus:ring-0"
            />
            <hr className="" />
            <label
              for="floatingInput"
              class="absolute left-3 top-1 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[0] peer-focus:text-xs peer-focus:text-white"
            >
              MOBILE NO
            </label>
          </div>
        </div>

        <div className=" email py-4 md:w-[502px] w-[300px]  flex items-center justify-center ">
          <div class=" USERNAME relative md:w-[500px] w-[300px] flex items-center justify-center flex-col">
            <input
              type="text"
              id="floatingInput"
              placeholder="  "
              class="  peer block rounded-md md:w-[500px] w-[300px]  bg-transparent px-2.5 pb-2 pt-5 text-sm text-gray-900 focus:text-white focus:outline-none focus:ring-0"
            />
            <hr className=" w-[300px] md:w-[500px] flex items-center justify-center " />
            <label
              for="floatingInput"
              class="absolute left-3 top-1 md:w-full w-[300px] text-left text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[0] peer-focus:text-xs peer-focus:text-white"
            >
              EMAIL
            </label>
          </div>
        </div>

        <div className="btn w-[250px] h-[45px] mt-10 mb-8 md:mb-0 py-6 bg-slate-50 text-black font-semibold text-lg flex justify-center items-center text-center rounded-3xl hover:scale-105 transform ease-in-out duration-500">
          <button>REGISTER NOW</button>
        </div>
      </div>
    </div>
  );
};

export function BasicTextFields({ props, width }) {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "30ch" } }}
      noValidate
      autoComplete="off"
      className=""
    >
      <TextField
        id="standard-basic"
        label={props}
        variant="standard"
        sx={{ Input: { color: "white", width: width } }}
        floatingLabelStyle={{ color: "white" }}
      />
    </Box>
  );
}

export default HomeRegister;
