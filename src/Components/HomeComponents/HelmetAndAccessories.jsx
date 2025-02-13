import { Fragment } from "react";
import { Link } from "react-router-dom";
import fullFaceHelmet from "../../assets/HomePage/Helmet-FullFace.jpg";
import halfFaceHelmet from "../../assets/HomePage/Helmet-HalfFace.jpg";
import goggles from "../../assets/HomePage/Helmet-Goggle.jpg";
import helmetAccessories from "../../assets/HomePage/Helmet-Accessories2.webp";
import communication from "../../assets/HomePage/Hemlet-Communication.webp";
import action from "../../assets/HomePage/Helmet-Action.jpg";

const HelmetsAndAccessories = () => {
  const data = [
    { name: "FULL FACE HELMET", path: "/helmet", image: fullFaceHelmet },
    { name: "HALF FACE HELMET", path: "/helmet", image: halfFaceHelmet },
    { name: "GOGGLES", path: "/helmet", image: goggles },
    { name: "HELMET ACCESSORIES", path: "/helmet", image: helmetAccessories },
    { name: "COMMUNICATION", path: "/helmet", image: communication },
    { name: "ACTION", path: "/helmet", image: action },
  ];

  return (
    <div className="w-full h-full flex flex-col items-start justify-center gap-6 p-8">
      <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-600">Helmet And Accessories</h2>

      <div className="w-full h-full flex flex-wrap items-center gap-4 justify-evenly">
        {data.map((values, index) => (
          <Fragment key={index}>
            <div
              className="relative min-h-[400px] rounded-xl min-w-[160px] bg-cover bg-no-repeat flex items-end grow hover:grow-[100] transition-all duration-500 ease-in-out overflow-hidden group"
              style={{ backgroundImage: `url(${values.image})` }}
            >
              <div className="w-full h-full absolute bg-gradient-to-t from-blue-600/95 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

              <div className="w-full h-[20%] rounded-lg bg-gradient-to-r from-blue-900 via-blue-900 to-blue-800 absolute bottom-0 flex items-center justify-evenly opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="w-[50%] h-full py-2 flex items-center justify-start text-lg font-medium text-white">
                  {values.name}
                </div>

                <Link to={values.path}>
                  <div className="w-[100px] flex items-center justify-center bg-white text-blue-600 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out">
                    Shop Now
                  </div>
                </Link>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default HelmetsAndAccessories;