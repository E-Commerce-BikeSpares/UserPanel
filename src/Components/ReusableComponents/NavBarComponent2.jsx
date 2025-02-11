// import { CardMedia } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../images/Header Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser, FaRegHeart, FaXmark } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { GrCart } from "react-icons/gr";
import { IoMdExit } from "react-icons/io";

const NavBarcomp = () => {
  const [burgerValue, setBurgerValue] = useState(false);

  const [searchValue, setSearchValue] = useState(false);

  const handleBurgerF = () => setBurgerValue(false);

  const handleBurgerT = () => setBurgerValue(true);

  const handleSearchbarT = () => {
    setBurgerValue(false);
    setSearchValue(true);
  };
  const handleSearchbarF = () => setSearchValue(false);

  const navMenuList = [
    { page: "HOME", path: "/" },
    { page: "SPARES BY BIKE", path: "/spares" },
    { page: "LUGGAGE", path: "/luggage" },
    { page: "ACCESORIES", path: "/accesories" },
    { page: "BIKE SERVICE", path: "/bikeservice" },
    { page: "OFFERS", path: "/offers" },
    { page: "ABOUT", path: "/about" },
  ];

  const location = useLocation();

  return (
    <div className="w-full fixed top-0 z-20 max-h-20  flex flex-col ">
      <nav
        className={`max-sm:py-5 max-sm:gap-1 relative bg-white w-full min-h-20 px-7 max-sm:px-2 flex flex-row gap-5 sm:max-md:gap-16 md:max-lg:gap-0 flex-wrap justify-between    ${
          searchValue === false
            ? "max-md:justify-between"
            : " sm:max-md:justify-end"
        } items-center shadow-md shadow-gray-800`}
      >
        <div
          className={`w-[200px] ${
            searchValue === true ? "max-md:hidden" : "max-md:flex"
          } max-sm:w-[130px] h-full flex justify-center items-center`}
        >
          <Link to={"/"}>
            <img
              src={HeaderLogo}
              alt="logo"
              className="w-[200px] h-fit max-sm:w-[130px]  cursor-pointer"
            />
          </Link>
        </div>

        {searchValue === true ? (
          <div className="w-[600px] h-14 max-lg:w-[450px] max-sm:w-full max-lg:h-14 flex items-center justify-center bg-gradient-to-l rounded from-[#058CA6]  to-[#0E4257] ">
            <form className="w-full h-full py-2 px-5 max-sm:px-1 flex">
              <input
                className="h-full bg-white rounded-l-xl outline-none px-2 text-xl max-sm:max-w-[70%] min-w-[90%]"
                type="search"
              />
              <button className="w-[8%] max-sm:w-[15%] px-1 flex items-center bg-white rounded-r-lg  justify-center">
                <ImSearch className=" text-2xl font-bold text-black" />
              </button>
            </form>
            <FaXmark
              onClick={handleSearchbarF}
              className="text-3xl mr-5 max-sm:mr-2  text-left text-white hover:scale-110 hover:duration-100 hover:ease-linear"
            />
          </div>
        ) : (
          <div className="w-[900px] hidden  font-medium h-full 2xl:flex xl:flex flex-row flex-wrap justify-center items-center gap-5">
            {navMenuList.map((value, index) => (
              <Link key={index} to={value.path}>
                <span
                  className={`px-2 py-1.5 ${
                    value.path === location.pathname
                      ? "rounded-md bg-gradient-to-r from-[#058CA6] to-[#0E4257] text-white border-b-[3px] border-b-[#0E4257]"
                      : " text-[#0E4257]"
                  }
              text-black font-medium hover:rounded-none hover:border-solid hover:border-b-[3px] hover:border-b-[#0E4257] `}
                >
                  {value.page}
                </span>
              </Link>
            ))}
          </div>
        )}

        <div className="w-[150px] max-lg:w-[30px]  h-full flex flex-row justify-end items-center gap-4">
          <Link>
            <ImSearch
              onClick={handleSearchbarT}
              className="max-xl:hidden text-2xl font-bold text-blue-950"
            />
          </Link>
          <Link>
            <FaRegHeart className="max-xl:hidden text-2xl text-blue-950" />
          </Link>
          <Link>
            <GrCart className="max-xl:hidden text-2xl text-blue-950" />
          </Link>
          <Link>
            <FaCircleUser className="max-xl:hidden text-2xl text-blue-950" />
          </Link>
          <button onClick={handleBurgerT}>
            <GiHamburgerMenu
              className={`xl:hidden ${
                searchValue === true ? "max-sm:hidden" : "max-sm:flex"
              } font-bold text-2xl text-blue-950`}
            />
          </button>
        </div>
      </nav>

      {burgerValue === true ? (
        <div className="w-full h-full ">
          <div className="w-[250px] h-screen flex flex-col items-center justify-start gap-1 absolute right-0 top-0 bg-[#0E4257] shadow-md shadow-gray-800">
            <div
              className={`w-[250px] min-h-20  py-3 text-white bg-white
                font-medium hover:rounded-none flex items-center justify-start `}
            >
              <FaXmark
                onClick={handleBurgerF}
                className="text-3xl ml-3 text-black hover:scale-110 hover:duration-100 hover:ease-linear"
              />
            </div>

            <button
              onClick={handleSearchbarT}
              className={`w-[250px] h-[50px] px-3 py-2 text-white 
              font-medium text-left hover:duration-100 hover:ease-in-out hover:border-solid hover:border-b-[3px] hover:border-b-white `}
            >
              SEARCH
            </button>

            {navMenuList.map((value, index) => (
              <Link key={index} to={value.path}>
                <div
                  className={`w-[250px] h-[50px] px-3 py-3 text-white ${
                    value.path === location.pathname
                      ? " bg-gradient-to-r from-[#058CA6]  to-[#0E4257] border-b-[3px] border-b-[#0E4257]"
                      : " text-[#0E4257]"
                  }
               font-medium hover:duration-100 hover:ease-in-out hover:rounded-none hover:border-solid hover:border-b-[3px] hover:border-b-white `}
                >
                  {value.page}
                </div>
              </Link>
            ))}
            <Link>
              <div
                className={`w-[250px] h-[50px] px-3 py-3 text-white ${
                  "/cart" === location.pathname
                    ? " bg-gradient-to-r from-[#058CA6]  to-[#0E4257] border-b-[3px] border-b-[#0E4257]"
                    : " text-[#0E4257]"
                }
             font-medium hover:duration-100 hover:ease-in-out hover:rounded-none hover:border-solid hover:border-b-[3px] hover:border-b-white `}
              >
                CART
              </div>
            </Link>

            <Link to={"/likes"}>
              <div
                className={`w-[250px] h-[50px] px-3 py-3 text-white ${
                  "/likes" === location.pathname
                    ? " bg-gradient-to-r from-[#058CA6]  to-[#0E4257] border-b-[3px] border-b-[#0E4257]"
                    : " text-[#0E4257]"
                }
              text-black font-medium hover:rounded-none hover:duration-100 hover:ease-in-out hover:border-solid hover:border-b-[3px] hover:border-b-white `}
              >
                LIKES
              </div>
            </Link>

            <Link to={"/"}>
              <div
                className={`w-[250px] h-[50px] px-3 py-3 text-white 
                font-medium flex items-center justify-start gap-3 hover:duration-75 hover:ease-in-out hover:border-solid hover:border-b-[3px] hover:border-b-white `}
              >
                <IoMdExit className="text-2xl text-white" />
                LOGOUT
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBarcomp;
