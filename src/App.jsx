import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import NotFoundPage from "./Components/ReusableComponents/PageNotFound";

const AppComponent = () => {
    return (
        <Routes>
          <Route path="*" element={<NotFoundPage/>} />
          <Route index element={<Home/>}/>
          {/* <Route path="/bike" element={<BikeCardMain/>}/> */}
        </Routes>
    );
  };
  
  export default AppComponent;