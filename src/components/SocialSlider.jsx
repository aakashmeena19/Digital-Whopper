import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <>
      {/* Left Floating Social Icons */}
      <div className="fixed top-1/3 flex flex-col gap-6 bg-white p-2 rounded-xl shadow-md z-50">
        <a href="#" className="text-blue-600 hover:scale-110 transition">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="text-pink-600 hover:scale-110 transition">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-800 hover:scale-110 transition">
          <FaLinkedinIn size={20} />
        </a>
        <a href="tel:+911234567890" className="text-black hover:scale-110 transition">
          <FaPhoneAlt size={20} />
        </a>
      </div>

      {/* Right Floating WhatsApp Button */}
<div className="fixed top-1/2 -right-14 z-50 flex -mt-12 items-center -rotate-90">
  <a
    href="https://wa.me/911234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-700 px-3 py-2 rounded-l-xl flex items-center gap-2 hover:scale-110 transition"
  >
    <FaWhatsapp size={30} />
    <span className="writing-vertical-rl text-black text-xl">Let's Talk</span>
  </a>
</div>

    </>
  );
};

export default SocialSidebar;
