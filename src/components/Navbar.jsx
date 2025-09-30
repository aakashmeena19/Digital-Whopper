import React, { useState } from "react";
import logo from "../assets/navbaarpng/landing-logo (2).webp";
import { Link } from "react-router-dom";
import heroImg from "../assets/navbaarpng/lines.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <div className="relative bg-gray-200 w-full z-20">      
      {/* Navbar Overlay */}
      <nav className="absolute top-0 left-0 w-full px-10 py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:ml-20 ml-1">
          <img src={logo} alt="logo" className="w-24  md:w-22 md:h-16  h-16" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex bg-[#2b2a29] h-14 px-7 py-3 rounded-lg space-x-8 text-white font-medium">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          
          {/* Services with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link to="/services" className="hover:text-blue-400 transition flex items-center">
              Services
              {/* <span className="ml-1 text-xs">▼</span> */}
            </Link>
            
            {/* Desktop Services Dropdown */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-[#2b2a29] rounded-lg shadow-lg py-2 z-20 border border-gray-600">
                <Link 
                  to="/services/app-development" 
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition"
                >
                  App Development
                </Link>
                <Link 
                  to="/services/shopify-development" 
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition"
                >
                  Shopify Development
                </Link>
                <Link 
                  to="/services/ecommerce" 
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition"
                >
                  Ecommerce
                </Link>
                <Link 
                  to="/services/seo" 
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition"
                >
                  SEO
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/marketing" className="hover:text-blue-400 transition">
            Marketing
          </Link>
          <Link to="/portfolio" className="hover:text-blue-400 transition">
            Portfolio
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition">
            About Us
          </Link>
          <Link to="/blog" className="hover:text-blue-400 transition">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
       <button
  className="md:hidden ml-auto z-30 relative text-3xl"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? (
    <span className="inline-block text-white duration-300 hover:rotate-90">
      ✕
    </span>
  ) : (
    '☰'
  )}
</button>


        {/* Right Button */}
        <a href="/Contact">
        <button className="hidden md:block bg-gradient-to-r from-indigo-500 to-indigo-800 text-white px-6 py-4 rounded-full shadow-md hover:opacity-90 transition mr-2 opacity-80 font-bold">
          Start a Project
        </button>
        </a>
        
      </nav>

      {/* Mobile Menu Overlay Background */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-15 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Dropdown with improved slide animation */}
      <div className={`fixed text-2xl top-0 right-0 h-full w-4/5 max-w-sm bg-[#2b2a29] flex flex-col items-left p-8 text-white space-y-6 pt-20 md:hidden z-20 shadow-2xl transform transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        
        <Link 
          to="/" 
          className="hover:text-blue-400 border-b border-white pb-3 "
          onClick={closeMobileMenu}
        >
          Home
        </Link>
        
        {/* Mobile Services with Dropdown */}
        <div className="w-full">
          <div className="flex items-center justify-between border-b border-white pb-3">
            <Link 
              to="/services" 
              className="hover:text-blue-400  flex-1 text-left "
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsMobileServicesOpen(!isMobileServicesOpen);
              }}
              className="ml-2 hover:text-blue-400 transition p-1"
            >
              <span className={`text-lg transform transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>
          </div>
          
          {/* Mobile Services Dropdown with smooth animation */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileServicesOpen ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}>
            <div className="space-y-2 text-left ml-4 p-3 rounded-lg border-l-2 border-blue-400 bg-gray-800 bg-opacity-50">
              <Link 
                to="/services/app-development" 
                className="block hover:text-blue-400 text-lg py-2 hover:ml-2 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                • App Development
              </Link>
              <Link 
                to="/services/shopify-development" 
                className="block hover:text-blue-400  text-lg py-2 hover:ml-2 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                • Shopify Development
              </Link>
              <Link 
                to="/services/ecommerce" 
                className="block hover:text-blue-400  text-lg py-2 hover:ml-2 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                • E-Commerce
              </Link>
              <Link 
                to="/services/seo" 
                className="block hover:text-blue-400  text-lg py-2 hover:ml-2 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                • SEO
              </Link>
            </div>
          </div>
        </div>
        
        <Link 
          to="/marketing" 
          className="hover:text-blue-400  border-b border-white pb-3 "
          onClick={closeMobileMenu}
        >
          Marketing
        </Link>
        <Link 
          to="/portfolio" 
          className="hover:text-blue-400  border-b border-white pb-3 "
          onClick={closeMobileMenu}
        >
          Portfolio
        </Link>
        <Link 
          to="/about" 
          className="hover:text-blue-400  border-b border-white pb-3 "
          onClick={closeMobileMenu}
        >
          About Us
        </Link>
        <Link 
          to="/blog" 
          className="hover:text-blue-400  border-b border-white pb-3 "
          onClick={closeMobileMenu}
        >
          Blog
        </Link>
        <Link 
          to="/contact" 
          className="hover:text-blue-400  border-b border-white pb-3 "
          onClick={closeMobileMenu}
        >
          Contact Us
        </Link>
        <a href="/Contact" onClick={closeMobileMenu}>
          <button className="bg-gradient-to-r from-indigo-400 to-indigo-700 text-white px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-all hover:scale-105 transform mt-4">
            Start a Project
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;