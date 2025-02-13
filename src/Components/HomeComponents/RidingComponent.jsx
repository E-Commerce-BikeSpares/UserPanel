import React from "react";

const RidingGear = () => {
  const images = [
    { name: "Riding Gloves", img: "https://w7.pngwing.com/pngs/182/852/png-transparent-glove-t-shirt-harley-davidson-freewheeler-motorcycle-ziernaht-leather-gloves-leather-fashion-motorcycle-thumbnail.png" },
    { name: "Riding Pants", img: "https://w7.pngwing.com/pngs/776/1003/png-transparent-dainese-store-manchester-pants-motorcycle-clothing-motorcycle-zipper-leather-motorcycle-thumbnail.png" },
    { name: "Riding Boots", img: "https://w7.pngwing.com/pngs/816/860/png-transparent-motorcycle-boot-t-shirt-combat-boot-shoe-product-physical-combat-boots-boots-fashion-boots-accessories-thumbnail.png" },
    { name: "Knee Guard", img: "https://w7.pngwing.com/pngs/112/845/png-transparent-knee-pad-wrist-guard-elbow-pad-skateboard-skateboard-black-wrist-sports-thumbnail.png" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center p-8 bg-gray-900 min-h-screen text-white">
      <div className="flex bg-white p-6 rounded-xl shadow-lg max-w-full sm:max-w-md transition transform duration-300 hover:scale-105">
        <img
          src="https://w7.pngwing.com/pngs/58/397/png-transparent-motorcycle-helmets-jacket-alpinestars-motorcycle-riding-gear-motorcycle-helmets-white-textile-technic-thumbnail.png"
          alt="Riding Jacket 1"
          className="h-48 mx-2 object-contain drop-shadow-lg"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6 w-full max-w-4xl">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-yellow-500 p-5 rounded-xl flex flex-col items-center shadow-lg transform transition duration-300 hover:scale-110 w-40 sm:w-48 hover:bg-yellow-600"
          >
            <img src={item.img} alt={item.name} className="h-24 object-contain drop-shadow-md" />
            <p className="mt-3 text-black font-bold text-center text-sm sm:text-base">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RidingGear;
