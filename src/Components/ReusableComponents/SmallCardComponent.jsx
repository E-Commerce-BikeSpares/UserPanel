import React from "react";


const CardDesign = ({ value }) => {
  const { name, brand, bike } = value || {};

  return (
    <div className="w-[300px] min-h-auto bg-gradient-to-tl from-[#0E4257] to-[#058CA6]  flex flex-col justify-center items-center gap-4 p-4  shadow-lg shadow-slate-500 rounded-[30px]">
      <div className="w-full h-auto flex justify-between items-center font-extrabold text-2xl " style={{textShadow: "0px 0px 5px #FFFFFF"}}>
        <img src={brand} alt="bikeImage" className="w-16 h-10"/>
        <p className="text-black">{name}</p>
      </div>
      <div>
        <img src={bike} alt="" className="w-full h-[200px] object-cover rounded-[30px]"/>
      </div>
    </div>
  );
};

const BikeCardMain = () => {
  const bikeData = [
    {
      name: "135 DTSI",
      brand: 'https://automarken-liste.com/wp-content/uploads/2021/02/Bajaj-Auto-Logo-1536x1152.png',
      bike: 'https://moto.zombdrive.com/images1600_/bajaj-discover-135-dtsi-2010-1.jpg',
    },
    {
      name: "135 DTSI",
      brand: 'https://automarken-liste.com/wp-content/uploads/2021/02/Bajaj-Auto-Logo-1536x1152.png',
      bike: 'https://moto.zombdrive.com/images1600_/bajaj-discover-135-dtsi-2010-1.jpg',
    },
    {
      name: "135 DTSI",
      brand: 'https://automarken-liste.com/wp-content/uploads/2021/02/Bajaj-Auto-Logo-1536x1152.png',
      bike: 'https://moto.zombdrive.com/images1600_/bajaj-discover-135-dtsi-2010-1.jpg',
    },
  ];

  return (
    <div className="w-full min-h-auto flex flex-wrap gap-5 justify-center items-start p-5">
      {bikeData.map((value, index) => (
        <CardDesign key={index} value={value} />
      ))}
    </div>
  );
};

export default BikeCardMain;
