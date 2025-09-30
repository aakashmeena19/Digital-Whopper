import React, { useEffect, useRef } from "react";

const WorkExperience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const inners = entry.target.querySelectorAll(".circle-inner");
            const line = entry.target.querySelector(".line-fill");

            line.classList.add("animate-fillLine");

            setTimeout(() => inners[0].classList.add("active1"), 0);
            setTimeout(() => inners[1].classList.add("active2"), 1500);
            setTimeout(() => inners[2].classList.add("active3"), 3000);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[rgba(225,225,225,1)] py-16 mt-60 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold mb-10 text-center text-gray-700">
          My <span className="text-orange-500">Work Experience</span>
        </h2>

        {/* Timeline Container */}
        <div
          ref={timelineRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 relative my-16"
        >
          {/* Left Column */}
          <div className="space-y-16 lg:space-y-28 text-center lg:text-right">
            <div>
              <h3 className="font-bold text-2xl md:text-3xl text-gray-700">
                Cognizant, Mumbai
              </h3>
              <p className="text-base md:text-xl text-gray-400">
                Sep 2016 - July 2020
              </p>
            </div>
            <div>
              <h3 className="font-bold text-2xl md:text-3xl text-gray-700">
                Sugee Pvt Ltd, Mumbai
              </h3>
              <p className="text-base md:text-xl text-gray-400">
                Sep 2020 - July 2023
              </p>
            </div>
            <div>
              <h3 className="font-bold text-2xl md:text-3xl text-gray-700">
                Cinestox, Mumbai
              </h3>
              <p className="text-base md:text-xl text-gray-400">Sep 2023</p>
            </div>
          </div>

          {/* Center Timeline */}
          <div className="relative flex justify-center my-10 lg:my-0">
            <div className="relative w-[4px] h-[400px] md:h-[500px]">
              {/* Animated line */}
              <div className="line-fill absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-dashed border-black"></div>

              {/* Circles */}
              <div className="circle absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-dashed border-gray-700 bg-white flex items-center justify-center">
                <div className="circle-inner w-[28px] h-[28px] md:w-[35px] md:h-[35px] rounded-full transition-colors duration-500"></div>
              </div>
              <div className="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-dashed border-gray-700 bg-white flex items-center justify-center">
                <div className="circle-inner w-[28px] h-[28px] md:w-[35px] md:h-[35px] rounded-full transition-colors duration-500"></div>
              </div>
              <div className="circle absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-dashed border-gray-700 bg-white flex items-center justify-center">
                <div className="circle-inner w-[28px] h-[28px] md:w-[35px] md:h-[35px] rounded-full transition-colors duration-500"></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-16 lg:space-y-28 text-center lg:text-left">
            <div>
              <h3 className="font-bold text-2xl md:text-3xl text-gray-700">
                Experience Designer
              </h3>
              <p className="text-base md:text-xl text-gray-400">
                Sep 2016 - July 2020
              </p>
            </div>
            <div>
              <h3 className="font-bold text-2xl md:text-3xl text-gray-700">
                UI/UX Designer
              </h3>
              <p className="text-base md:text-xl text-gray-400">
                Sep 2020 - July 2023
              </p>
            </div>
            <div>
              <h3 className="font-bold text-2xl md:text-3xl text-gray-700">
                Lead UX Designer
              </h3>
              <p className="text-base md:text-xl text-gray-400">
                Sep 2023 - Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
