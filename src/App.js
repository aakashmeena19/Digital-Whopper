import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialSlider from "./components/SocialSlider"
import Footer from "./components/Footer"

// Pages
import ServiceSection from "./Pages/ServiceSection"
  import AppDevelopmentSection from "./Pages/AppDevelopmentSection"
  import SeoSection from "./Pages/SeoSection"
import MarketingSection from "./Pages/MarketingSection";
import Portfolio from "./Pages/PortfolioSection"
import About from "./Pages/AboutSection"
import Blog from "./Pages/BlogSection"
import ContactSection from "./Pages/ContactSection";
export default function App() {
  return (
    <Router>
      <Navbar />
      <SocialSlider/>
      <Routes>
           {/* Default load hone par Home dikhega */}
           <Route path="services" element={<ServiceSection/>}/>
              <Route path="services/app-development" element={<AppDevelopmentSection/>}/>
              <Route path="/services/seo" element={<SeoSection/>}/>
           <Route path="/marketing" element={<MarketingSection/>}/>
           <Route path="/portfolio" element={<Portfolio/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/blog" element={<Blog/>}/>
           <Route path="/contact" element={<ContactSection />} />

      </Routes>
      <Footer/>
    </Router>
  );
}
