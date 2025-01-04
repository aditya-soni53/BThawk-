import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Header from "./component/layout/header/Header";
import Home from "./pages/home/Home"
import Blogs from "./pages/blogs/Blogs";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./component/layout/footer/Footer";
import Blogdetail from "./pages/Blogdetail";
import Privacy from "./pages/privacy/Privacy";
import TermCondition from "./pages/TermCondition";
import Service from "./pages/servicePage/Service";
import Servicedetail from "./pages/Servicedetail";
import Ourcustomer from "./pages/ourCustomers/Ourcustomer";
import "aos/dist/aos.css";
import Aos from "aos";
import Faq from "./pages/Faq";
import Career from "./pages/career/Career";
import Careerdetail from "./pages/career/Careerdetail";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import NotFoundPage from "./pages/notpage/NotFoundPage";

function App() {
  
return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service/:serviceId" element={<Servicedetail />} />  
          <Route path="/ourcustomer" element={<Ourcustomer/>} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Blogs/:blogId" element={<Blogdetail />} />  
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<TermCondition />} />
          <Route path="/faq" element={<Faq />} />        
          <Route path="/career" element={<Career />} />      
          <Route path="/career/:jobSlug/:jobId" element={<Careerdetail />} />  
          <Route path="/comingsoon" element = {<ComingSoon/>}/>
          <Route path="/*" element={<NotFoundPage />} />        
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
