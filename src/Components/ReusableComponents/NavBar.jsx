import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../../assets/NavLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser, FaRegHeart, FaXmark } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { GrCart } from "react-icons/gr";

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
    { page: "ACCESSORIES", path: "/accessories" },
    { page: "BIKE SERVICE", path: "/bikeservice" },
    { page: "OFFERS", path: "/offers" },
    { page: "ABOUT", path: "/about" },
  ];

  const location = useLocation();

  return (
    <div className="w-full fixed top-0 z-50 max-h-20 flex flex-col">
      <nav
        className={`max-sm:py-5 max-sm:gap-1 relative bg-white w-full min-h-20 px-7 max-sm:px-2 flex flex-row gap-5 sm:max-md:gap-16 md:max-lg:gap-0 flex-wrap justify-between ${
          searchValue === false
            ? "max-md:justify-between"
            : "sm:max-md:justify-end"
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
              className="w-[200px] h-fit max-sm:w-[130px] cursor-pointer"
            />
          </Link>
        </div>

        {searchValue === true ? (
          <div className="w-[600px] h-14 max-lg:w-[450px] max-sm:w-full max-lg:h-14 flex items-center justify-center bg-gradient-to-l rounded from-blue-600 to-blue-500">
            <form className="w-full h-full py-2 px-5 max-sm:px-1 flex">
              <input
                className="h-full bg-white rounded-l-xl outline-none px-2 text-xl max-sm:max-w-[70%] min-w-[90%]"
                type="search"
                placeholder="Search..."
              />
              <button className="w-[8%] max-sm:w-[15%] px-1 flex items-center bg-white rounded-r-lg justify-center">
                <ImSearch className="text-2xl font-bold text-blue-600" />
              </button>
            </form>
            <FaXmark
              onClick={handleSearchbarF}
              className="text-3xl mr-5 max-sm:mr-2 text-white hover:scale-110 hover:duration-100 hover:ease-linear"
            />
          </div>
        ) : (
          <div className="w-[900px] hidden font-medium h-full 2xl:flex xl:flex flex-row flex-wrap justify-center items-center gap-5">
            {navMenuList.map((value, index) => (
              <Link key={index} to={value.path}>
                <span
                  className={`px-2 py-1.5 ${
                    value.path === location.pathname
                      ? "border-b-2 border-b-blue-950 text-yellow-500"
                      : "text-black hover:text-yellow-500"
                  } text-base font-medium transition-colors duration-300 ease-in-out`}
                >
                  {value.page}
                </span>
              </Link>
            ))}
          </div>
        )}

        <div className="w-[150px] max-lg:w-[30px] h-full flex flex-row justify-end items-center gap-4">
          <Link>
            <ImSearch
              onClick={handleSearchbarT}
              className="max-xl:hidden text-2xl font-bold text-black hover:text-yellow-400"
            />
          </Link>
          <Link>
            <FaRegHeart className="max-xl:hidden text-2xl text-black hover:text-yellow-400" />
          </Link>
          <Link>
            <GrCart className="max-xl:hidden text-2xl text-black hover:text-yellow-400" />
          </Link>
          <Link>
            <FaCircleUser className="max-xl:hidden text-2xl text-black hover:text-yellow-400" />
          </Link>
          <button onClick={handleBurgerT}>
            <GiHamburgerMenu
              className={`xl:hidden ${
                searchValue === true ? "max-sm:hidden" : "max-sm:flex"
              } font-bold text-2xl text-black hover:text-yellow-400`}
            />
          </button>
        </div>
      </nav>

      {burgerValue === true ? (
        <div className="w-full h-full">
          <div className="w-full h-screen flex flex-col items-start justify-start gap-1 absolute right-0 top-0 bg-gradient-to-b from-gray-50 to-gray-100 shadow-md shadow-gray-800">
            <div className="w-full min-h-20 py-3 text-black bg-gradient-to-b from-gray-50 to-gray-100 font-medium hover:rounded-none flex items-center justify-between px-5">
              <Link to={"/"}>
                <img
                  src={HeaderLogo}
                  alt="logo"
                  className="w-[130px] h-fit cursor-pointer"
                />
              </Link>
              <FaXmark
                onClick={handleBurgerF}
                className="text-3xl text-blue-600 hover:scale-110 hover:duration-100 hover:ease-linear"
              />
            </div>

            <button
              onClick={handleSearchbarT}
              className="w-full h-[50px] px-5 py-2 text-black font-medium text-left hover:bg-yellow-400 hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              SEARCH
            </button>

            {navMenuList.map((value, index) => (
              <Link key={index} to={value.path} className="w-full">
                <div
                  className={`w-full text-left h-[50px] px-5 py-3 text-black ${
                    value.path === location.pathname
                      ? "border-b-2 border-b-blue-600"
                      : "hover:bg-yellow-400 hover:text-blue-600"
                  } font-medium transition-colors duration-300 ease-in-out`}
                >
                  {value.page}
                </div>
              </Link>
            ))}

            <Link to={"/cart"} className="w-full">
              <div
                className={`w-full h-[50px] px-5 py-3 text-black ${
                  "/cart" === location.pathname
                    ? "border-b-2 border-b-blue-600"
                    : "hover:bg-yellow-400 hover:text-blue-600"
                } font-medium transition-colors duration-300 ease-in-out`}
              >
                CART
              </div>
            </Link>

            <Link to={"/likes"} className="w-full">
              <div
                className={`w-full h-[50px] px-5 py-3 text-black ${
                  "/likes" === location.pathname
                    ? "border-b-2 border-b-blue-600"
                    : "hover:bg-yellow-400 hover:text-blue-600"
                } font-medium transition-colors duration-300 ease-in-out`}
              >
                LIKES
              </div>
            </Link>

            <Link to={"/"} className="w-full">
              <div
                className={`w-full h-[50px] px-5 py-3 text-black font-medium flex items-center justify-start gap-3 ${
                  "/" === location.pathname
                    ? ""
                    : "hover:bg-yellow-400 hover:text-blue-600"
                } transition-colors duration-300 ease-in-out`}
              >
                {/* <IoMdExit className="text-2xl" /> */}
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