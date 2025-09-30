import React, { useState } from 'react';
import { Menu, X, Star, Phone, Facebook, Instagram, Linkedin, ChevronDown, ArrowRight } from 'lucide-react';
import Img1 from "../assets/HomePng/Rectangle 7 (1).png"
import Img2 from "../assets/HomePng/Rectangle 7.png"
import Img3 from "../assets/HomePng/Rectangle 834.png"
import heroImg from "../assets/navbaarpng/lines.svg";

const DigitalWhopperHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const services = [
    {
      title: "Web Design",
      link: "/web-development-company-in-jaipur"
    },
    {
      title: "App Development", 
      link: "/mobile-application-development-company-in-jaipur"
    },
    {
      title: "Ecommerce",
      link: "/ecommerce-marketing-services"
    }
  ];

  const testimonials = [
    {
      name: "Nikita Roy",
      role: "Fashion Brand Owner",
      rating: 5,
      text: "The team is quite supportive. They patiently listen to every query and understand what is needed. They have significantly improved online visibility."
    },
    {
      name: "Saurabh Sharma", 
      role: "Founder Home Décor Business",
      rating: 4.8,
      text: "We were in search of a company which can help us rank on top in search results. That's when we connected with the SEO team of Digital Whopper. Shortly after we started, we began to see positive results. The team is really professional and delivers impressive outputs."
    },
    {
      name: "Dev Saxena",
      role: "Small Business Owner", 
      rating: 4.8,
      text: "I had an offline store but also wanted to run an e-commerce business. However, my attempts didn't deliver the desired results. After we worked with Digital Whopper, they provided solutions and ran campaigns that brought good ROI. Really happy to work with them!"
    },
    {
      name: "Shruti Yadav",
      role: "Influencer",
      rating: 4.8, 
      text: "Thanks to the Social media manager of Digital Whopper! Our social media reach has significantly improved in the past few months. We've achieved quite good growth. We're really satisfied with their work."
    }
  ];

  const blogs = [
    {
      title: "Why It Is Important To...",
      excerpt: "Digital marketing is extremely important for any business to have a strong online presence...",
      link: "/why-it-is-important-to-choose-the-best-digital-marketing-service-provider-for-your-business-growth-in-2024-25",
      image: "https://digitalwhopper.com/_next/image?url=%2Fblog-1.jpg&w=1080&q=75"
    },
    {
      title: "How To Create LMS...",
      excerpt: "LMS Creation from Scratch: Training without a Learning Management System (LMS) is unrealis...",
      link: "/how-to-create-lms",
      image: "https://digitalwhopper.com/_next/image?url=%2Fblog-2.jpg&w=1080&q=75"
    },
    {
      title: "crafting-high-imp...",
      excerpt: "In the fast-evolving landscape of digital marketing, a well-executed PPC (Pay-Per-Click) campaign...",
      link: "/crafting-high-impact-ppc-campaigns-for-digital-marketing-success", 
      image: "https://digitalwhopper.com/_next/image?url=%2Fblog-3.jpg&w=1080&q=75"
    }
  ];


  const milestones = [
    { year: "2020", title: "Started our mission", active: true },
    { year: "2021", title: "Expansion", active: false },
    { year: "2022", title: "First Milestone", active: false },
    { year: "2023-24", title: "100+ Projects", active: false },
    { year: "2025", title: "Second Milestone", active: false }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-[rgba(225,225,225,1)]  min-h-screen pt-40">
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
      <section className="relative flex flex-col justify-center items-center">
        <div className="relative flex justify-end w-full">
          <div className="absolute w-full md:w-[65%] lg:w-[65%] flex items-center justify-center z-[-1] animate-spin">
            <img src="/lines.svg" alt="SVG" className="w-full h-full" />
          </div>
        </div>
        
        <div className="text-section w-[85%] m-auto pt-5">
          <div className="w-full text-left">
            <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold leading-tight">
              <span>Grow your brand online with the </span>
              <span className="block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
                  best digital marketing company in Jaipur 
                </span>
              </span>
            </h1>
            
            <p className="pt-12 text-[clamp(0.3rem,3vw,0.9rem)] w-full text-left">
              <span className="block">Welcome to Digital Whopper! Your only destination to achieve integrated digital growth!</span>
              <span className="block">Boost your brand's visibility, generate leads and drive conversions!</span>
              We combine human creativity with the latest technologies to provide the best results.
              With AI ruling the digital world, we recreate brand identity to be more customer-centric.
              We develop unique data-driven marketing strategies for your brand that connect with your ideal audience.
              We've helped over 50 brands boost visibility, generate leads and increase ROI. No matter your business size,
              we are the <strong>best digital marketing company in Jaipur</strong> you can find to grow your brand.
              Your success is our mission!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 py-16 w-full">
          <div className="relative w-[65%] md:w-[30%] lg:w-[15%]">
            <img src="https://digitalwhopper.com/Group.svg" alt="Logo" className="absolute top-[-18%] left-[-18%] " />
            <a href="/Contact">
              <button className="bg-black text-xs lg:text-base text-white font-bold p-4 rounded-full w-full">
                Enquire now!
              </button>
            </a>
          </div>
          <div className="w-[80%] md:w-[30%] lg:w-[15%]">
            <a href="/Contact">
              <button className="font-bold w-full bg-transparent border-2 border-black text-xs lg:text-base text-black p-4 rounded-full">
                Contact
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* MacBook Image */}
      <div className="w-full">
       <img 
       src="https://digitalwhopper.com/bottom.svg" 
       alt="MacBook" 
       className="absolute mt-[-55px] left-[22%] max-w-2xl"
       />
        <p class="text-black Feature font-[cursive] text-[clamp(0.5rem,3vw,1rem)] absolute mt-[-70px] left-[17%] max-w-2xl">Awsome<span class="block text-[clamp(0.5rem,3vw,1rem)]"> Feature</span> </p>
        <img src="	https://digitalwhopper.com/curve-bottom.svg" alt="MacBook" className=" max-w-1xl absolute mt-[-85px] right-[21%] max-w-2xl" />
        <p class="text-black Feature font-[cursive] text-[clamp(0.5rem,3vw,1rem)] absolute mt-[-95px] right-[11%] max-w-2xl">Awsome<span class="block text-[clamp(0.5rem,3vw,1rem)]"> Product Feature</span> </p>
        
        <img src="https://digitalwhopper.com/_next/image?url=%2FMacbook.png&w=2048&q=75" alt="MacBook" className="m-auto w-full max-w-4xl" />
      </div>

      {/* Strategy Section */}
      <section className="relative w-full">
        <div className="relative flex justify-end w-full">
          <div className="absolute w-full animate-spin z-[-1]">
            <img src="/lines2.svg" alt="SVG" className="w-full h-full" />
          </div>
        </div>
        
        <div className="text-section w-[85%] m-auto pt-5">
          <h2 className="text-gray-700 text-center text-[clamp(1rem,4vw,3rem)] font-semibold">
            Our <span className="text-orange-500">Strategy</span>
          </h2>
          
          <div className="w-[85%] m-auto flex justify-center mt-10 flex-wrap">
            <div className="w-full sm:w-auto text-left flex flex-col gap-5 md:gap-20">
              <div>
                <h3 className="text-gray-700 text-[clamp(1rem,3vw,2rem)] font-semibold mb-3">The Spark</h3>
                <p className="text-gray-500 text-lg">Turning Vision to Reality</p>
              </div>
              <div>
                <h3 className="text-gray-700 text-[clamp(1rem,3vw,2rem)] font-semibold mb-3">Foundation</h3>
                <p className="text-gray-500 text-lg">Blending technology with human creativity</p>
              </div>
              <div>
                <h3 className="text-gray-700 text-[clamp(1rem,3vw,2rem)] font-semibold mb-3">Strategic Growth</h3>
                <p className="text-gray-500 text-lg">Scale with Vision</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center w-full md:w-1/3">
              {[1, 2, 3].map((item, index) => (
                <React.Fragment key={item}>
                  <div className="border-2 border-dashed border-black rounded-full p-4">
                    <div className="w-10 h-10 bg-orange-400 rounded-full"></div>
                  </div>
                  {index < 2 && <div className="h-28 border-l-2 border-dashed border-gray-600"></div>}
                </React.Fragment>
              ))}
            </div>
            
            <div className="w-full sm:w-auto text-left flex flex-col gap-5 md:gap-20">
              <div>
                <h3 className="text-gray-700 text-[clamp(1rem,3vw,2rem)] font-semibold mb-3">Digital Excellence</h3>
                <p className="text-gray-500 text-lg">Passion, Precision, and Mastery</p>
              </div>
              <div>
                <h3 className="text-gray-700 text-[clamp(1rem,3vw,2rem)] font-semibold mb-3">Innovation Drive</h3>
                <p className="text-gray-500 text-lg">Pushing boundaries with unique strategies</p>
              </div>
              <div>
                <h3 className="text-gray-700 text-[clamp(1rem,3vw,2rem)] font-semibold mb-3">Client Expansion</h3>
                <p className="text-gray-500 text-lg">Building across diverse sectors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="relative w-full md:w-[50%] m-auto">
        <h2 className="text-gray-700 text-center mt-20 text-[clamp(1rem,4vw,3rem)] font-semibold">
          Testimonials That <br />Speak <span className="text-orange-500">to My Results</span>
        </h2>
        <img src="https://digitalwhopper.com/Vector1.svg" alt="Logo" className="absolute top-[-20%] right-[20%]" />
      </div>
      
      <p className="text-gray-700 w-full md:w-[50%] m-auto text-center mt-5 text-[clamp(0.5rem,3vw,1rem)]">
        We're not merely boasting of our achievements. Our clients have observed an actual transformation.
        Have a look at their words that reflect the results we delivered!
      </p>

      {/* Testimonial Cards */}
      <div className="w-full px-4 py-8 overflow-x-auto"> 
        <div className="flex gap-6 min-w-max">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-80 bg-white p-5 rounded-2xl flex-shrink-0">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-4xl text-gray-300">"</div>
              </div>
              <p className="mt-4 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Makes Us Best Section */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 w-[85%] m-auto rounded-2xl">
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <img src="https://digitalwhopper.com/_next/image?url=%2Fsitting.png&w=1920&q=75" alt="Icon" className="rounded-full" />
          </div>
          <div className="w-1/2 flex flex-col justify-center p-8">
            <h2 className="text-white font-semibold text-[clamp(0.5rem,3vw,2rem)]">
              What Makes Digital Whopper 
            </h2>
            <h2 className="text-[clamp(1rem,5vw,6rem)] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-orange-500">
              the Best Digital Marketing Agency in Jaipur?
            </h2>
          </div>
        </div>
      </div>
    {/* Blog Section */}
      <section className="w-[84%] m-auto">
        <div className="flex justify-between m-12">
          <div>
            <h2 className="text-black text-[clamp(1rem,4vw,3rem)]">Our latest articles & resources</h2>
          </div>
          <div>
            <a href="/Blog">
              <button className="bg-blue-600 text-lg text-white font-medium py-1 px-4 rounded-full">
                Browser All 
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between md:flex-row md:flex-wrap gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="relative m-6 p-6 bg-orange-500 rounded-2xl w-64 h-96 flex items-center justify-center rotate-[357deg] shadow-md">
              <div className="absolute inset-0 rotate-[3deg] rounded-2xl overflow-hidden">
                <a href={blog.link}>
                  <div>
                    <img src={blog.image} alt={blog.title} className="w-full h-44 rounded-t-2xl" />
                    <button className="absolute top-2 left-2 bg-white px-4 py-1.5 font-bold text-sm rounded-2xl">
                      Digital Whopper
                    </button>
                    <div className="bg-white h-52 text-center rounded-b-2xl px-3 py-4">
                      <h2 className="font-bold text-base leading-tight">{blog.title}</h2>
                      <p className="text-sm pt-2 text-gray-600">{blog.excerpt}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <div className="w-[80%] m-auto">
        <div className="flex items-center justify-between py-16 flex-wrap">
          <h2 className="font-medium text-black text-[clamp(1rem,4vw,3rem)] text-left w-full md:w-[60%]">
            My <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-[clamp(0.3rem,3vw,0.9rem)] text-center md:text-justify w-full md:w-[40%]">
            Explore the diverse range of digital marketing services we offer to elevate your digital impression.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-400 rounded-[35px] relative hover:bg-orange-400 transition-colors duration-500 overflow-hidden">
              <h2 className="text-3xl p-8">{service.title}</h2>
              <hr className="text-white" />
              <div className="relative mt-5 h-80">
                <div className="w-full h-full bg-gray-600 rounded-[35px] absolute group-hover:scale-105 transition-transform duration-500"></div>
                <div className="w-full h-full rounded-[35px] bg-gray-500 absolute top-10 group-hover:scale-105 transition-transform duration-500"></div>
                <div 
                  className="w-full h-72 rounded-2xl absolute top-16 group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                  style={{backgroundImage: 'url(/Sevice1.jpg)'}}
                ></div>
                <a href={service.link}>
                  <div className="w-24 h-24 rounded-full bg-gray-800 absolute flex justify-center items-center text-white bottom-0 right-0 group-hover:bg-orange-400 transition-colors">
                    <ArrowRight className="text-4xl" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Let's Whoop Section */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-[clamp(1.5rem,5vw,4rem)] font-bold text-gray-900">
              Let's Whoop <br /> Your Business
            </h1>
          </div>
          <div>
            <button className="bg-orange-400 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Know us better!
            </button>
            <p className="text-gray-700 mb-4 text-[clamp(0.5rem,3vw,1rem)]">
              We provide 360° online marketing services. From SEO and social media campaigns to complete branding solutions, 
              we work to make your brand dominate the digital market. Our expert team uses ethical tactics to give your brand 
              exponential organic growth. Building a Start-up? Expanding an established business? We'll help you build your brand online.
            </p>
            <p className="text-gray-500 text-[clamp(0.5rem,3vw,1rem)]">
              Still confused about which <strong>digital marketing agency in Jaipur</strong> will be best for you? 
              Well then, explore our portfolio! We've scaled start-ups like Mani, Ekatra etc. and made them people favourite! 
              We proudly say that we're the <strong>best digital marketing company in Jaipur</strong> that offers comprehensive 
              services essential for your brand to thrive in the digital world.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative flex justify-end w-full bottom-0 bg-[url('https://digitalwhopper.com/lastline.svg')] bg-cover">
  <div className="w-[85%] m-auto flex flex-wrap flex-col-reverse md:flex-row rounded-2xl p-6">
    <div className="w-full md:w-1/2">
      <div className="w-full">
        <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-bold leading-tight">
          <span>Hey there! Looking for a service? </span>
          <span>Whoppy is here to help you! Give me a ping!</span>
        </h2>
        <p className="pt-12 text-[clamp(0.3rem,3vw,0.9rem)] w-full">
          Tell me what you want. Increase ROI? Develop an app? Or any other service? Let's Chat!
        </p>
      </div>
    </div>
    <div className="w-full md:w-1/2">
      <div className="w-full">
        <img
          src="https://digitalwhopper.com/_next/image?url=%2FRobot.png&w=828&q=75"
          alt="robot"
          className="ml-auto w-full max-w-md"
        />
      </div>
    </div>
  </div>
</div>

 </div>
  )
};

export default DigitalWhopperHomepage;