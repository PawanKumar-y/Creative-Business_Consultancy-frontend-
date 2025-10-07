import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Navbar.jsx';
import About from './About.jsx'; // example page
import LandingPage from './Landingpage.jsx';   // renamed correctly
import Services from './ServicePage.jsx'; // example page
import Industries from './IndustriesPage.jsx'; 
import Products from './ProductPage.jsx';
import Contact from './ContactPage.jsx';
import Socials from './ContactandTerms.jsx';

function App() {
  return (
   <Router>
      <Navbar />   

      <div className="page-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
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
