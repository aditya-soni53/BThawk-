import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import Header from './component/Header';
import Home from './pages/Home'
import Blogs from './pages/Blogs';
import Footer from './component/Footer';


function App() {

  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/*' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App
