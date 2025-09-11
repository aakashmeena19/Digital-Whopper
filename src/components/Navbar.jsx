import React, { useState } from "react";
import logo from "../assets/navbaarpng/landing-logo (2).webp";
import { Link } from "react-router-dom";
import heroImg from "../assets/navbaarpng/lines.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <div className="relative bg-gray-200 w-full">
      {/* Background Image (Top Right Only) */}
      <img
        src={heroImg}
        alt="Hero"
        className="absolute -top-[70px] right-0 w-[140vh] h-[140vh] object-contain pointer-events-none select-none animate-popRotateY"
      />

      {/* Navbar Overlay */}
      <nav className="absolute top-0 left-0 w-full px-10 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 ml-20">
          <img src={logo} alt="logo" className="w-22 h-16" />
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
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Right Button */}
        <button className="hidden md:block bg-gradient-to-r from-indigo-500 to-indigo-800 text-white px-6 py-4 rounded-full shadow-md hover:opacity-90 transition mr-2 opacity-80 font-bold">
          Start a Project
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#2b2a29] flex flex-col items-center text-white space-y-4 py-4 md:hidden z-10">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          
          {/* Mobile Services with Dropdown */}
          <div className="w-full text-center">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="hover:text-blue-400 transition flex items-center justify-center w-full"
            >
              Services
              <span className="ml-1 text-xs">{isMobileServicesOpen ? '▲' : '▼'}</span>
            </button>
            
            {/* Mobile Services Dropdown */}
            {isMobileServicesOpen && (
              <div className="mt-2 space-y-2 bg-gray-800 mx-4 py-2 rounded-lg border-l-4 border-blue-400">
                <Link 
                  to="/services/app-development" 
                  className="block hover:text-blue-400 transition text-sm py-1"
                >
                  • App Development
                </Link>
                <Link 
                  to="/services/shopify-development" 
                  className="block hover:text-blue-400 transition text-sm py-1"
                >
                  • Shopify Development
                </Link>
                <Link 
                  to="/services/ecommerce" 
                  className="block hover:text-blue-400 transition text-sm py-1"
                >
                  • E-Commerce
                </Link>
                <Link 
                  to="/services/seo" 
                  className="block hover:text-blue-400 transition text-sm py-1"
                >
                  • SEO
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
          <button className="bg-gradient-to-r from-indigo-400 to-indigo-700 text-white px-7 py-3 rounded-full shadow-md hover:opacity-90 transition">
            Start a Project
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;