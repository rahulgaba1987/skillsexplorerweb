import { BrowserRouter, Route, Routes} from "react-router-dom";


import Courses from "./pages/Courses";
import PageNotFound from "./pages/PageNotFound";
import CustomNavBar from "./pages/CustomNavBar";
import Videos from "./pages/Videos";
import AboutUs from "./pages/AboutUs";
import AboutUs from "./pages/ContactUs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<CustomNavBar/>}/>
          <Route  path="/courses" element={<Courses/>}/>
         
          <Route  path="/videos" element={<Videos/>}/>
          <Route  path="/about" element={<AboutUs/>}/>
          <Route  path="/contact" element={<ContactUs/>}/>
          <Route  path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
