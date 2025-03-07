import { BrowserRouter, Route, Routes} from "react-router-dom";


import Courses from "./pages/Courses";
import PageNotFound from "./pages/PageNotFound";
import CustomNavBar from "./pages/CustomNavBar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<CustomNavBar/>}/>
          <Route  path="/courses" element={<Courses/>}/>
          <Route  path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
