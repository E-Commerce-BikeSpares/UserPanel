import { Fragment } from "react"
import { Link } from "react-router-dom";





const SearchByBike =()=>{

const data=[
"https://e0.pxfuel.com/wallpapers/293/192/desktop-wallpaper-yamaha-logo-yamaha-emblem.jpg",
"https://logodix.com/logo/469956.jpg",
"https://static.vecteezy.com/system/resources/previews/020/336/144/original/tvs-logo-tvs-icon-transparent-png-free-vector.jpg",
"https://getwallpapers.com/wallpaper/full/5/0/9/558667.jpg",
"https://www.pixelstalk.net/wp-content/uploads/2016/05/Honda-Logo-Wallpapers-Free-Download.jpg",
"https://motorcycle-logos.com/wp-content/uploads/2016/11/Hero-logo-768x866.png",
]    


return(
<div className="w-full h-full mt-20 flex flex-col justify-center items-start gap-1">
<h2 className="text-2xl font-medium px-12">Search By Brand</h2>
<div className="w-full h-full flex-wrap flex justify-evenly items-center ">
{
data.map((value,index)=>(
<Fragment key={index}>   
<Link to={"/bike"}>
<img 
className="w-[200px] h-[150px] mt-6 rounded-3xl hover:scale-105 hover:duration-300 hover:ease-in-out"
src={value} alt="Bike Logo" />
</Link>
</Fragment> 
))}
</div>    
</div>
)}


export default SearchByBike;