import { Route, Routes } from "react-router-dom";
// import { Navbar } from "./NavbarComponent";
// import Home from "./HomeComponent";
// import NavBarcomp from "./NavBarComponent2";
import NotFoundPage from "./PageNotFound";
import Home from "../HomeComponents/HomeMainComponent";
import BikeCardMain from "./SmallCardComponent";
import AccessoriesMainComp from "../Accessories/AccesoriesMain";
import BikeProtectionMain from "../Accessories/BikeProduction";
// import Home from "./HomeComponent";
//import FooterComp from "./FooterComponent";

const ParentRouter = () => {
    return (
    
        <Routes>
          <Route path="*" element={<NotFoundPage/>} />
          {/* <Route index element={<Home/>}/> */}
          <Route index element={<Home/>}/>
          <Route path="/bike" element={<BikeCardMain/>}/>

          {/* <Route path="/accessories" element={<AccessoriesMainComp/>}/>
            <Route index element={<BikeProtectionMain/>}>
              <Route path="/accessories/bike-protection" element={<BikeProtectionMain/>}/>
            </Route>
            <Route>
              <Route path="/accessories/accessories" element={<AccessoriesMainComp/>}/>
            </Route>
          </Route> */}
        </Routes>
    );
  };
  
  export default ParentRouter;