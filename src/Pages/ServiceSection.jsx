import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from 'lucide-react';
import Img1 from "../assets/Servicepng/Rectangle 7 (1).png"
import Img3 from "../assets/Servicepng/Rectangle 834.png"
import Img4 from "../assets/Servicepng/Rectangle 835.png"
import Img5 from "../assets/Servicepng/Rectangle 836.png"

const BusinessPortfolio = () => {
  const [currentPortfolioSlide, setCurrentPortfolioSlide] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);

  const portfolioItems = [
    {
      title: "Design Byte App",
      image: Img1,
    },
    {
      title: "Cloud App",
      image: Img5,
    },
    {
      title: "Design Furniture App",
      image: Img3,
    },
    {
      title: "E-commerce Platform",
      image: Img4,
    },
    {
      title: "Analytics Dashboard",
      image: Img5,
    },
    {
      title: "Analytics Dashboard",
      image: Img1,
    }
  ];

  const testimonials = [
    {
      name: "Angel Rose",
      text: "We needed a local team who understood the Jaipur market. Digital Whopper understood all our requirements and delivered. From SEO to ads, they handled it all.",
      avatar: "https://digitalwhopper.com/_next/image?url=%2FEllipse%2057.png&w=128&q=75",
      rating: 5
    },
    {
      name: "Angel Rose",
      text: "Digital Whopper helped us triple our online sales in under 6 months. Their ecommerce development services and marketing strategies just work.",
      avatar: "https://digitalwhopper.com/_next/image?url=%2FEllipse%2057.png&w=128&q=75",
      rating: 5
    },
    {
      name: "Angel Rose",
      text: "We moved from a basic Shopify store to a fully optimised platform with automation. Best ecommerce service provider in India, hands down.",
      avatar: "https://digitalwhopper.com/_next/image?url=%2FEllipse%2057.png&w=128&q=75",
      rating: 5
    },
    {
      name: "John Smith",
      text: "We've worked with other agencies before, but Digital Whopper truly transformed our online presence. Within 3 months, our leads tripled and our cost per acquisition dropped by 40%.",
      avatar: "https://digitalwhopper.com/_next/image?url=%2FEllipse%2057.png&w=128&q=75",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      text: "We needed a local team who understood the Jaipur market. Digital Whopper understood all our requirements and delivered. From SEO to ads, they handled it all..",
      avatar: "https://digitalwhopper.com/_next/image?url=%2FEllipse%2057.png&w=128&q=75",
      rating: 5
    },
    {
      name: "John Smith",
      text: " We moved from a basic Shopify store to a fully optimised platform with automation. Best ecommerce service provider in India, hands down.",
      avatar: "https://digitalwhopper.com/_next/image?url=%2FEllipse%2057.png&w=128&q=75",
      rating: 5
    }
  ];

  const services = [
    { name: "PPC Advertising"},
    { name: "E-commerce"},
    { name: "Shopify"},
    { name: "UI UX Design"},
    { name: "Web Design"},
    { name: "Landing Page"}
  ];

  // Auto-slide for portfolio
  useEffect(() => {
    const portfolioTimer = setInterval(() => {
      setCurrentPortfolioSlide((prev) => 
        prev === Math.ceil(portfolioItems.length / 3) - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(portfolioTimer);
  }, [portfolioItems.length]);

  // Auto-slide for testimonials
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonialSlide((prev) => 
        prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  const nextPortfolioSlide = () => {
    setCurrentPortfolioSlide((prev) => 
      prev === Math.ceil(portfolioItems.length / 3) - 1 ? 0 : prev + 1
    );
  };

  const prevPortfolioSlide = () => {
    setCurrentPortfolioSlide((prev) => 
      prev === 0 ? Math.ceil(portfolioItems.length / 3) - 1 : prev - 1
    );
  };

  const nextTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => 
      prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => 
      prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20 lg:pt-[100px] bg-[rgba(225,225,225,1)] overflow-hidden">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute bg-opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Make your dream<br /> business goal come true
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            when you need us for improve your business,then come with us to help your business have reach it, you just sit and feel that goal
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Project
          </button>
        </div>
        
        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto mt-12 md:mt-16">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-4 md:mx-0">
            <img 
              src="https://digitalwhopper.com/_next/image?url=%2Fservice_img.webp&w=1920&q=80" 
              alt="Team collaboration" 
              className="w-full h-[250px] md:h-[350px] lg:h-[500px] object-cover"
            />
            
            {/* Great Project Card - Responsive positioning */}
            <div className="absolute top-2 left-2 md:top-[12px] md:left-[-80px] bg-white rounded-lg p-2 md:p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex flex-col leading-tight">
                  <span className="text-xs md:text-sm text-gray-400 font-light">
                    <span className="text-yellow-500 text-base md:text-xl">★</span>Great Project
                  </span>
                  <span className="text-lg md:text-xl font-medium text-gray-700">800+ Done</span>
                </div>
              </div>
            </div>

            {/* CEO Card - Responsive positioning */}
            <div className="absolute bottom-2 right-2 md:bottom-[-8px] md:right-[-80px] bg-white rounded-lg p-2 md:p-3 shadow-lg max-w-[200px] md:max-w-none">
              <div className="flex flex-col leading-tight">
                <div className='flex gap-2 md:gap-4'>
                  <div>
                    <img
                      src="https://digitalwhopper.com/_next/image?url=%2Fceo.webp&w=96&q=80"
                      alt="img"
                      className='w-[25px] h-[25px] md:w-[35px] md:h-[35px] object-cover rounded-full'
                    />
                  </div>
                  <div className='flex flex-col leading-tight'>
                    <span className='font-bold text-sm md:text-base'>Bill Adams</span>
                    <span className='text-xs text-gray-400'>CEO Upteach</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-2 md:pt-5">
                <div className="flex flex-col leading-tight">
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    " This team is really the <br className="hidden md:block"/>best in its field,I don't <br className="hidden md:block"/>regret working with them,<br className="hidden md:block"/> and will come back again <br className="hidden md:block"/> thanks "
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements - Hidden on mobile for cleaner look */}
        <div className="hidden md:block absolute top-[250px] left-[-40px] w-20 h-20 bg-blue-700 rounded-full opacity-90 animate-pulse"></div>
        <div className="hidden md:block absolute top-52 right-[1px] w-8 h-8 bg-red-500 rounded-full opacity-90 animate-bounce"></div>
        <div className="hidden md:block absolute top-[700px] left-[250px] w-6 h-6 bg-red-500 rounded-full opacity-90 animate-bounce"></div>
        <div className="hidden md:block absolute bottom-56 right-40 w-6 h-6 bg-blue-700 rounded-full opacity-90 animate-pulse"></div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12 md:mb-16 flex flex-col md:flex-row justify-between gap-6 md:gap-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              My <span className='text-orange-500'>Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Explore a range of tailored solutions designed to elevate your <br className="hidden md:block"/> brand and achieve your business goals with precision and <br className="hidden md:block"/>creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">{service.name}</h3>
                <div className="bg-gray-100 rounded-xl h-24 md:h-32 mb-6 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Service Image</div>
                </div>
                <div className="bg-gray-900 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section with Auto-Slide */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-blue-600 font-semibold mb-2">Our Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What do we do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing projects that we have already done, which can help to use more confidently. You can visit by clicking from here to view more.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPortfolioSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(portfolioItems.length / 3) }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
                      {portfolioItems.slice(slideIndex * 3, slideIndex * 3 + 3).map((item, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="h-48 md:h-60 lg:h-80 relative">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 w-full p-3 md:p-4">
                              <p className="text-white text-sm md:text-base font-medium">{item.title}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevPortfolioSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>
            <button 
              onClick={nextPortfolioSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {Array.from({ length: Math.ceil(portfolioItems.length / 3) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPortfolioSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentPortfolioSlide ? 'bg-blue-600 w-6 md:w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <button className="text-blue-700 px-6 md:px-8 py-2 md:py-3 border border-solid border-blue-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              See all Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Auto-Slide */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-blue-600 font-semibold mb-2">Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">People Talk about us</h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 min-w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-4">
                      {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="flex items-center mb-4">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                            />
                            <div>
                              <h4 className="font-bold text-gray-800 text-sm md:text-base">{testimonial.name}</h4>
                              <div className="flex text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-sm md:text-base">{testimonial.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonialSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonialSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonialSlide ? 'bg-blue-600 w-6 md:w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Interesting<br />
                Collaboration<br />
                With Us?
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                Help you to reach your business goal. Let's work together to create something amazing and achieve your vision.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
            </div>
            <div className="relative w-full max-w-xl mx-auto order-1 lg:order-2">
              {/* Mobile/Tablet Layout */}
              <div className="block lg:hidden">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <img 
                    src="https://digitalwhopper.com/_next/image?url=%2FRectangle%20840.jpg&w=750&q=80" 
                    alt="Team collaboration" 
                    className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-xl shadow-lg"
                  />
                  <img
                    src="https://digitalwhopper.com/_next/image?url=%2FRectangle%20839%20.jpg&w=828&q=80"
                    alt="Team collaboration"
                    className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>

              {/* Desktop Layout - Keep your original positioning */}
              <div className="hidden lg:block">
                <div className="absolute top-[-100px] left-[400px] w-full ">
                  <img 
                    src="https://digitalwhopper.com/_next/image?url=%2FRectangle%20840.jpg&w=750&q=80" 
                    alt="Team collaboration" 
                    className="w-60 h-60 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="relative top-[-1px] left-[180px] w-full z-10">
                 <img
                   src="https://digitalwhopper.com/_next/image?url=%2FRectangle%20839%20.jpg&w=828&q=80"
                   alt="Team collaboration"
                   className="w-60 h-60 object-cover rounded-xl shadow-lg"
                   />
                </div>
                
                {/* Decorative dots - Desktop only */}
                <div className="absolute top-[-28px] left-[165px] grid grid-cols-6 gap-2 z-0">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-blue-800 rounded-full opacity-60"></div>
                  ))}
                </div>
                <div className="absolute top-[140px] left-[420px] grid grid-cols-10 gap-2">
                  {[...Array(40)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-orange-400 rounded-full opacity-60"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPortfolio;