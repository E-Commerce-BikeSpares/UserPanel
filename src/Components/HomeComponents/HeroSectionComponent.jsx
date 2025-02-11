// import { Carousel } from "@material-tailwind/react";
// import Slider from "react-slick";
import { DarkVarient, LightVarient, WhiteVarient } from "../ColorComponent/ColorComponent";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// export function CarouselDefault() {
//   return (
//     <Carousel className="rounded-xl">
//       <img src="https://c4.wallpaperflare.com/wallpaper/597/132/967/monochrome-black-background-chains-bicycle-wallpaper-preview.jpg" alt="" />
//       {/* <img
//         src="https://wallpaperaccess.com/full/1329859.jpg"
//         alt="image 1"
//         className="h-full w-full object-cover"
//       /> */}
//       {/* <img
//         src="https://wallpapercave.com/wp/wp7667724.jpg"
//         alt="image 2"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://c4.wallpaperflare.com/wallpaper/597/132/967/monochrome-black-background-chains-bicycle-wallpaper-preview.jpg"
//         alt="image 3"
//         className="h-full w-full object-cover"
//       /> */}
//     </Carousel>
    
//   );
// }

// export {CarouselDefault};



// import React from "react";
// import Slider from "react-slick";

// function AutoPlay() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 5000,
//     autoplaySpeed: 5000,
//     cssEase: "linear"
//   };
//   return (
//     <div className=" mt-14 w-[92%] h-[100vh]">
//       <Slider {...settings}>
//         <div className={`w-[100%]  h-full flex bg-slate-300 justify-center items-center`}>
//         <div>
//         <img 
//          className="w-[100%] h-[90vh] "
//          src="https://4.bp.blogspot.com/-LAMcP2zbjIQ/UHK_iZ5OauI/AAAAAAAAALA/x2Fau3cGGMQ/s1600/Bike+Racing.jpg" alt="" /> 
//         </div>
//        </div>

//         <div className={`w-full  h-full flex bg-slate-300 justify-center items-center`}>
//         <div>
//         <img 
//          className="w-full h-[90vh] "
//          src="https://4.bp.blogspot.com/-LAMcP2zbjIQ/UHK_iZ5OauI/AAAAAAAAALA/x2Fau3cGGMQ/s1600/Bike+Racing.jpg" alt="" /> 
//         </div>
//         </div>

//         <div className={`w-full  h-full flex bg-slate-300 justify-center items-center`}>
//         <div>
//         <img 
//          className="w-full h-[90vh] "
//          src="https://4.bp.blogspot.com/-LAMcP2zbjIQ/UHK_iZ5OauI/AAAAAAAAALA/x2Fau3cGGMQ/s1600/Bike+Racing.jpg" alt="" /> 
//         </div>
// </div>
//         {/* <div>
//           <h3>3</h3>
//         </div> */}
//         {/* <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div> */}
//       </Slider>
//     </div>
//   );
// }

// export {AutoPlay};






const HeroSection = () =>{

return(
  <div className={`w-full mt-5 h-[90vh] bg-${WhiteVarient()} flex justify-center items-center`}>
  <div
    className={`
   w-[90%] h-[95%] rounded-3xl bg-gradient-to-r from-[${LightVarient()}] to-[${DarkVarient()}]`}
  ></div>
  
</div>
   
)

}

export default HeroSection;