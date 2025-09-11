import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = () => {
    if (email.trim() && email.includes('@')) {
      // Handle newsletter subscription
      console.log("Newsletter subscription:", email);
      // You can add your newsletter subscription logic here
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <footer className="bg-[rgba(225,225,225,1)] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info with Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://digitalwhopper.com/_next/image?url=%2Fblacklogo.png&w=256&q=75"
                alt="Digital Whopper Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg font-semibold">Digital Whopper</span>
            </div>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue 
              interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-blue-600 transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
              <a href="#" className="hover:text-green-600 transition-colors"><FaWhatsapp /></a>
              <a href="#" className="hover:text-pink-600 transition-colors"><FaInstagram /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Resume</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Project</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">Contact</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-sm">+20 11 43 63 73 41</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-sm">fawzisayed1209@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Website:</p>
                <p className="text-sm">fawziuiux.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">Get the latest information</h3>
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-gray-300 pt-6">
          © 2025 Digital Whopper. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;