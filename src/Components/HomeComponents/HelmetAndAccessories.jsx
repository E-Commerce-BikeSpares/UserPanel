import { Fragment } from "react";
import { Link } from "react-router-dom";
import { BlackVarient, DarkVarient, LightVarient, WhiteVarient } from "../ColorComponent/ColorComponent";

const HelmetsAndAccessories = () => {
    // const img='https://wallpapercave.com/wp/wp7610068.jpg';
  
    const data = [
      { name: "FULL FACE HELMET", path: "/helmet" },
      { name: "HALF FACE HELMET", path: "/helmet" },
      { name: "GOGGLES", path: "/helmet" },
      { name: "HELMET ACCESSORIES", path: "/helmet" },
      { name: "COMMUCATION", path: "/helmet" },
      { name: "ACTION", path: "/helmet" },
    ];
  
    return (
      <div className="w-full h-full flex flex-col items-start justify-center gap-6 mt-20">
        <h2 className="text-2xl px-3">Helmet And Accessories</h2>
        <div className="px-3 w-full h-full flex-wrap flex items-center gap-3 justify-evenly">
          {data.map((values, index) => (
            <Fragment key={index}>
              <div className="relative min-h-[400px] rounded-xl min-w-[160px] bg-[url('https://wallpapercave.com/wp/wp7610068.jpg')] bg-cover bg-no-repeat flex items-end grow hover:grow-[100] hover:duration-1000  hover:ease-in-out ">
                <div className="w-full bottom-0 h-full absolute opacity-0 hover:opacity-100 hover:duration-1000  hover:ease-in-out">
                  <div className={`w-full h-[20%] rounded-lg  bg-gradient-to-r to-[${LightVarient()}] from-[${DarkVarient()}] absolute bottom-0 flex items-center justify-evenly`}>
                    <div className={` w-[50%] h-full py-2 rounded flex items-center justify-start text-lg font-medium text-${WhiteVarient()}`}>
                      {values.name}
                    </div>
                    <Link to={values.path}>
                      <div className={`w-[100px] flex items-center justify-center hover:scale-110 hover:duration-300 hover:ease-in-out bg-${WhiteVarient()} text-[${DarkVarient()}] py-2 rounded-lg hover:shadow-md hover:shadow-${BlackVarient()}`}>
                        Shop Now
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  };
  

export default HelmetsAndAccessories;  