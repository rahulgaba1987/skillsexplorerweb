import { BrowserRouter, Route, Routes} from "react-router-dom";


import Courses from "./pages/Courses";
import PageNotFound from "./pages/PageNotFound";
import Videos from "./pages/Videos";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import CustomNavBar from "./pages/CustomNavBar";
import Footer from "./comp/Footer";
import "./css/common.css";
function App() {
  return (
    <>
       <div className="app">
      <BrowserRouter >
      <CustomNavBar/>
        <Routes>
          <Route   path="/" element={<Home/>}/>
          <Route  path="/courses" element={<Courses/>}/>
         
          <Route   path="/videos" element={<Videos/>}/>
          <Route   path="/about" element={<AboutUs/>}/>
          <Route    path="/contact" element={<ContactUs/>}/>
          <Route   path="*" element={<PageNotFound/>}/>
        </Routes>
       
      </BrowserRouter>
      <Footer className="footer"/>
      </div>
    </>
  );
}

export default App;
