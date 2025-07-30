
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './Style.css';
import Home from './pages/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Aboutus from './pages/About';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Appointment from './pages/Appointment';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

AOS.init();


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={ <Aboutus />} ></Route> 
        <Route path="/services" element={<Service />} ></Route>
        <Route path="/gallery" element={<Gallery />} ></Route>
        <Route path="/appointment" element={<Appointment />} ></Route>
        <Route path="/testimonials" element={<Testimonials />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
