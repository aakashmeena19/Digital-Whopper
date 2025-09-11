import React from "react";
import Img1 from "../assets/markingpng/Rectangle 29.png"
import AIMG1 from "../assets/markingpng/Screenshot 2025-09-01 160533.png"
import AIMG2 from "../assets/markingpng/Screenshot 2025-09-01 160549.png"
import AIMG3 from "../assets/markingpng/Screenshot 2025-09-01 160607.png"

const MarketingSection = () => {
  return (
    <div className="w-full font-sans pt-[100px] bg-[rgba(225,225,225,1)]">
      {/* Section 1 - Hero */}
      <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-[rgba(207,207,207,255)] shadow-lg rounded-2xl p-10 relative">
        {/* Left Content */}
        <div>
          <p className="text-sm text-gray-500">Increase Your Marketing ROI & Sales With</p>
          <h2 className="text-5xl font-bold text-gray-900 mt-2">
            Ready to take <br />
            <span className="text-orange-500">our business</span> <br />
            to the next level?
          </h2>
          <p className="text-gray-600 mt-4">
            Are you pouring money into ad campaigns, boosting posts, and following every "growth hack" but still not seeing real, measurable returns? We can feel your pain. There are hundreds of businesses like yours that are burning all their budget on digital marketing that doesn't convert. Here's the truth: Traditional marketing is broken. You don't need "more traffic." You need better traffic, the kind that converts. And that's where a performance marketing agency can help you.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <img 
              src="https://digitalwhopper.com/d4e01d96bc838f08c10c2fb6560948d3881ebdec.png" 
              alt="rating" 
              className="w-20 rounded-full" 
            />
            <p className="text-sm text-gray-700">5.0 Rating (200+ Reviews)</p>
          </div>
        </div>

        {/* Right Images - Layered */}
        <div className="relative h-80 w-full">
          {/* Background Image 1 - Most behind */}
          <img 
            src="https://digitalwhopper.com/Rectangle%2028%20(1).png" 
            alt="background image 1" 
            className="absolute top-8 left-8 w-96 h-96 rounded-xl shadow-lg object-cover" 
          />
          
          {/* Background Image 2 - Middle layer */}
          <img 
            src="https://digitalwhopper.com/Rectangle%2028.png" 
            alt="background image 2" 
            className="absolute top-16 left-16 w-96 h-96 rounded-xl shadow-lg object-cover" 
          />
          
          {/* Main Image - Front */}
          <img 
            src="https://digitalwhopper.com/Rectangle%2029.png" 
            alt="hero" 
            className="absolute top-24 left-24 w-96 h-96 rounded-xl shadow-xl object-cover z-10" 
          />
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center p-40">
        <div>
          <h3 className="text-5xl font-bold">200+</h3>
          <p className="text-2xl p-6">We're a family</p>
          <p>Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced.</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">99%</h3>
          <p className="text-2xl p-6">Graphic Design</p>
          <p>Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">1.5M+</h3>
          <p className="text-2xl p-6">Digital Marketing</p>
          <p>Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh.</p>
        </div>
      </div>
    </section>

{/* section 2 */}

<div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 relative overflow-hidden">
      {/* Wave background at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 md:h-20 lg:h-32 fill-gray-200">
          <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

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
            <div className="relative mb-4 md:mb-6 lg:mb-8 -ml-0 md:-ml-2 lg:-ml-4 xl:-ml-8">
              <div className="bg-gray-400 rounded-xl md:rounded-2xl lg:rounded-3xl w-full max-w-xs md:max-w-sm lg:w-64 xl:w-80 2xl:w-96 h-48 md:h-56 lg:h-64 xl:h-80 2xl:h-96 overflow-hidden mx-auto lg:mx-0">
                {/* Team image */}
                <img 
                  src="https://digitalwhopper.com/Rectangle%2032.png" 
                  alt="Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Team Member Indicator */}
              <div className="absolute top-2 md:top-3 lg:top-4 right-2 md:right-3 lg:right-16 xl:right-20 2xl:right-72">
                <div>
                  <img src="https://digitalwhopper.com/Frame%20219.png" className="w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-full h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-12 object-cover rounded-md lg:rounded-lg" alt="Team Member Indicator" />
                </div>
              </div>
            </div>

            {/* Stats and Office Image */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 items-center md:items-start">
              {/* Stats Card */}
              <div className="flex-1 space-y-2 md:space-y-3 lg:space-y-4 text-center md:text-left">
                <div>
                  <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">10k</div>
                  <div className="text-blue-200 text-xs md:text-sm lg:text-base">Great conversations per month</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">95+</div>
                  <div className="text-blue-200 text-xs md:text-sm lg:text-base">Project Complete</div>
                </div>
              </div>

              {/* Office Image */}
              <div className="flex-1 ml-0 md:ml-1 lg:ml-2 xl:ml-4">
                <div className="bg-gray-400 rounded-xl md:rounded-2xl w-32 md:w-36 lg:w-40 xl:w-48 2xl:w-56 h-32 md:h-36 lg:h-40 xl:h-48 2xl:h-56 overflow-hidden mx-auto md:mx-0">
                  {/* Office image */}
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

      {/* Decorative Elements - Only show on larger screens */}
      <div className="absolute top-1/4 left-6 lg:left-10 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-orange-400 rounded-full opacity-70 hidden lg:block"></div>
      <div className="absolute top-1/3 right-12 lg:right-20 w-2 h-2 lg:w-3 lg:h-3 bg-blue-300 rounded-full opacity-60 hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-50 hidden lg:block"></div>
    </div>
 {/* Section 3 - Team */}
      <section className="bg-[rgba(225,225,225,1)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-7xl font-bold mb-10">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className=" rounded-xl p-6 text-left">
              <img
                src={Img1}
                alt="team1"
                className=" mx-auto object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">Esther Howard</h3>
              <p className="text-base text-gray-800">Founder & CEO</p>
            </div>
            <div className=" rounded-xl p-6 text-left">
              <img
                src="https://digitalwhopper.com/Rectangle%2030....png"
                alt="team2"
                className="mx-auto object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">Cameron Williamson</h3>
              <p className="text-base text-gray-800">Marketing Head</p>
            </div>
            <div className=" rounded-xl p-6 text-left">
              <img
                src="https://digitalwhopper.com/Rectangle%2031...png"
                alt="team3"
                className="mx-auto object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">Liam Cooper</h3>
              <p className="text-base text-gray-800">Project Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Workflow */}
      <section className="bg-[rgba(225,225,225,1)] py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
        <h1 className="border-2 border-black inline-block px-4 py-2 my-6 rounded-md">
         Product Features
        </h1>
          <h2 className="text-6xl font-semibold">
            Streamline tasks with <br/>optimized workflows
          </h2>
          <p className=" mt-4">
            Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Voluptas
            eius nisi.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-20 h-[600px]">
            <div className="bg-gray-50 shadow-lg rounded-2xl p-6 ">
              <h3 className="font-semibold text-3xl">Keep on top of project managment.</h3>
              <p className="text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="w-full text-xl border-2 border-gray-200 px-6 py-3 my-12 rounded-lg hover:bg-gray-700 hover:text-white transition">Learn more</button>
              <img
                src={AIMG1}
                alt="team3"
                className="mx-auto object-cover"/>
            </div>
            <div className="bg-gray-50 shadow-lg rounded-2xl p-6">
              <h3 className="font-semibold text-3xl">Analyze your business results in one place.</h3>
              <p className="text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="w-full text-xl border-2 border-gray-200 px-6 py-3 my-12 rounded-lg hover:bg-gray-700 hover:text-white transition">Learn more</button>
              <img
                src={AIMG2}
                alt="team3"
                className="mx-auto object-cover"/>
            </div>
            <div className="bg-gray-50 shadow-lg rounded-2xl p-6">
              <h3 className="font-semibold text-3xl">Keep track of sales and shipping progress.</h3>
              <p className="text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="w-full text-xl border-2 border-gray-200 px-6 py-3 my-12 rounded-lg hover:bg-gray-700 hover:text-white transition">Learn more</button>
              <img
                src={AIMG3}
                alt="team3"
                className="mx-auto object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Work Experience */}
      <section className="bg-[rgba(225,225,225,1)] py-16 mt-60 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-semibold mb-10 text-center text-gray-700">
            My <span className="text-orange-500">Work Experience</span>
          </h2>
          <div className="space-y-20 my-24">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-[41px] text-gray-700">Cognizant, Mumbai</h3>
                <p className="text-2xl text-gray-400 my-2">Sep 2016 - July 2020</p>
              </div>
              <div>
                <h3 className="font-bold text-[41px] text-gray-700">Experince Designer</h3>
                <p className="text-2xl text-gray-400 my-2">Sep 2016 - July 2020</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-[41px] text-gray-700">Sugee Pvt Ltd, Mumbai</h3>
                <p className="text-2xl text-gray-400 my-2">Sep 2020 - July 2023</p>
              </div>
              <div>
                <h3 className="font-bold text-[41px] text-gray-700">UI/UX Designer</h3>
                <p className="text-2xl text-gray-400 my-2">Sep 2016 - July 2020</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-[41px] text-gray-700">Cinestox, Mumbai</h3>
                <p className="text-2xl text-gray-400 my-2">Sep 2023</p>
              </div>
              <div>
                <h3 className="font-bold text-[41px] text-gray-700">Lead UX Designer</h3>
                <p className="text-2xl text-gray-400 my-2">Sep 2016 - July 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Section 6 - Call to Action */}
<section className="bg-[rgba(225,225,225,1)] px-6">
  <div className="max-w-6xl mx-auto text-left">
    {/* Heading */}
<div className="mt-12 flex flex-col md:flex-row justify-between items-start gap-6">
   <div>
     <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Ready to get started?
    </h2>
    <p className="text-gray-500 mt-2">
      File storage and sharing on decentralized storage that suits any business size.
    </p>
 </div>

    {/* Create Account Button */}
    <div className="mt-6">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold shadow-md">
        Create an account
      </button>
    </div>

</div>
    {/* Cards Flex */}
    <div className="mt-12 flex flex-col md:flex-row gap-2 items-stretch">
      {/* Left Card (Fixed Width) */}
      <div className="bg-blue-600 text-white p-8 rounded-2xl flex flex-col gap-4 md:w-80 flex-shrink-0">
        {/* Icon Image */}
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <img
            src="https://digitalwhopper.com/user-tie-hair%201.png"
            alt="individual"
            className="w-6 h-6"
          />
        </div>
        <h3 className="text-2xl font-bold">Are you individual?</h3>
        <p className="text-base leading-relaxed">
          Syncing, backing up, and sharing your photos, videos and documents in total
          privacy couldn’t be easier.
        </p>
        <a
          href="#"
          className="mt-2 text-white font-semibold text-sm hover:underline"
        >
          Start now →
        </a>
      </div>

      {/* Right Card (Takes Remaining Space) */}
      <div className="bg-white p-8 rounded-2xl shadow flex-1 grid md:grid-cols-2 gap-6 items-center">
        {/* Left Side - Text Content */}
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
            <img
              src="https://digitalwhopper.com/Vector.......png"
              alt="business"
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-2xl font-bold text-blue-600">Are you business?</h3>
          <p className="text-base leading-relaxed text-blue-600">
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
            className="h-64 max-w-md"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Section 7 - Tools */}
      <section className="bg-[rgba(225,225,225,1)] py-56 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">
          <img
            src="https://digitalwhopper.com/M3_integrations_all_integrations.png.png"
            alt="tools"
            className="w-full rounded-xl"
          />
          <div>
            <h2 className="text-6xl font-[650]">
              Connect <br/>your tools, <br/>close your tabs
            </h2>
            <p className="text-gray-600 text-xl mt-4">
              Whether you want to edit your Google Docs, resolve <br/> Jira issues, or collaborate over Zoom, Miro has 100+ <br/>integrations with tools you already use and love.

            </p>
            <a
             href="#"
              className="inline-block mt-6 px-6 py-3 text-blue-600 text-xl underline "
             >
              Learn more
               <span className="text-2xl">→</span>
                </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingSection;
