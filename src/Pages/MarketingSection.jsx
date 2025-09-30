import React from "react";
import Img1 from "../assets/markingpng/Rectangle 29.png"
import AIMG1 from "../assets/markingpng/Screenshot 2025-09-01 160533.png"
import AIMG2 from "../assets/markingpng/Screenshot 2025-09-01 160549.png"
import AIMG3 from "../assets/markingpng/Screenshot 2025-09-01 160607.png"
import WorkExperiences from "./WorkExperience";


const WorkExperience = () => (
  <section className="bg-[rgba(225,225,225,1)] py-16 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Work Experience</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Our team has years of experience delivering exceptional results.
      </p>
    </div>
  </section>
);

const MarketingSection = () => {
  return (
    <div className="w-full font-sans pt-[60px] sm:pt-[80px] lg:pt-[100px] bg-[rgba(225,225,225,1)]">
      {/* Section 1 - Hero */}
      <section className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center bg-[rgba(207,207,207,255)] shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 relative">
          {/* Left Content */}
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Increase Your Marketing ROI & Sales With</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
              Ready to take <br />
              <span className="text-orange-500">our business</span> <br />
              to the next level?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-4">
              Are you pouring money into ad campaigns, boosting posts, and following every "growth hack" but still not seeing real, measurable returns? We can feel your pain. There are hundreds of businesses like yours that are burning all their budget on digital marketing that doesn't convert. Here's the truth: Traditional marketing is broken. You don't need "more traffic." You need better traffic, the kind that converts. And that's where a performance marketing agency can help you.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <img 
                src="https://digitalwhopper.com/d4e01d96bc838f08c10c2fb6560948d3881ebdec.png" 
                alt="rating" 
                className="w-16 sm:w-20 rounded-full" 
              />
              <p className="text-xs sm:text-sm text-gray-700">5.0 Rating (200+ Reviews)</p>
            </div>
          </div>

          {/* Right Images - Layered */}
          <div className="relative h-64 sm:h-72 lg:h-80 w-full mt-8 lg:mt-0">
            {/* Background Image 1 - Most behind */}
            <img 
              src="https://digitalwhopper.com/Rectangle%2028%20(1).png" 
              alt="background image 1" 
              className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-xl shadow-lg object-cover" 
            />
            
            {/* Background Image 2 - Middle layer */}
            <img 
              src="https://digitalwhopper.com/Rectangle%2028.png" 
              alt="background image 2" 
              className="absolute top-8 left-8 sm:top-12 sm:left-12 lg:top-16 lg:left-16 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-xl shadow-lg object-cover" 
            />
            
            {/* Main Image - Front */}
            <img 
              src="https://digitalwhopper.com/Rectangle%2029.png" 
              alt="hero" 
              className="absolute top-12 left-12 sm:top-16 sm:left-16 lg:top-24 lg:left-24 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-xl shadow-xl object-cover z-10" 
            />
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center p-8 sm:p-20 lg:p-40">
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold">200+</h3>
            <p className="text-xl sm:text-2xl p-4 sm:p-6">We're a family</p>
            <p className="text-sm sm:text-base">Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced.</p>
          </div>
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold">99%</h3>
            <p className="text-xl sm:text-2xl p-4 sm:p-6">Graphic Design</p>
            <p className="text-sm sm:text-base">Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.</p>
          </div>
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold">1.5M+</h3>
            <p className="text-xl sm:text-2xl p-4 sm:p-6">Digital Marketing</p>
            <p className="text-sm sm:text-base">Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh.</p>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <div className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://digitalwhopper.com/Paper-Texture.svg.png')" }}>
        
        <div className="container mx-auto px-4 md:px-4 py-6 md:py-8 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-orange-400 text-sm md:text-lg lg:text-xl font-semibold">Our Mission</h2>
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Boost your with<br />
                  your business.
                </h1>
              </div>

              <p className="text-blue-100 text-xs md:text-base lg:text-lg leading-relaxed max-w-xs md:max-w-md">
                He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4 mt-4 md:mt-8">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full mt-1 md:mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100 text-xs md:text-sm lg:text-base">Moonlight newspaper up its enjoyment</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full mt-1 md:mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100 text-xs md:text-sm lg:text-base">Rooms oh fully taken by worse.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full mt-1 md:mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100 text-xs md:text-sm lg:text-base">She new course gets living.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full mt-1 md:mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100 text-xs md:text-sm lg:text-base">Perceived end certainly day.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full mt-1 md:mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100 text-xs md:text-sm lg:text-base">She new course gets living.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full mt-1 md:mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100 text-xs md:text-sm lg:text-base">Preference any astonished unreserved Mrs.</span>
                </div>
              </div>
            </div>

            {/* Right Content - Images and Stats */}
            <div className="relative order-1 lg:order-2">
              {/* Main Team Image Card */}
              <div className="relative mb-4 md:mb-6 lg:mb-8 mx-auto lg:mx-0 lg:-ml-0 xl:ml-8">
<div
  className="bg-gray-400 rounded-xl md:rounded-2xl lg:rounded-3xl 
  w-56 h-60    /* mobile ke liye thoda bada */
  sm:max-w-sm md:max-w-md lg:w-64 xl:w-80 2xl:w-96 
  sm:h-56 md:h-64 lg:h-64 xl:h-80 2xl:h-96 
  overflow-hidden mx-0 lg:mx-auto flex-shrink-0"
>
                  <img 
                    src="https://digitalwhopper.com/Rectangle%2032.png" 
                    alt="Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Team Member Indicator */}
                <div className="absolute top-2 md:top-3 lg:top-4 right-2 sm:right-4 md:right-8 lg:right-16 xl:right-20 2xl:right-72">
                  <div>
                    <img src="https://digitalwhopper.com/Frame%20219.png" className="w-16 sm:w-20 md:w-24 lg:w-24 xl:w-28 2xl:w-full h-6 sm:h-8 md:h-10 lg:h-10 xl:h-12 2xl:h-12 object-cover rounded-md lg:rounded-lg" alt="Team Member Indicator" />
                  </div>
                </div>
              </div>

              {/* Stats and Office Image */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 items-center sm:items-start justify-center lg:justify-start">
                {/* Stats Card */}
                <div className="flex flex-row gap-4 text-center sm:text-left">
                  <div className="border-r border-white p-4">
                    <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">10k</div>
                    <div className="text-blue-200 text-xs md:text-sm lg:text-base">Great conversations <br/> per month</div>
                  </div>
                  <div>
                    <div className="text-xl mt-8 sm:mt-12 md:mt-16 lg:mt-16 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">95+</div>
                    <div className="text-blue-200 text-xs md:text-sm lg:text-base">Project <br/>Complete</div>
                  </div>
                </div>

                {/* Office Image */}
                <div className="flex-1">
                  <div
  className="bg-gray-400 rounded-xl md:rounded-2xl 
    w-40 h-40          /* mobile thodi badi */
    sm:w-36 sm:h-36    /* tablet thodi chhoti */
    md:w-40 md:h-40    /* medium screen */
    lg:w-40 lg:h-40    /* large screen */
    xl:w-48 xl:h-48    /* extra large */
    2xl:w-56 2xl:h-64  /* 2xl */
    overflow-hidden 
    ml-auto mr-0 lg:mx-auto"  /* mobile right, desktop center */
>
                    <img 
                      src="https://digitalwhopper.com/Rectangle%2034.png" 
                      alt="Office" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Team */}
      <section className="bg-[rgba(225,225,225,1)] py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 sm:mb-10">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="rounded-xl p-4 sm:p-6 text-left">
              <img
                src="https://digitalwhopper.com/Rectangle%2029.png"
                alt="team1"
                className="w-full h-auto mx-auto object-cover rounded-lg"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mt-4">Esther Howard</h3>
              <p className="text-sm sm:text-base text-gray-800">Founder & CEO</p>
            </div>
            <div className="rounded-xl p-4 sm:p-6 text-left">
              <img
                src="https://digitalwhopper.com/Rectangle%2030....png"
                alt="team2"
                className="w-full h-auto mx-auto object-cover rounded-lg"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mt-4">Cameron Williamson</h3>
              <p className="text-sm sm:text-base text-gray-800">Marketing Head</p>
            </div>
            <div className="rounded-xl p-4 sm:p-6 text-left sm:col-span-2 lg:col-span-1">
              <img
                src="https://digitalwhopper.com/Rectangle%2031...png"
                alt="team3"
                className="w-full h-auto mx-auto object-cover rounded-lg"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mt-4">Liam Cooper</h3>
              <p className="text-sm sm:text-base text-gray-800">Project Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Workflow */}
      <section className="bg-[rgba(225,225,225,1)] py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="border-2 border-black inline-block px-3 sm:px-4 py-2 my-4 sm:my-6 rounded-md text-sm sm:text-base">
            Product Features
          </h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold">
            Streamline tasks with <br/>optimized workflows
          </h2>
          <p className="text-sm sm:text-base mt-4 px-4">
            Lorem ipsum dolor sit amet consectetur <br className="hidden sm:block"/> adipisicing elit. Voluptas
            eius nisi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20">
            <div className="bg-gray-50 shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col">
              <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl">Keep on top of project managment.</h3>
              <p className="text-base sm:text-lg lg:text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="w-full text-base sm:text-lg lg:text-xl border-2 border-gray-200 px-4 sm:px-6 py-2 sm:py-3 my-6 sm:my-12 rounded-lg hover:bg-gray-700 hover:text-white transition">Learn more</button>
              <img
                src={AIMG1}
                alt="project management"
                className="w-full h-auto mx-auto object-cover rounded-lg mt-auto"
              />
            </div>
            <div className="bg-gray-50 shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col">
              <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl">Analyze your business results in one place.</h3>
              <p className="text-base sm:text-lg lg:text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="w-full text-base sm:text-lg lg:text-xl border-2 border-gray-200 px-4 sm:px-6 py-2 sm:py-3 my-6 sm:my-12 rounded-lg hover:bg-gray-700 hover:text-white transition">Learn more</button>
              <img
                src={AIMG2}
                alt="business analysis"
                className="w-full h-auto mx-auto object-cover rounded-lg mt-auto"
              />
            </div>
            <div className="bg-gray-50 shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col md:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl">Keep track of sales and shipping progress.</h3>
              <p className="text-base sm:text-lg lg:text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="w-full text-base sm:text-lg lg:text-xl border-2 border-gray-200 px-4 sm:px-6 py-2 sm:py-3 my-6 sm:my-12 rounded-lg hover:bg-gray-700 hover:text-white transition">Learn more</button>
              <img
                src={AIMG3}
                alt="sales tracking"
                className="w-full h-auto mx-auto object-cover rounded-lg mt-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <WorkExperiences />

      {/* Section 6 - Call to Action */}
      <section className="bg-[rgba(225,225,225,1)] px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-left">
          {/* Heading */}
          <div className="mt-8 sm:mt-12 flex flex-col md:flex-row justify-between items-start gap-4 sm:gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Ready to get started?
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mt-2">
                File storage and sharing on decentralized storage that suits any business size.
              </p>
            </div>

            {/* Create Account Button */}
            <div className="mt-4 md:mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold shadow-md text-sm sm:text-base">
                Create an account
              </button>
            </div>
          </div>

          {/* Cards Flex */}
          <div className="mt-8 sm:mt-12 flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch">
            {/* Left Card */}
            <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-2xl flex flex-col gap-4 lg:w-80 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <img
                  src="https://digitalwhopper.com/user-tie-hair%201.png"
                  alt="individual"
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Are you individual?</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Syncing, backing up, and sharing your photos, videos and documents in total
                privacy couldn't be easier.
              </p>
              <a
                href="#"
                className="mt-2 text-white font-semibold text-sm hover:underline"
              >
                Start now →
              </a>
            </div>

            {/* Right Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left Side - Text Content */}
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <img
                    src="https://digitalwhopper.com/Vector.......png"
                    alt="business"
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">Are you business?</h3>
                <p className="text-sm sm:text-base leading-relaxed text-blue-600">
                  Work efficiently with teammates and clients, stay in sync on projects, and keep
                  company data safe—all in one place on decentralized network.
                </p>
                <a
                  href="#"
                  className="mt-2 text-blue-600 font-semibold text-sm hover:underline"
                >
                  See pricing →
                </a>
              </div>

              {/* Right Side - Illustration Image */}
              <div className="flex justify-center">
                <img
                  src="https://digitalwhopper.com/Frame....png"
                  alt="illustration"
                  className="h-48 sm:h-56 md:h-64 w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Tools */}
      <section className="bg-[rgba(225,225,225,1)] py-16 sm:py-32 lg:py-56 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-28 items-center">
          <img
            src="https://digitalwhopper.com/M3_integrations_all_integrations.png.png"
            alt="tools"
            className="w-full h-auto rounded-xl order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-[650]">
              Connect <br/>your tools, <br/>close your tabs
            </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mt-4">
              Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.
            </p>
            <a
              href="#"
              className="inline-block mt-6 text-blue-600 text-base sm:text-lg lg:text-xl underline"
            >
              Learn more
              <span className="text-xl sm:text-2xl ml-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingSection;