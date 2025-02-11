import React from "react";
import { FaFilter } from "react-icons/fa6";
import { MdGridView, MdOutlineViewAgenda } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import ReusableCard from "../ReusableComponents/CardComponent";

export const AccesoriesSidebar = () => {
  const location = useLocation();

  const sidebarData = [
    { page: "LOCK SYSTEM", link: "/accessories/bike-protection" },
    { page: "CRASH GUARD", link: "/accessories/bike-protection/crash-guard" },
    { page: "FRAME SLIDER", link: "/accessories/bike-protection/frame-slider" },
    { page: "FLUID GUARDS AND CAP", link: "/accessories/bike-protection/fluid-guards" },
    {
      page: "MASTER CYLINDER GUARD",
      link: "/accessories/bike-protection/master-cylinder-guard",
    },
    {
      page: "ENGINE GUARD AND SKID PLATE",
      link: "/accessories/bike-protection/engine-guard&SKID-PLATE",
    },
    { page: "HEADLIGHT GRILL", link: "/accessories/bike-protection/headlight-grill" },
    { page: "RADIATOR GRILL", link: "/accessories/bike-protection/radiator-grill" },
    { page: "TANK PROTECTORS", link: "/accessories/bike-protection/tank-protectors" },
    { page: "BODY COVER", link: "/accessories/bike-protection/body-cover" },
    { page: "SCREEN PROTECTORS", link: "/accessories/bike-protection/screen-protectors" },
    { page: "HANDLEBAR GUARD", link: "/accessories/bike-protection/handlebar-guard" },
    { page: "STAND AND EXTENDERS", link: "/accessories/bike-protection/stand-and-extenders" },
    { page: "CHINE COVER AND SPROCKET", link: "/accessories/bike-protection/chine-cover" },
  ];

  return (
    <div className="h-[100vh] w-full bg-gradient-to-br from-[#0E4257] to-[#058CA6] flex flex-col text-white gap-4">
      <h2 className="text-2xl">Accessories</h2>
      <div
        className={`w-full h-full flex flex-col items-center justify-between gap-4`}
      >
        {sidebarData.map((value, index) => (
          <Link key={index} to={value.link}>
            <span
              className={`py-2 px-2 ${
                value.link === location.pathname
                  ? "bg-gradient-to-r from-[#058CA6] to-[#0E4257] text-black rounded-lg"
                  : "text-white bg-[#0E4257]"
              } hover:bg-gradient-to-r from-[#058CA6] to-[#0E4257] border-b-2 border-slate-600`}
            >
              {value}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const AccesoriesBodyComp = () => {
  return (
    <div>
      <div>
        <h1>Accessories</h1>
        <div className="">
          <p>
            Filter <FaFilter />
          </p>
          <p>
            View as <MdOutlineViewAgenda /> <MdGridView />
          </p>
        </div>
        <div>
          <ReusableCard />
        </div>
      </div>
    </div>
  );
};

const AccessoriesMainComp = () => {
  return (
    <>
      <header></header>

      <main></main>

      <footer></footer>
    </>
  );
};

export default AccessoriesMainComp;
