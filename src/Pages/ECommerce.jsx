import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import heroImg from "../assets/navbaarpng/lines.svg";

const ECommerce = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqData = [
    {
      question: "Can you help migrate my existing ecommerce store from Shopify to WooCommerce (or vice versa)?",
      answer: "Yes, we provide complete migration services between different e-commerce platforms including Shopify, WooCommerce, Magento, and others. Our team ensures seamless data transfer with minimal downtime."
    },
    {
      question: "I already have a website, do I still need ecommerce marketing services?",
      answer: "Having a website is just the first step. Ecommerce marketing services help drive traffic, increase conversions, and grow your online presence through SEO, PPC, social media marketing, and conversion optimization."
    },
    {
      question: "How long does it take to launch a fully functional ecommerce store with Digital Whopper?",
      answer: "Typically, a fully functional ecommerce store takes 4-8 weeks depending on complexity, customization requirements, and the number of products. We provide a detailed timeline after understanding your specific needs."
    },
    {
      question: "Will your ecommerce digital marketing services include running ads and managing my social media too?",
      answer: "Yes, our comprehensive digital marketing services include PPC advertising, social media management, content creation, email marketing, and performance tracking across all platforms."
    },
    {
      question: "Do you provide ongoing support after the store is launched?",
      answer: "Absolutely! We offer ongoing maintenance, technical support, performance monitoring, security updates, and continuous optimization to ensure your store performs at its best."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-[rgba(225,225,225,1)] py-40 min-h-screen">
      <img
              src={heroImg}
              alt="Hero"
              className="absolute 
          right-0 
          w-[90vw] h-[80vw] top-6   /* har screen ke width ka 80% */
          md:w-[70vw] md:h-[70vw] 
          lg:w-[60vw] lg:h-[60vw]
          lg:-top-[50px]
          object-contain 
          pointer-events-none 
          select-none 
          animate-popRotateY 
          opacity-20"
            />
      
      <main>
        
        <div className="w-4/5 mx-auto pb-12 pt-0 md:pt-8">
          <div className="w-full text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span>Power Up Your Online Store With</span>
              <span className="block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900">
                  Digital Whopper's Ecommerce Marketing Services
                </span>
              </span>
            </h1>
            <p className="pt-12 text-sm md:text-base w-full text-center">
              <span>You've poured time, effort, and money into your online store. You've got great products, a decent-looking website, and maybe even a few sales. But somehow, your ecommerce business just isn't taking off. You're lost in a sea of competitors. Website traffic is flat. Conversions? Disappointing. And you're clueless about marketing. If this sounds like you, then you're not the only one.</span>
              <span className="block mt-4">
                There are hundreds and thousands of businesses that are facing these ecommerce struggles every day. However, <strong>Digital Whopper</strong> can solve all your problems. At Digital Whopper, we help you <strong>build, market, and scale</strong> your ecommerce business with a complete suite of <strong>ecommerce marketing services</strong> tailored to your business goals.
              </span>
            </p>
          </div>
        </div>

        {/* Services Section */}
        <section className="max-w-full pt-5 px-2 md:px-14 text-gray-800">
          <div className="bg-white rounded-lg md:rounded-xl pb-10 mt-4 md:mt-20">
            <div className="relative -top-6 md:-top-14 flex justify-center w-full">
              <div className="bg-white rounded-lg md:rounded-xl pb-10 mt-4 md:mt-20">
    <div className="relative -top-6 md:-top-14 flex justify-center w-full">
      <div className="grid grid-cols-3 gap-x-2 md:gap-x-4 gap-y-4 w-11/12 place-items-center">
        
        {/* Left Column */}
        <div className="flex flex-col space-y-16 w-full lg:h-[40rem]">
          <div className="w-full h-1/2">
            <img 
              className="w-full h-[14rem] md:h-[16rem] lg:h-[21rem] rounded-xl object-cover" 
              src="https://digitalwhopper.com/_next/image?url=%2FCall.jpg&w=640&q=80"
            />
          </div>
          <div className="w-full h-1/2">
            <img 
              className="w-full h-[14rem] md:h-[16rem] lg:h-[21rem] rounded-xl object-cover" 
              src="https://digitalwhopper.com/_next/image?url=%2Fpeoplevector.png&w=640&q=80"
            />
          </div>
        </div>

        {/* Center Column */}
        {/* Center Column */}
<div className="flex justify-center items-center w-full lg:h-[40rem] pt-8 md:pt-20 lg:pt-18">
  <img 
    className="w-full h-[30rem] md:h-[45rem] rounded-xl object-cover"
    src="https://digitalwhopper.com/_next/image?url=%2Fcenter_image.jpg&w=640&q=80"
  />
</div>

        {/* Right Column */}
        <div className="flex flex-col space-y-16 w-full lg:h-[40rem]">
          <div className="w-full h-1/2">
            <img 
              className="w-full h-[14rem] md:h-[16rem] lg:h-[21rem] rounded-xl object-cover" 
              src="https://digitalwhopper.com/_next/image?url=%2FCall.jpg&w=640&q=80"
            />
          </div>
          <div className="w-full h-1/2">
            <img 
              className="w-full h-[14rem] md:h-[16rem] lg:h-[21rem] rounded-xl object-cover" 
              src="https://digitalwhopper.com/_next/image?url=%2Fpeoplevector.png&w=640&q=80"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
            </div>

            <div className="px-4 pt-2">
              <div className="text-base md:text-xl font-semibold">
                <h4>Offer</h4>
              </div>
              <div className="font-medium text-xl md:text-3xl mt-4">
                <h2>What We Offer: End-to-End Ecommerce Development Services</h2>
              </div>
              <div className="text-sm md:text-base mt-6">
                <p>
                  If you think just having an online store is enough to get you sales, then you'll be out of business sooner than you can think. You need a strategic blend of design, functionality, marketing, and optimization to stay ahead. That's where you need help from a reliable <strong>ecommerce service provider in Jaipur</strong> like Digital Whopper. <strong>Here's what our Ecommerce development services include:</strong>
                </p>
              </div>
              <div>
                <ul className="list-disc pl-5 text-sm md:text-base mt-2 space-y-2">
                  <li><strong>Custom Ecommerce Website Design:</strong> Built for performance, speed, and conversions.</li>
                  <li><strong>Mobile Optimisation:</strong> We help you choose and optimize the right platform.</li>
                  <li><strong>Responsive Design:</strong> 74% of ecommerce traffic comes from mobile. We make sure you're ready.</li>
                  <li><strong>Platform Integration:</strong> We help you choose and optimize the right platform.</li>
                  <li><strong>Secure Payment Gateway Integration:</strong> Seamless checkout experiences = more sales.</li>
                  <li><strong>User Experience (UX) Design:</strong> Keep users engaged and move them closer to the "Buy" button.</li>
                  <li><strong>Search Engine Optimisation (SEO):</strong> Dominate Google and get found for the products you sell.</li>
                  <li><strong>Pay-Per-Click Advertising (PPC):</strong> Get instant traffic that converts.</li>
                  <li><strong>Conversion Rate Optimisation (CRO):</strong> Turn your existing traffic into paying customers.</li>
                </ul>
              </div>
            </div>
            <p className="px-4 text-sm md:text-base mt-4">
              As one of the best <strong>ecommerce service providers in India</strong>, we go beyond just design; we focus on <strong>business growth.</strong>
            </p>
          </div>

          {/* Portfolio Showcase */}
          <section className="flex justify-center items-center overflow-hidden py-10">
            <div className="w-64 h-48 sm:w-96 sm:h-80 lg:w-full lg:h-96 max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Project 1</span>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl shadow-2xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Project 2</span>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-2xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Project 3</span>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-4/5 mx-auto pt-10 md:pt-28 px-4 md:px-14">
          <div className="flex items-center justify-between py-16 flex-wrap">
            <h2 className="font-medium text-black text-xl md:text-3xl text-left w-full md:w-3/5">
              Why Should You Choose Digital Whopper as Your{' '}
              <span className="text-orange-500">Ecommerce Service Provider in Jaipur?</span>
            </h2>
            <p className="text-sm md:text-base text-center md:text-justify w-full md:w-2/5 mt-4 md:mt-0">
              There are dozens of agencies promising results. So why should you choose us? Based in the heart of Jaipur, Digital Whopper brings a fresh, local understanding with global capabilities. Our team combines creative storytelling with smart technology to bring you a complete ecommerce solution. Here's <strong>why you should choose us:</strong>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-gray-800">
            {[
              {
                title: "One-stop solution:",
                description: "From development to marketing to support, we handle it all so you don't have to juggle multiple vendors."
              },
              {
                title: "Transparent pricing & reporting:",
                description: "No jargon, no fluff, just clear metrics and results."
              },
              {
                title: "Fast turnaround:",
                description: "Your time is money. We deliver projects on schedule, always."
              },
              {
                title: "Proven Track Record:",
                description: "We've helped over 150+ brands scale their ecommerce stores with a measurable ROI. Our clients have scaled 2x–5x in less than a year."
              },
              {
                title: "Based in Jaipur, Trusted Across India:",
                description: "As a leading ecommerce service provider in Jaipur, we work with brands across India and beyond."
              }
            ].map((item, index) => (
              <div key={index} className="md:w-2/5 lg:w-1/3 mt-10 md:mt-5 flex flex-col">
                <div className="bg-gray-300 min-h-20 md:min-h-28 pr-12 rounded-t-xl pt-8 text-base md:text-xl font-medium pl-8 pb-4">
                  <h3>{item.title}</h3>
                </div>
                <div className="bg-gray-300 mt-px rounded-b-xl text-sm md:text-base pt-6 pl-8 pb-10 md:pb-16 flex-grow flex pr-4 lg:pr-12">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm md:text-base text-center mt-4">
            We're not just another <strong>ecommerce service provider in India</strong>. We're your <strong>growth partner.</strong>
          </p>
        </section>

        {/* Statistics Section */}
        <section className="max-w-full bg-gray-100 pt-10 md:pt-28">
          <div className="relative bg-purple-600 w-full p-8 md:p-32 flex justify-center">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 absolute left-1/2 transform -translate-x-1/2 -top-5 md:-top-12 -bottom-5 md:-bottom-12 w-4/5 text-white flex items-center justify-center rounded-xl">
              <div className="text-center p-8">
                <div className="text-xs md:text-lg">
                  <h4>Statistics</h4>
                </div>
                <div className="text-sm md:text-3xl lg:text-4xl mt-2 md:mt-6">
                  <h2>Who Are We?</h2>
                </div>
                <p className="mt-4 text-sm md:text-base">
                  Digital Whopper is one of the best <strong>ecommerce service providers</strong> in Jaipur. Digital Whopper's ecommerce marketing services make sure that you get results and maximise your profitability. As an experienced <strong>ecommerce service provider in India</strong>, we help you do more than just sell—we help you scale.
                </p>
                <div className="flex flex-wrap justify-evenly text-center mt-2 md:mt-14 px-6">
                  <div className="w-full md:w-1/3 mt-2 md:mt-0">
                    <div className="text-lg md:text-4xl lg:text-5xl font-bold">10M+</div>
                    <div className="text-xs md:text-sm lg:text-base mt-2">
                      <p>Monthly Reach Through Marketing Campaigns</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 mt-2 md:mt-0">
                    <div className="text-lg md:text-4xl lg:text-5xl font-bold">500+</div>
                    <div className="text-xs md:text-sm lg:text-base mt-2">
                      <p>Projects Successfully Delivered</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 mt-2 md:mt-0">
                    <div className="text-lg md:text-4xl lg:text-5xl font-bold">150+</div>
                    <div className="text-xs md:text-sm lg:text-base mt-2">
                      <p>Clients Growing With Us Globally</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-full bg-gray-100 pt-10 md:pt-28 px-4 md:px-14">
          <div className="bg-gray-200 rounded-xl py-10 md:py-16">
            <div className="px-4 md:px-24 lg:px-44">
              <div className="text-sm md:text-lg text-gray-500">
                <h4>Leadership Team</h4>
              </div>
              <div className="text-2xl md:text-4xl mt-4 text-gray-800">
                <h2>Meet the Digital Marketing Experts</h2>
              </div>
              <div className="text-sm md:text-lg mt-6 text-gray-800">
                <p>Our team of digital marketers, designers, and strategists works together to deliver exceptional results</p>
              </div>
            </div>
            <div className="flex justify-center text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-20 px-5 lg:px-32 gap-4 lg:gap-10 w-full place-items-center">
                {[
                  { name: "Michael Scott", role: "Head of Development Team" },
                  { name: "Dwight Schrute", role: "SEO Specialist" },
                  { name: "Pam Beetsley", role: "Social Media Manager" }
                ].map((member, index) => (
                  <div key={index} className="member-div">
                    <div className="w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center">
                      <span className="text-6xl">👤</span>
                    </div>
                    <div className="text-base md:text-2xl mt-4">
                      <p>{member.name}</p>
                    </div>
                    <div className="mt-3 text-xs md:text-lg">
                      <p>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="max-w-full bg-gray-100 py-10 md:py-28 px-4 md:px-28 lg:px-64">
          <div className="text-gray-800">
            <div className="text-base md:text-lg">
              <p>Our values</p>
            </div>
            <div className="text-xl md:text-3xl mt-4">
              <h2>Our 4-Step Strategy to Ecommerce Success</h2>
            </div>
            <div className="mt-4 text-sm md:text-lg">
              <p>You can't grow if your target customers can't find you. That's why our <strong>ecommerce digital marketing services</strong> are laser-focused on visibility, traffic, and conversions. Wondering how we make it all work? Here's a simple breakdown of our proven process:</p>
            </div>
          </div>

          <div className="mt-10 md:mt-20 space-y-10 md:space-y-20">
  {[
    {
      title: "Discover & Diagnose",
      description:
        "We dive deep into your business model, audience, and goals. We perform a full audit of your current setup and identify gaps.",
      icon: "https://digitalwhopper.com/_next/image?url=%2Fpeoplevector.png&w=640&q=80"
    },
    {
      title: "Develop & Design",
      description:
        "Using insights from the discovery phase, we create a high-performing ecommerce website that reflects your brand and maximises user experience.",
      icon: "https://digitalwhopper.com/_next/image?url=%2Fwalk_img.png&w=640&q=80"
    },
    {
      title: "Market & Amplify",
      description:
        "We launch targeted ecommerce marketing services that bring in traffic, boost engagement, and drive conversions.",
      icon: "https://digitalwhopper.com/_next/image?url=%2Fshakehand.png&w=640&q=80"
    },
    {
      title: "Optimise & Grow",
      description:
        "Our job doesn't end at launch. We monitor performance, tweak campaigns, and suggest improvements to help you grow consistently.",
      icon: "https://digitalwhopper.com/_next/image?url=%2Fshakehand.png&w=640&q=80"
    }
  ].map((step, index) => (
    <div key={index} className="flex items-center">
      <div className="w-1/4 flex justify-center">
        <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center">
          {/* ✅ Agar icon ek image hai to <img> dikhana, warna emoji */}
          {step.icon.includes("http") ? (
  <img
    src={step.icon}
    alt={step.title}
    className="w-[220px] h-[220px] md:w-[200px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-contain"
  />
) : (
  <span className="text-2xl md:text-4xl">{step.icon}</span>
)}

        </div>
      </div>
      <div className="px-2 md:px-6 text-gray-800 w-3/4">
        <div className="text-base md:text-xl mt-2">
          <h3>{step.title}</h3>
        </div>
        <div className="text-xs md:text-lg mt-1 md:mt-3">
          <p>{step.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>


          <h2 className="text-xl md:text-3xl mt-8">You're One Click Away from Growing Your Ecommerce Business</h2>
          <p className="mt-4 text-sm md:text-lg">
            If you are fed up with low conversions, slow growth, or unqualified traffic, it's time to take it to the next level. At Digital Whopper, we are passionate about seeing your business succeed as we do with ours. No matter if you are in need of full-scale ecommerce development or high-impact digital marketing, we have the skills and resources to get you there. Don't let your potential sit idle. Get in touch with our experts today and see how we can help you scale your ecommerce business!
          </p>
        </section>

        {/* FAQ Section */}
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <h2 className="text-xl md:text-3xl text-center mb-10 font-semibold text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-md shadow-md transition-all">
                <div 
                  className="flex justify-between cursor-pointer p-6"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="font-semibold text-sm md:text-lg pr-4">
                    {index + 1}. {faq.question}
                  </h3>
                  <div className="p-1 flex-shrink-0">
                    {activeAccordion === index ? (
                      <Minus className="h-5 w-5 text-black border border-black rounded-md" />
                    ) : (
                      <Plus className="h-5 w-5 text-black border border-black rounded-md" />
                    )}
                  </div>
                </div>
                {activeAccordion === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ECommerce;