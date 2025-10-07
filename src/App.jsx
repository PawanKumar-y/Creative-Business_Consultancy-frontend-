import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Navbar';
import About from './About'; // example page
import Landing from './LandingPage';   // renamed correctly
import Services from './ServicePage'; // example page
import Industries from './IndustriesPage'; 
import Products from './ProductPage';
import Contact from './ContactPage';
import Socials from './ContactandTerms';

function App() {
  return (
   <Router>
      <Navbar />   

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<Products />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Socials/>
      </div>
    </Router>
  );
}

export default App;
