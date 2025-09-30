import React, { useState, useEffect } from 'react';
import heroImg from "../assets/navbaarpng/lines.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS import
import "swiper/css";
import "swiper/css/effect-cards";

// Custom CSS (optional)
import "./styles.css";

// Required module import
import { EffectCards, Mousewheel } from "swiper/modules";


import { ChevronDown, ArrowRight, Check, Plus } from 'lucide-react';

const WebDevelopmentLanding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [faqOpen, setFaqOpen] = useState(null);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Portfolio slides
  const portfolioSlides = [
    '/https://digitalwhopper.com/Marbleous.webp',
    '/web-ss-3.webp',
    '/Marbleous.webp',
    '/web-ss-1.webp',
    '/web-ss-3.webp'
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "Digital Whopper completely transformed our website. We went from a clunky, slow platform to a sleek, high-performing site that actually brought in leads. Their team understood exactly what we needed.",
      name: "Ritika Shah",
      position: "Founder of XYZ Company",
      image: "https://digitalwhopper.com/_next/image?url=%2FEllipse%2057.png&w=128&q=75"
    },
    {
      text: "Our ecommerce sales doubled within months of launching the new site. They developed an amazing website and created a growth machine.",
      name: "Ankit Mehra",
      position: "Founder of XYZ Company",
      image: "https://digitalwhopper.com/_next/image?url=%2FEllipse%2057.png&w=128&q=75"
    },
    {
      text: "There are many variations passages of Lorem Ipsum majority some by words which don't look.",
      name: "Angel Rose",
      position: "Creative Manager",
      image: "https://digitalwhopper.com/_next/image?url=%2FEllipse%2057.png&w=128&q=75"
    }
  ];

  // Auto-slide for portfolio
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [portfolioSlides.length]);

  // Services data
  const services = [
    {
      title: "Custom Website Development",
      description: "Stand out from the crowd with a tailor-made website that reflects your brand's identity. Built from the ground up for your goals and audience.",
      image: "https://digitalwhopper.com/_next/image?url=%2FRectangle.png&w=1920&q=80"
    },
    {
      title: "Responsive Web Design",
      description: "We ensure your site looks flawless and functions smoothly on every screen size, from smartphones to desktops.",
      image: "https://digitalwhopper.com/_next/image?url=%2FRectangle.png&w=1920&q=80"
    },
    {
      title: "eCommerce Development Services",
      description: "Launch, grow, or optimize your online store with our powerful ecommerce development services. Whether it's Shopify, WooCommerce, Magento, or a custom cart, we've got you covered.",
      image: "https://digitalwhopper.com/_next/image?url=%2FRectangle.png&w=1920&q=80"
    },
    {
      title: "CMS-Based Websites",
      description: "Get complete control over your content with dynamic websites built on WordPress, Joomla, or Drupal.",
      image: "https://digitalwhopper.com/_next/image?url=%2FRectangle.png&w=1920&q=80"
    },
    {
      title: "Web App Development",
      description: "Need something more complex? We build robust, secure, and scalable web applications that solve real business problems.",
      image: "https://digitalwhopper.com/_next/image?url=%2FRectangle.png&w=1920&q=80"
    },
    {
      title: "Website Maintenance & Support",
      description: "We don't disappear after launch. From updates to security patches, we offer ongoing support to keep your website healthy.",
      image: "https://digitalwhopper.com/_next/image?url=%2FRectangle.png&w=1920&q=80"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How long does it take to build a custom website with Digital Whopper?",
      answer: "The timeline varies based on project complexity, typically ranging from 4-12 weeks for most projects."
    },
    {
      question: "Can you redesign my existing website without losing SEO rankings?",
      answer: "Yes, we follow SEO best practices during redesigns to maintain and improve your search rankings."
    },
    {
      question: "Do you offer eCommerce integration with payment gateways and shipping options?",
      answer: "Absolutely! We integrate all major payment gateways and shipping providers for seamless eCommerce functionality."
    },
    {
      question: "Will I be able to update the website myself after it's launched?",
      answer: "Yes, we provide user-friendly CMS solutions and training so you can easily update your content."
    },
    {
      question: "What industries do you specialise in for web development?",
      answer: "We work across various industries including retail, healthcare, education, real estate, and more."
    }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">Ruk Ja
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="antialiased bg-gray-200 py-32">
        {/* ✅ Background Image */}
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

      {/* Hero Section */}
      <main>
        <div>
          {/* Rotating Background Lines */}
          <div className="relative flex justify-end w-full bottom-20">
            <div className="absolute w-full md:w-3/5 lg:w-3/5 flex items-center justify-center z-[-1] animate-spin" style={{animationDuration: '20s'}}>
              <img alt="SVG" width="500" height="80" className="w-full h-full opacity-20" src="/lines.svg" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-section w-4/5 m-auto pb-12 pt-0 md:pt-8">
            <div className="w-full">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span>Build Websites That Work, Convert & </span>
                <span className="block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800">
                    Grow with the 
                  </span>
                  <span> Best Web Development Company in Jaipur</span>
                </span>
              </h1>
              <p className="pt-12 text-base md:text-lg w-full">
                <span>Have you ever clicked on a website and instantly hit the back button? Maybe it was slow, cluttered, or just very confusing. Now imagine if that were your site. Wouldn't it turn away customers before they even see what you offer? Your website is your business card, storefront, and sales team all rolled into one. And if you don't have a well-performing, strategically designed website, then you'll be losing a lot of money on the table. That's why you need the right <strong>web development company in Jaipur</strong> to help you.</span>
                <span className="block mt-4"><strong>Digital Whopper</strong> is one of the best <strong>web development companies in Jaipur</strong> that can actually make a difference in your online marketing. We don't just build websites; we create digital experiences that work hard for your brand.</span>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center gap-8 pt-8 pb-16">
            <div className="w-2/5 md:w-1/3 lg:w-1/6">
              <button className="relative z-10 font-bold w-full bg-transparent border-2 border-black text-xs lg:text-base text-black  p-4 rounded-3xl flex gap-2 justify-center items-center hover:bg-black hover:text-white transition-colors">
                <span>Speak to us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Services Section */}
          <section className="bg-center bg-cover" style={{backgroundImage: "url('/bglines.svg')"}}>
            <div className="w-full md:w-4/5 m-auto bg-white p-3 rounded-3xl mb-32">
              <div className="py-8 w-full md:w-2/3 m-auto">
                <p className="text-center text-base md:text-xl font-semibold text-black">Our Services</p>
                <h2 className="text-2xl md:text-4xl font-medium text-center p-5">Driving Innovation in E-Commerce</h2>
                <p className="text-base md:text-lg">At Digital Whopper, we offer <strong>end-to-end website development services in Jaipur</strong> for brands ready to dominate the online space. Whether you're a startup, an SME, or a well-established brand, your website must speak your story clearly, quickly, and beautifully. That's where our team comes in.</p>
              </div>

              {/* Services Grid */}
              <div className="flex pb-9 flex-wrap justify-evenly gap-12">
                {services.map((service, index) => (
                  <div key={index} className="Service w-full md:w-80 hover:transform hover:scale-105 transition-transform duration-300">
                    <div className="image">
                      <div className="relative w-full max-w-xs aspect-[300/354] rounded-2xl overflow-hidden">
                        <img alt="service-image" className="object-cover rounded-2xl w-full h-full" src={service.image} />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="text-left text-base md:text-xl font-semibold py-3">{service.title}</h4>
                      <p className="text-sm md:text-base">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-base md:text-lg text-center">Working with a reliable <strong>web development company in Jaipur</strong> means you get all of this in one place, under one roof, from a team that gets it.</p>
            </div>

            {/* Portfolio Section */}
            <div className="flex justify-between w-4/5 m-auto mb-8">
              <div className="heading">
                <h2 className="text-black text-2xl md:text-4xl">My<span className="text-orange-500"> Collection</span></h2>
              </div>
              <div className="btn">
                <button className="bg-purple-600 text-lg text-white font-medium py-3 px-6 rounded-full hover:bg-purple-700 transition-colors">
                  Browse
                </button>
              </div>
            </div>

            {/* Portfolio Slider */}
            <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards,Mousewheel]}
      mousewheel={true}
      className="mySwiper"
    >
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>

            {/* Why Choose Us Section */}
            <div className="py-10 border-b border-r border-l border-gray-400 border-t-0 m-2">
              <div className="w-4/5 m-auto flex flex-wrap justify-between items-center">
                <div className="contact-heading w-full md:w-1/2">
                  <h2 className="text-2xl md:text-4xl font-semibold">Why Is Digital Whopper the Best Web Development Company in Jaipur?</h2>
                </div>
                <div className="flex bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 w-36 h-36 rounded-full">
                  <button className="w-full text-white font-semibold hover:scale-105 transition-transform">Contact</button>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="w-4/5 m-auto py-5">
              <p className="text-base md:text-lg mb-8">You've probably searched for <strong>web development services in Jaipur</strong> before. So what makes <strong>Digital Whopper</strong> different? We blend design, tech, and strategy to craft websites that don't just look good; they perform brilliantly. We're not just another <strong>web development company in Jaipur</strong>. We're your strategic growth partner.</p>
              
              <div className="flex py-20 flex-wrap gap-8">
                <p className="text-base md:text-lg w-full md:w-1/2">Here's what makes us different:</p>
                <div className="w-full text-left md:w-1/2 p-4">
                  {[
                    {
                      title: "Local Roots, Global Standards:",
                      content: "We're a Jaipur-based team delivering websites that compete on a global level."
                    },
                    {
                      title: "Experienced Developers + Creative Designers:",
                      content: "Our hybrid team ensures your website is both functional and beautiful."
                    },
                    {
                      title: "End-to-End Project Management:",
                      content: "From ideation to launch, we handle everything so you don't have to lift a finger."
                    },
                    {
                      title: "Data-Driven Development:",
                      content: "Every feature is backed by insights and focused on ROI."
                    },
                    {
                      title: "Transparent Pricing. No Hidden Costs:",
                      content: "You know what you're paying for, and it's worth every rupee."
                    }
                  ].map((item, index) => (
                    <div key={index} className="block py-1 border-b border-black w-full">
                      <div className="block relative w-full">
                        <button 
                          type="button"
                          onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                          className="flex justify-between items-center w-full py-4 text-left font-semibold hover:text-blue-900 transition-colors"
                        >
                          <p className="text-sm md:text-base">{item.title}</p>
                          <span className="ml-4">
                            <ChevronDown 
                              className={`w-6 h-6 bg-orange-500 text-white rounded-full p-1 transition-transform ${
                                openAccordion === index ? 'rotate-180' : ''
                              }`}
                            />
                          </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === index ? 'max-h-32' : 'max-h-0'
                        }`}>
                          <div className="py-4 text-gray-700 text-sm">
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-base md:text-lg">Looking for <strong>ecommerce development services</strong> that actually boost sales? We've built online stores that have increased conversions by up to 60% for our clients.</p>
            </div>

            {/* Testimonials Section */}
            <div className="w-4/5 m-auto bg-white p-8 rounded-3xl mb-32">
              <h2 className="text-2xl md:text-4xl font-semibold mb-6">Real Results and Satisfied Clients</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="px-4 lg:px-10 pt-10 pb-20 bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="py-7 text-sm md:text-base">
                      <p className="text-gray-800">{testimonial.text}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="rounded-full overflow-hidden">
                        <img alt={testimonial.name} width="60" height="60" className="w-15 h-15" src={testimonial.image} />
                      </div>
                      <div className="mt-1 px-2 md:px-6">
                        <h3 className="text-sm md:text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-xs text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-base md:text-lg mt-3">Want to see what we've built for others? Let's talk.</p>
            </div>

            {/* Company Info Section */}
            <div className="w-4/5 m-auto p-1 rounded-3xl mb-32 flex flex-wrap">
              <div className="images w-full md:w-1/2 rounded-lg relative">
                <img className="rounded-lg w-full h-96 object-cover" src="https://digitalwhopper.com/shopimage.jpg" alt="Company" />
                <div className="absolute right-6 top-60 bg-white rounded-lg p-8 shadow-lg">
                  <img src="https://digitalwhopper.com/Group%20208.svg" alt="Stats" className="mb-2" />
                  <h2 className="text-blue-900 text-2xl font-bold">30%</h2>
                  <p className="text-blue-900">More income in June</p>
                </div>
              </div>
              <div className="text w-full md:w-1/2 p-12">
                <h2 className="text-2xl md:text-4xl font-semibold pb-10">Who We Are: Jaipur's Leading Website Development Company</h2>
                <div className="container space-y-4">
                  {[
                    "Digital Whopper is not your average web development company in Jaipur.",
                    "We are a full-service digital marketing agency with a huge focus on web development in Jaipur.",
                    "Our team consists of highly skilled and vetted coders, designers, strategists and digital marketers that work day in and day out to bring you the results that you want. We've dealt and solved the issues that most businesses face online, and we have helped many across many industries to stand out."
                  ].map((text, index) => (
                    <p key={index} className="flex items-start mb-5">
                      <Check className="text-orange-500 mr-2 mt-1 w-5 h-5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{__html: text}} />
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="w-4/5 m-auto p-1 rounded-3xl mb-32 flex flex-wrap items-center">
              <div className="text w-full md:w-1/2 p-12">
                <h2 className="text-2xl md:text-4xl font-semibold">Our 4-Step Website Development Strategy</h2>
                <p className="text-base md:text-lg pb-4">We believe in doing things the smart way, not just the fast way. That's why our website development process is as streamlined as it is effective.</p>
                <div className="container space-y-4">
                  {[
                    {
                      step: "1. Discovery & Strategy",
                      description: "We start by understanding your goals, audience, and industry. What do you want the site to do? Let's map it out."
                    },
                    {
                      step: "2. Design & Prototyping", 
                      description: "Next, our designers create wireframes and mockups, visual blueprints that balance beauty and usability."
                    },
                    {
                      step: "3. Development & Testing",
                      description: "Our developers bring the designs to life using clean, scalable code. Then we test for speed, responsiveness, and bugs."
                    },
                    {
                      step: "4. Launch & Optimisation",
                      description: "Once live, we monitor your site's performance, make improvements, and ensure everything runs like clockwork. It's not just about launching a site, it's about launching a successful one."
                    }
                  ].map((item, index) => (
                    <div key={index} className="mb-5 bg-purple-600 text-white p-5 rounded-lg hover:bg-purple-700 transition-colors">
                      <div className="flex items-center mb-2">
                        <h3 className="text-base md:text-xl font-semibold">{item.step}</h3>
                      </div>
                      <p className="text-sm md:text-base">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="images w-full md:w-1/2 rounded-lg relative">
                <img className="rounded-lg w-full h-96 object-cover" src="https://digitalwhopper.com/center_image.jpg" alt="Process" />
                <div className="absolute right-6 top-60 bg-white rounded-lg p-8 shadow-lg">
                  <img src="https://digitalwhopper.com/Pie%20Graph.png" alt="Stats" className="mb-2" />
                  <p className="text-blue-900 text-sm">35% - Agile Development</p>
                  <p className="text-blue-900 text-sm">30% - Investor bandwidth</p>
                  <p className="text-blue-900 text-sm">35% - A/B testing</p>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <div className="w-4/5 m-auto">
            <div className="flex justify-between py-16">
              <div className="w-full text-center">
                <h2 className="text-center text-lg">Our Blog</h2>
                <h2 className="text-black text-3xl md:text-5xl">Value proposition accelerator product management venture</h2>
              </div>
            </div>
            <div className="container flex justify-between flex-wrap gap-10">
              {[1, 2, 3].map((item) => (
                <div key={item} className="artical w-full md:w-80 hover:transform hover:scale-105 transition-transform">
                  <div className="image">
                    <img src="https://digitalwhopper.com/blog.png" alt="Blog" className="rounded-3xl w-full" />
                  </div>
                  <div className="text">
                    <h2 className="text-black text-xl my-2">Category <span className="text-gray-500 text-xs">November 22, 2021</span></h2>
                    <p>In an ideal world, after a relationship ends both you and your ex will move on. But what if they can't let go, and start spying on your...</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn text-center py-16">
              <button className="border border-black text-lg font-medium py-3 px-6 rounded-full hover:bg-black hover:text-white transition-colors">
                Load More
              </button>
            </div>
          </div>

          {/* Final CTA */}
          <div className="w-4/5 m-auto mb-8">
            <h2 className="text-center text-2xl md:text-4xl font-semibold mb-6">Your Dream Website Is One Click Away!</h2>
            <p className="text-base md:text-lg mb-4">Still wondering if now is the right time to upgrade your website? 70% of users judge a business's credibility based on its website. That first impression? It matters a lot. So, if you need a slick new ecommerce platform, a custom business site, or just a much-needed website redesign,</p>
            <p className="text-base md:text-lg">Digital Whopper is the <strong>website development company in Jaipur</strong> that delivers beyond expectations. With our comprehensive <strong>website development services in Jaipur</strong>, your business will have the tools it needs to attract, engage, and convert visitors, day in, day out. Contact our expert team and get a website that scales with your business today!</p>
          </div>

          {/* Newsletter Section */}
          <div className="w-4/5 m-auto bg-blue-800 p-16 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500" style={{backgroundImage: "url('/bottom-design.svg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <h2 className="text-white text-2xl md:text-4xl text-center mb-6">An enterprise template to ramp up your company website</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-full md:w-80">
                <input 
                  id="email" 
                  type="email" 
                  placeholder="Enter The Email"
                  className="w-full rounded-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div className="w-full md:w-auto">
                <button className="bg-orange-500 text-lg text-white font-medium p-3 px-6 rounded-full hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl text-center mb-10 font-semibold">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-md shadow-md transition-all">
                  <div 
                    className="flex justify-between cursor-pointer p-6"
                    onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  >
                    <h3 className="font-semibold text-sm md:text-lg">{index + 1}. {faq.question}</h3>
                    <div className="p-1">
                      <Plus className={`h-5 w-5 text-black border border-black rounded-md transition-transform ${
                        faqOpen === index ? 'rotate-45' : ''
                      }`} />
                    </div>
                  </div>
                  {faqOpen === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WebDevelopmentLanding;