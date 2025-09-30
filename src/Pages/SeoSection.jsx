import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Mail, Link, ExternalLink } from 'lucide-react';

const SEOLandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const faqData = [
    {
      question: "1. Why is Digital Whopper the best SEO agency in Jaipur?",
      answer: "At Digital Whopper, we help businesses rank on Google with proven techniques that have worked for years for our clients and other businesses. We have an established record of putting Jaipur businesses at the top of Google rankings. We blend local knowledge with analytics-driven strategies to provide genuine, measurable outcomes."
    },
    {
      question: "2. How soon can I start seeing results from SEO services?",
      answer: "SEO is an investment for the long run. Most of our clients notice significant changes in rankings and traffic in 3 to 6 months, based on niche and competition."
    },
    {
      question: "3. Do you have local SEO for Jaipur businesses?",
      answer: "Absolutely! As the best SEO company in Jaipur, we help local businesses rank higher in their area by optimising their Google Business Profile, local listings, and optimised content."
    },
    {
      question: "4. Does SEO actually generate more leads and sales?",
      answer: "Yes absolutely. The reason why SEO is so effective is because it brings highly targeted customers much higher in the buyer funnel to your products or services. Hence, you get more conversions and don't have to spend anything on running ads or promotions."
    },
    {
      question: "5. Should small businesses in Jaipur invest in SEO?",
      answer: "Yes! SEO brings organic traffic to your website without having to pay a single Rupee for it. Our top-notch SEO services in Jaipur are designed to help small and local businesses compete on par with big brands."
    }
  ];

  const services = [
    {
      id: '01',
      title: 'Keyword Research & Competitor Analysis',
      description: 'We find high-converting keywords your customers are actually searching for, and what your competitors are ranking for, so we can outrank them, fast.'
    },
    {
      id: '02',
      title: 'On-Page SEO',
      description: 'From meta tags to header structure, internal linking to content optimisation, we fine-tune every page on your site to be search engine and user-friendly.'
    },
    {
      id: '03',
      title: 'Off-Page SEO & Link Building',
      description: 'We help build a strong digital presence for your site by securing high-authority backlinks and citations that boost your domain authority.'
    },
    {
      id: '04',
      title: 'Technical SEO',
      description: 'We fix crawling errors, speed issues, and mobile usability problems that silently hurt your rankings. A clean, fast, and secure site is non-negotiable.'
    }
  ];

  const workProcess = [
    {
      step: '01',
      title: 'SEO Audit & Strategy Planning',
      description: 'We start with a thorough audit of your site and existing SEO rankings. Then, we develop a customized roadmap based on your objectives.'
    },
    {
      step: '02',
      title: 'Website Optimisation',
      description: 'Our team of content experts and technology specialists roll up their sleeves to enhance your site\'s structure, content, and user experience for search engines and visitors.'
    },
    {
      step: '03',
      title: 'Content & Link Building',
      description: 'We develop keyword-rich, high-quality content and establish strategic links to boost your Google credibility and trust levels.'
    },
    {
      step: '04',
      title: 'Performance Tracking & Iteration',
      description: 'SEO is a dynamic process. We keep track of rankings, refine strategies, and report outcomes so that your growth never stops.'
    }
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#E1E1E1] min-h-screen">
      <main>
        {/* Hero Section */}
        <div className="relative">
          {/* Animated gradient circle */}
          <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full bg-gradient-to-b from-[#9c8af8] to-[#5f41f4] shadow-xl absolute left-[-35px] top-[90px] md:top-[150px] animate-pulse"></div>
          
          <div className="flex justify-center pt-8">
            <p className="bg-[#ccccccc7] text-[12px] py-[5px] px-[10px] rounded-[20px] font-medium animate-fade-in">
              Top #1 SEO & Marketing Agency
            </p>
          </div>

          {/* Rotating background lines */}
          <div className="relative flex justify-end w-full bottom-20">
            <div className="absolute w-full md:w-[65%] lg:w-[65%] flex items-center justify-center z-[-1]">
              <img 
                alt="SVG" 
                className="w-full h-full animate-spin-slow opacity-20" 
                src="/path/to/lines.svg"
              />
            </div>
          </div>

          <div className="text-section w-[85%] m-auto pb-[clamp(3rem,6vw,6rem)] pt-0 md:pt-8">
            <div className="w-full text-center lg:w-full">
              <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold leading-tight animate-fade-in-up">
                <span>Get More Customers to Visit Your Website with</span>
                <span className="block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7163FD] via-[#4132D1] to-[#3C31A5]">
                    The Best SEO Company in Jaipur
                  </span>
                </span>
              </h1>
              <p className="pt-[50px] text-[clamp(0.3rem,3vw,0.9rem)] w-full sm:w-full text-center lg:w-full animate-fade-in-up delay-300">
                You've built a stunning website. Your products are solid. Your content is strategy-driven. 
                But no one's visiting. No clicks. No leads. No sales. If your business isn't showing up on Google, you won't be 
                able to scale or build a sustainable business, no matter what you do. You need your customers to notice you and 
                visit your website. And if you don't show up when customers search for your product, then all your money and 
                efforts are in vain. That's why you need help from the <strong>best SEO company in Jaipur.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border border-gray-400 p-4 flex items-center justify-between mx-[3vw] md:mx-[10vw] lg:mx-[20vw] my-[5rem] rounded-2xl flex-wrap gap-[1rem] animate-slide-up hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-center gap-1 relative">
            <Link className="w-4 h-4" />
            <p>https://digitalwhopper.com/</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Mail className="w-4 h-4" />
            <span>digitalwhopperhelp@gmail.com</span>
          </div>
          <div className="flex gap-1 items-center bg-[#3E32BB] text-white py-2 px-4 rounded-2xl hover:bg-[#2d2499] transition-colors cursor-pointer">
            <button>Start a Project</button>
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>

        {/* Description */}
        <div className="flex justify-center mx-[5%]">
          <p className="w-[28rem] text-center text-[clamp(0.3rem,3vw,0.9rem)] animate-fade-in">
            At Digital Whopper, we help your business rise through the ranks with the 
            <strong> best SEO services in Jaipur</strong>, ensuring your brand gets seen by the right audience at the right time. 
            If you're a local startup or an established brand looking to scale, then our customised SEO solutions are designed 
            specifically to help you put your business on Google.
          </p>
        </div>

        {/* Tags */}
        <div className="flex justify-center gap-[1.2%] mt-[3%] flex-wrap">
          {['#hiring process', '#human resource', '#best candidates', '#HR solution', '#human resource', '#hiring process'].map((tag, index) => (
            <div 
              key={index}
              className={`px-4 py-2 rounded-2xl inline-block font-semibold my-[1%] animate-bounce-in hover:scale-105 transition-transform duration-300 ${
                index % 6 === 0 ? 'bg-[#E8FCDE]' :
                index % 6 === 1 ? 'bg-[#EEE3F4]' :
                index % 6 === 2 ? 'bg-[#FFF4CE]' :
                index % 6 === 3 ? 'bg-[#C7D3FF]' :
                index % 6 === 4 ? 'bg-[#C4ECEE]' : 'bg-[#E8FCDE]'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="bg-[#FFFFFF] flex mx-[2%] px-[3%] py-[5%] rounded-2xl justify-between items-center md:flex-row flex-col gap-[20vw] md:gap-[0px] my-[8vw] shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="md:w-[30%] animate-float">
            <img src="/path/to/Figure.png" alt="SEO Figure" className="w-full" />
            <img src="/path/to/star1.png" alt="Star" className="relative right-[3vw] mt-[4vw] animate-pulse" />
          </div>
          <div className="md:w-[35%]">
            <img src="/path/to/roundtext.png" alt="Round Text" className="animate-spin-slow" />
            <p className="bg-[#F1EEFC] py-2 px-3 rounded-[10px] inline-block my-[3vw]">About SEO</p>
            <h2 className="text-[clamp(1rem,4vw,3rem)] font-semibold leading-[10vw] md:leading-[3.4vw]">
              What We Offer: <span className="text-[#3E32BB]">End-to-End SEO</span> Services in Jaipur.
            </h2>
            <p className="my-[1vw]">
              <strong>Digital Whopper</strong> offers end-to-end SEO solutions that align with your business goals. 
              Here's what our comprehensive <strong>SEO services in Jaipur</strong> include:
            </p>
            <div className="flex gap-1 items-center my-[2vw] bg-[#3E32BB] text-white py-2 px-4 rounded-2xl w-[140px] text-center hover:bg-[#2d2499] transition-colors cursor-pointer">
              <button>Learn More</button>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
          <div className="flex flex-col gap-[5vw] md:w-[23%]">
            <img className="relative left-[2vw] animate-float delay-300" src="/path/to/saturn.png" alt="Saturn" />
            <img src="/path/to/Figure2.png" alt="Figure 2" className="animate-bounce" />
          </div>
        </div>

        {/* Case Study Section */}
        <div className="bg-[#D5D3E0] flex justify-center items-center py-2 px-3 w-[140px] rounded-[10px] m-auto my-[1vw]">
          <img src="/path/to/logo-icons3.svg.png" alt="Logo" />
          <p className="text-[#4E2FDA] font-semibold">Case Study</p>
        </div>

        <div>
          <p className="font-semibold md:text-[3vw] text-[5vw] md:w-[40%] w-[60%] text-center m-auto">
            What we Do<span className="text-[#4F3DFE]"> Our Work</span>
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-[5%] flex justify-center w-full flex-col md:flex-row">
          <div className="md:w-[42%] w-[98%] mx-[1%] relative group overflow-hidden rounded-lg">
            <img className="w-full h-full transition-transform duration-300 group-hover:scale-105" src="/path/to/Link.png" alt="Website Design" />
            <div className="absolute bottom-0 text-white p-[1.1vw] bg-gradient-to-t from-black/70 to-transparent">
              <p className="md:text-[1.4vw] font-bold">Website Design & Development</p>
              <p className="font-semibold md:text-[1.1vw]">Digital Art. Illustrations</p>
            </div>
          </div>
          <div className="flex gap-3 md:w-[52%] w-[98%] mx-[1%] mt-[1vw] md:mt-0">
            {[
              { img: '/path/to/Link1.png', title: 'SEO' },
              { img: '/path/to/Link2.png', title: 'PPC Advertising' },
              { img: '/path/to/Link3.png', title: 'Social Media Marketing' }
            ].map((item, index) => (
              <div key={index} className="relative w-[33%] group overflow-hidden rounded-lg">
                <img className="w-full h-full transition-transform duration-300 group-hover:scale-105" src={item.img} alt={item.title} />
                <div className="absolute md:bottom-[5vw] bottom-[13vw] left-[4vw] text-white">
                  <p className="md:text-[1.4vw] text-[3.5vw] font-bold rotate-270">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="my-[10%] flex flex-col gap-23 md:gap-0 w-[85%] m-auto">
          <div className="flex justify-center gap-[10%] flex-col md:flex-row">
            {services.slice(0, 2).map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white md:w-[35vw] p-[1.3vw] rounded-2xl w-[96%] mx-[2%] my-4 md:my-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-[1.8vw]">
                  <img src="/path/to/Background.png" alt="Background" />
                  <p className="text-[3.3rem] font-semibold text-[#4E2FDA]">{service.id}</p>
                </div>
                <h3 className="font-bold text-[1.5rem]">{service.title}</h3>
                <p className="text-[#3A3C3E] text-[1.1rem] font-semibold mr-[0.5rem] my-[1.2vw]">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Central Logo with Ripple Effect */}
          <div className="relative flex items-center justify-center w-[300px] h-[300px] mx-auto">
            <div className="absolute w-[230px] h-[230px] rounded-full border-2 border-[#C5BAE8] animate-ping opacity-75"></div>
            <div className="absolute w-[230px] h-[230px] rounded-full border-2 border-[#D6CFF0] animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute w-[160px] h-[160px] rounded-full bg-[#E6E2F5] shadow-inner"></div>
            <img 
              src="/path/to/whlogo.png" 
              alt="Logo" 
              className="relative z-10 w-[70px] opacity-90 hover:scale-110 transition-transform duration-300 drop-shadow-md animate-float" 
            />
          </div>

          <div className="flex justify-center gap-[10%] flex-col md:flex-row">
            {services.slice(2, 4).map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white md:w-[35vw] p-[1.3vw] rounded-2xl my-4 md:my-0 w-[96%] mx-[2%] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-[1.8vw]">
                  <img src="/path/to/Background.png" alt="Background" />
                  <p className="text-[3.3rem] font-semibold text-[#4E2FDA]">{service.id}</p>
                </div>
                <h3 className="font-bold text-[1.5rem]">{service.title}</h3>
                <p className="text-[#3A3C3E] text-[1.1rem] font-semibold mr-[0.5rem] my-[1.2vw]">{service.description}</p>
              </div>
            ))}
          </div>

          <h3 className="font-medium mt-8">Content Strategy & SEO Copywriting</h3>
          <p className="text-[clamp(0.3rem,3vw,0.9rem)]">
            Google loves valuable, original content. So do your users. We craft SEO-rich blogs, landing pages, and product descriptions that convert.
          </p>
          
          <h3 className="font-medium mt-4">Local SEO for Jaipur-Based Businesses</h3>
          <p className="text-[clamp(0.3rem,3vw,0.9rem)]">
            If you're targeting Jaipur customers, we optimise your business for local searches with Google My Business, maps integration, and city-specific keyword targeting.
          </p>
          
          <p className="text-[clamp(0.3rem,3vw,0.9rem)] mt-4">
            No fluff. Just focused, results-driven SEO from the <strong>best SEO company in Jaipur</strong>.
          </p>
        </div>

        {/* Work Process Section */}
        <section className="bg-[#F7F8FA] my-50 py-20 m-[2%] rounded-2xl">
          <div className="text-[#4E2FDA] flex items-center justify-center gap-2">
            <div className="bg-[#4E2FDA] w-[2rem] h-[2px]"></div>
            <p className="font-semibold">Work Process</p>
            <div className="bg-[#4E2FDA] w-[2rem] h-[2px]"></div>
          </div>
          <h2 className="font-semibold text-[3vw] text-center">Our 4-Step Strategy for SEO Success</h2>
          <p className="text-center text-[clamp(0.3rem,3vw,0.9rem)]">
            Want to see how we make you rank, convert, and grow? Here's our proven and results-driven 4-step SEO strategy:
          </p>
          
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full">
              <img className="w-full h-full p-[8%] animate-float" src="/path/to/Marketing-cuate.png" alt="Marketing" />
            </div>
            <div className="lg:w-1/2 w-full p-[8%]">
              <div>
                {workProcess.map((process, index) => (
                  <div 
                    key={process.step}
                    className={`my-[2vw] bg-white py-[10px] px-[45px] relative rounded-2xl hover:shadow-md transition-shadow duration-300 ${
                      index % 2 === 1 ? 'lg:left-[-10%]' : ''
                    }`}
                  >
                    <h6 className="font-semibold text-[1.2rem] my-[0.5rem]">{process.title}</h6>
                    <p className="text-[#3D4C5E] font-medium">{process.description}</p>
                    <div className="bg-[#E0EBFB] rounded-full w-[4rem] h-[4rem] flex items-center justify-center absolute top-[20%] left-[-8%] animate-pulse">
                      <p className="text-[#4E2FDA] font-semibold text-[1.5rem]">{process.step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1rem,4vw,3rem)] text-center mb-10 font-semibold">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-md shadow-md transition-all hover:shadow-lg">
                <div 
                  className="flex justify-between cursor-pointer p-6"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-semibold text-sm md:text-lg">{faq.question}</h3>
                  <div className="p-1">
                    {openFaq === index ? 
                      <ChevronUp className="h-5 w-5 text-black border border-black rounded-md" /> :
                      <ChevronDown className="h-5 w-5 text-black border border-black rounded-md" />
                    }
                  </div>
                </div>
                {openFaq === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from { 
            transform: translateY(50px);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .rotate-270 {
          transform: rotate(270deg);
        }
      `}</style>
    </div>
  );
};

export default SEOLandingPage;