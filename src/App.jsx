import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import Blogdetail from "./pages/Blogdetail";
import Privacy from "./pages/Privacy";
import TermCondition from "./pages/TermCondition";
import Service from "./pages/Service";
import Servicedetail from "./pages/Servicedetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Blogs/:blogId" element={<Blogdetail />} />  
          <Route path="/Servicedetail" element={<Servicedetail />} />
          <Route path="/Service/:serviceId" element={<Servicedetail />} />  
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<TermCondition />} />
          <Route path="/*" element={<Home />} />        
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
