
      {/* FAQ Section */}
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1rem,4vw,3rem)] text-center mb-10 font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-md shadow-md transition-all">
              <div 
                className="flex justify-between cursor-pointer p-6"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="font-semibold text-sm md:text-lg">{faq.question}</h3>
                <div className="p-1">
                  <ChevronDown 
                    className={`h-5 w-5 text-black border border-black rounded-md transition-transform ${
                      activeAccordion === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
              {activeAccordion === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>






  const faqs = [
    {
      question: "Which E-commerce platforms does Digital Whopper manage?",
      answer: "Our e-commerce stores are operational on all major platforms. Our team is expert in managing Amazon, Flipkart, Myntra, Etsy, and Pepperfry. For your e-commerce store, you can completely rely on us. From setting up stores to promoting your products and driving conversions, we assure good results."
    },
    {
      question: "Does Digital Whopper also help with website design and UI/UX?",
      answer: "Yes! We focus on creating immersive digital experiences. Our IT team creates websites that are user-friendly, visually appealing, and retain users. We guarantee that your website will reflect your brand's message and keep users engaged at every step."
    },
    {
      question: "Which industrial sectors does Digital Whopper work with?", 
      answer: "We proudly work with diverse industries. We make tailored strategies to meet the unique requirements of each sector. Education, healthcare, real estate & construction, hospitality, and food & beverage and many more… Whether you have an established business or trying to grow a start-up, our team is expert in managing every business and driving measurable growth."
    },
    {
      question: "Does Digital Whopper provide regular progress reports to clients?",
      answer: "We believe in maintaining transparency between clients and the company. We provide detailed progress reports including campaign insights and performance metrics. We provide weekly and monthly reports to keep you updated about your business status."
    },
    {
      question: "What are the charges for digital marketing services at Digital Whopper?",
      answer: "Our charges are variable depending on the type of services needed like social media management, SEO, or e-commerce store handling. However, while we have variable prices the cost is quite affordable. So even if you have a small business you can enjoy our expert services and achieve the highest returns from your investment."
    }
  ];







  
      {/* Milestones Section */}
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl w-full max-w-6xl mx-auto flex justify-between p-5 md:p-10 flex-wrap flex-col-reverse md:flex-row">
          <div className="w-full md:w-[45%] space-y-4 text-sm text-black font-medium">
            <p className="transition-opacity duration-700 opacity-100">
              We took the first step towards transforming the business landscape and opening avenues to thrive in the digital world.
            </p>
            <p className="transition-opacity duration-700 opacity-0">
              Started with the vision of our founder we've expanded our professional team and services offered.
            </p>
            <p className="transition-opacity duration-700 opacity-0">
              Having successfully built over 50 businesses, our turning point arrived with the project of Ekatra (our Shark Tank India Client).
            </p>
            <p className="transition-opacity duration-700 opacity-0">
              Counting on projects, we successfully built an online reputation of a century of brands this year, and many more to come.
            </p>
            <p className="transition-opacity duration-700 opacity-0">
              5 years since our digitalisation mission started, we are now praised by the Government of Rajasthan and are proud to be funded for expansion. This is not the END, many MORE MILESTONES are awaited.
            </p>
          </div>
          
          <div className="flex justify-between items-center w-full md:w-1/2 gap-8 flex-col mb-3">
            <div className="text-left w-full">
              <h2 className="text-[clamp(1rem,4vw,3rem)] font-bold leading-tight text-gray-900">
                Driven by Passion at Every Stage, <br />
                Our Milestones Reflects <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold">
                  How Far We've Come
                </span>
              </h2>
            </div>
            
            <div className="flex-1 w-full">
              <div className="relative flex items-center justify-between border-t-2 border-blue-500">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative text-center w-1/5">
                    <div className={`w-4 h-4 rounded-full mx-auto border-4 ${milestone.active ? 'border-orange-500 scale-110' : 'border-gray-300'} bg-white transition-transform duration-500`}></div>
                    <div className={`mt-2 text-sm font-bold ${milestone.active ? 'text-blue-600' : 'text-gray-400'}`}>
                      {milestone.year}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-500 mt-1">
                      {milestone.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
