import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AccessoriesSection = () => {
  const data = [
    { image: "https://wallpapercave.com/wp/wp3852708.jpg", name: "Exhaust" },
    {
      image:
        "https://www.ctopreviews.com/wp-content/uploads/2020/09/Motorcycle-Fog-Light.jpg",
      name: "Fog Light",
    },
    {
      image:
        "https://evotech-performance.com/cdn/shop/products/EVOTECH-2022-Ducati-Panigale-V4S-Tail-Tidy-L1190823_80300aed-e7c9-4540-8d45-cf79d88d1c5a_grande.jpg",
      name: "Tail Tidy",
    },
  ];

  return (
    <div className="w-full h-full 2xl:h-[500px] p-8 xl:h-[500px] lg:h-[800px] md:h-[1150px] sm:h-[1150px] flex flex-col items-center flex-wrap justify-center">
      <h1 className="w-full h-fit py-5 text-left text-3xl font-bold text-gray-600">
        Accessories
      </h1>
      <div className="w-full h-fit flex flex-row items-center flex-wrap justify-evenly gap-12">
        {data.map((value, index) => (
          <Fragment key={index}>
            <Link to={"/accessories"}>
              <div className="max-sm:w-[360px] hover:scale-105 transition-transform duration-300 ease-in-out relative w-[450px] min-h-[300px] flex flex-col justify-center items-center group">
                <img
                  src={value.image}
                  alt={value.name}
                  className="min-h-[300px] max-sm:w-fit max-sm:h-[200px] bg-gray-800 w-full rounded-lg absolute top-0 sm:max-2xl:right-0 sm:max-2xl:left-0 bottom-0 object-cover"
                />

                <div className="min-w-[80px] top-4 left-4 py-4 flex flex-col items-center justify-evenly absolute bg-gradient-to-r from-blue-600 to-blue-500 outline-none rounded-xl text-white hover:scale-110 transition-transform duration-300 ease-in-out">
                  <p>Upto</p>
                  <p>10%</p>
                  <p>Offer</p>
                </div>

                <h3 className="absolute max-sm:w-[300px] bottom-0 text-white text-center text-xl font-semibold py-5 w-full min-h-[20%] bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                  {value.name}
                </h3>
              </div>
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesSection;