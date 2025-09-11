import React from "react";
import Img1 from "../assets/Portfoliopng/Bitmap.png";
import Img2 from "../assets/Portfoliopng/Bitmap (1).png";
import Img3 from "../assets/Portfoliopng/Bitmap (2).png";
import Img4 from "../assets/Portfoliopng/Bitmap (3).png";
import Img5 from "../assets/Portfoliopng/Bitmap (4).png";

const PortfolioSection = () => {
  return (
    <div className="w-full bg-[rgba(225,225,225,1)] py-12 px-4">
      {/* Title */}
      <h1 className="text-center pt-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
        Portfolio
      </h1>
      <p className="text-center text-base sm:text-lg md:text-xl pt-6 px-2">
        Agency provides a full service range including technical skills,
      </p>
      <p className="text-center text-base sm:text-lg md:text-xl">
        design, business understanding.
      </p>

      {/* Filter Menu */}
      <div className="flex justify-center flex-wrap gap-4 text-sm md:text-base font-medium mt-16">
        <button className="hover:text-orange-500">Show All</button>
        <button className="hover:text-orange-500">Design</button>
        <button className="hover:text-orange-500">Branding</button>
        <button className="hover:text-orange-500">Illustration</button>
        <button className="hover:text-orange-500">Motion</button>
      </div>

      {/* Top Big Card */}
      <div className="max-w-6xl mx-auto mt-12 mb-8">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={Img1}
            alt="KeyBoard"
            className="w-full h-64 sm:h-96 md:h-[600px] lg:h-[700px] object-cover"
          />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
            <span className="bg-gray-900 text-white text-sm sm:text-base md:text-xl px-3 sm:px-5 py-1 sm:py-2 rounded-full">
              Branding
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mt-3 text-gray-900">
              KeyBoard
            </h2>
          </div>
        </div>
      </div>

      {/* 2 Small Cards Row 1 */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6 mb-6">
        {/* Card 1 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img src={Img2} alt="SOFA" className="w-full h-64 sm:h-96 object-cover" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
            <span className="bg-gray-800 text-white text-sm sm:text-base md:text-xl px-3 sm:px-5 py-1 sm:py-2 rounded-full">
              Design
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl text-gray-800 font-bold mt-3">
              SOFA
            </h2>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={Img3}
            alt="Work Media"
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
            <span className="bg-gray-800 text-white text-sm sm:text-base md:text-xl px-3 sm:px-5 py-1 sm:py-2 rounded-full">
              Illustration
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl text-gray-800 font-bold mt-3">
              Work Media
            </h2>
          </div>
        </div>
      </div>

      {/* 2 Small Cards Row 2 */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
        {/* Card 3 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img src={Img4} alt="DDDone" className="w-full h-64 sm:h-96 object-cover" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
            <span className="bg-gray-800 text-white text-sm sm:text-base md:text-xl px-3 sm:px-5 py-1 sm:py-2 rounded-full">
              Motion
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl text-gray-800 font-bold mt-3">
              DDDone
            </h2>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img src={Img5} alt="HandP" className="w-full h-64 sm:h-96 object-cover" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
            <span className="bg-gray-800 text-white text-sm sm:text-base md:text-xl px-3 sm:px-5 py-1 sm:py-2 rounded-full">
              Branding
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl text-gray-800 font-bold mt-3">
              HandP
            </h2>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2 sm:space-x-3">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border rounded-md hover:bg-orange-500 hover:text-white transition text-sm sm:text-base"
          >
            {num}
          </button>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="max-w-7xl mx-auto bg-indigo-600 text-white rounded-2xl mt-16 p-6 sm:p-10 grid md:grid-cols-2 gap-6 items-center">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Help To Build Your Dream Project
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6">
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </p>
          <button className="bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-900 transition">
            Contact Now
          </button>
        </div>
        {/* Right Side */}
        <div className="flex justify-center mt-6 md:mt-0">
          <img
            src="https://digitalwhopper.com/_next/image?url=%2Fpic.png&w=640&q=80"
            alt="Person"
            className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;