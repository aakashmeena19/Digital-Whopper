import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[rgba(225,225,225,1)] py-10" style={{ padding: "2rem" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="md:w-1/2 mt-32 z-10">
          <img
            src="https://digitalwhopper.com/_next/image?url=%2Fcompany.jpeg&w=1920&q=75"
            alt="About Digital Whopper"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-4">
            About <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Digital Whopper, we are not here as another digital marketing agency.
            We are your creative growth partner. Our objective is really simple: to help
            you grow your business online with smart, powerful and best possible digital
            strategies. Whether you are a small startup dreaming of waking or a large
            business looking to scale higher, we have got your back.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
