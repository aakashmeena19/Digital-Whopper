import React, { useState, useEffect } from "react";
import { ArrowRight, Upload, Share, Shield, Globe, Code, Smartphone, Award, Settings } from 'lucide-react';
import heroImg from "../assets/navbaarpng/lines.svg";


import Img1 from "../assets/AppDevelopmentPng/6b34818801073b517ec76a531abb0fe7d0c5fbf7.png"
const AppDevelopmentSection = () => {
  const [activeTab, setActiveTab] = useState('Application');
  const [counts, setCounts] = useState({
    campaigns: 0,
    satisfaction: 0,
    countries: 0,
    experts: 0
  });

  // Animation function for counters
  const animateCounter = (target, key, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCounts(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounts(prev => ({ ...prev, [key]: Math.floor(start) }));
      }
    }, 16);
  };

  // Initialize counters on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      animateCounter(150, 'campaigns');
      animateCounter(95, 'satisfaction');
      animateCounter(40, 'countries');
      animateCounter(25, 'experts');
    }, 500); // Delay to start animation

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="bg-[rgba(225,225,225,1)] py-40 px-5 md:px-20">
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
      {/* Header Section */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          File storage and sharing for remote <br/> teams that work together on {""}
          <span className="text-indigo-600">Web3</span>
        </h2>
        <p className="mt-4 text-gray-500 text-lg">
          Deupload is a online file manager on decentralized cloud storage and IPFS that
          allows you <br/> storage, share, collect files privately, and team collaboration without subscription.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-300 transition">
            Pricing
          </button>
        </div>
      </div>

      {/* Image + Illustration Section */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1">
          <img
            src="https://digitalwhopper.com/_next/image?url=%2Fvectorimg.png&w=1920&q=80"
            alt="App Illustration"
            className="rounded-xl"
          />
        </div>
      </div>
      
      {/*Text Section */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Lightning fast. Better privacy. Fairer cost.
        </h2>
        <p className="mt-4 text-gray-500 text-lg">
          You can choose continue to use centralized cloud storage but we have some better reasons for you to <br/>start moving to decentralized storage because it is simply the future of the internet.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-20 text-center px-24">
        <div className="bg-blue-600 p-6 rounded-xl shadow hover:shadow-lg transition text-left">
          <div className="text-white text-8xl mb-4">💨</div>
          <h3 className="text-3xl text-white font-bold mb-2">Lightweight</h3>
          <p className="text-white">
            Designed to be lightweight to help you enhance team collaboration by organizing and sharing files in your projects without stress.
          </p>
          <button className=" text-white font-bold py-6 rounded-md hover:bg-indigo-700 transition">
            Products features 
          </button>
        </div>
        <div className="bg-blue-600 p-6 rounded-xl shadow hover:shadow-lg transition text-left">
          <div className="text-white text-8xl mb-4">🌐</div>
          <h3 className="text-3xl text-white font-bold mb-2">Decentralization</h3>
          <p className="text-white">
           Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy and lightning speed by design.
          </p>
          <button className=" text-white font-bold py-6 rounded-md hover:bg-indigo-700 transition">
            How it works 
          </button>
        </div>
        <div className="bg-blue-600 p-6 rounded-xl shadow hover:shadow-lg transition text-left">
          <div className="text-white text-8xl mb-4">🔓</div>
          <h3 className="text-3xl text-white font-bold mb-2">No subscription</h3>
          <p className="text-white">
            With Pay-as-you-go pricing, now you only pay for the resource you use without being charged a flat monthly fee even if you don't use it up.
          </p>
          <button className=" text-white font-bold py-6 rounded-md hover:bg-indigo-700 transition">
            Metered billing
          </button>
        </div>
      </div>

      {/* Try the App Section */}
      <div className="py-20 min-h-screen">
        {/* Header Section */}
        {/* Toggle Button Section */}
          <div className="flex justify-center mt-8 mb-6">
            <div className="bg-orange-400 rounded-full p-1 flex">
              <button
                onClick={() => setActiveTab('Application')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'Application'
                    ? 'bg-white text-black shadow-md'
                    : 'text-white hover:bg-orange-300'
                }`}
              >
                Application
              </button>
              <button
                onClick={() => setActiveTab('Websites')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'Websites'
                    ? 'bg-white text-black shadow-md'
                    : 'text-white hover:bg-orange-300'
                }`}
              >
                Websites
              </button>
            </div>
          </div>
        <div className="text-center py-12 ">
          <h1 className="text-6xl font-bold text-black mb-4">Try the App</h1>
          <p className="text-gray-800 font-semibold mx-auto px-4 text-xl">
            Have meals delivered to you within minutes from a wide <br/> variety of restaurants ranging from African to Continental <br/> cuisines to satisfy your cravings.
          </p>
          
          {/* App Store Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                </div>
                <span>Google Play</span>
              </button>
            </a>
            <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <div className="text-white text-xl">🍎</div>
                <span>App Store</span>
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Image Section */}
        <div className="flex justify-center pb-12">
          <div className="relative">
            {/* Floating Food Icon */}
            <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full flex items-center justify-center z-10">
              <div className="text-9xl">🍕</div>
            </div>
            
            {/* Mobile Image */}
            <div className="relative max-w-sm mx-auto">
              <img 
                src={Img1}
                alt="Food Delivery App Mobile Screenshot"
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </div>
      <section className=" py-32 px-6">
      {/* Header */}
      <div className="text-left mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-2">
          Lightweight design, ready to
        </h2>
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
          use for <span className="text-blue-500">team productivity.</span>
        </h2>
      </div>

      {/* Top Row - File Sharing & Collect Files */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-7xl mx-auto">
        {/* File Sharing Card */}
        <div className="bg-orange-50 text-center rounded-3xl p-12 relative overflow-hidden">
          <div className="mb-8">
            <h3 className="text-5xl font-bold text-blue-500 mb-4">File Sharing</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Securely share files within or outside your
              <br />
              organization, and control access, track edits, and
              <br />
              analyze the shared content stats.
            </p>
          </div>
          
          {/* Placeholder for File Sharing Image */}
          <div className="relative">
            <img 
              src="https://digitalwhopper.com/_next/image?url=%2Fleftfile.png&w=828&q=80" 
              alt="File Sharing Interface"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Collect Files Card */}
        <div className="bg-[rgba(224,247,250,255)] rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="mb-8">
            <h3 className="text-5xl font-bold text-blue-500 mb-4">Collect Files</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              You can collect and receive files in a secure
              <br />
              environment, even if the other person doesn't have a
              <br />
              Deupload account.
            </p>
          </div>
          
          {/* Placeholder for Collect Files Image */}
          <div className="relative">
            <img 
              src="https://digitalwhopper.com/_next/image?url=%2Frightfile.png&w=828&q=80" 
              alt="Collect Files Interface"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Row - Team Collaboration */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-[rgba(236,236,254,1)] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blue-500">Team collaboration</span>
                <span className="text-black"> in one simple place with privacy come first.</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Securely share and work together with Deupload's
                <br />
                simple file storage and sharing, easy user management,
                <br />
                unlimited file size, password protected links and more.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors">
                  Start now
                </button>
                <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors">
                  More features
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img 
                src="https://digitalwhopper.com/_next/image?url=%2FConsulting.png&w=1080&q=80" 
                alt="Team Collaboration Interface"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className=" py-32 px-6">
      {/* Top Section - Decentralized Storage */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Decentralized storage
              <br />
              built for <span className="text-blue-500">better privacy.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Store data securely on over 18k nodes worldwide instead of just a few
              <br />
              vulnerable data centers with privacy. Truly files encrypted, split into
              <br />
              pieces, and stored on a global network of nodes, making data
              <br />
              decentralized decentralized a thing of the past.
            </p>

            {/* Bottom Features */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl">↗️</div>
                </div>
                <h3 className="font-bold text-lg mb-2">Upgrade your storage.</h3>
                <p className="text-gray-600 text-sm">
                  Better security, performance and cost,
                  <br />
                  Deupload is the better way to store data.
                </p>
                <button className="text-cyan-400 font-medium text-sm mt-2 hover:underline">
                  Learn more →
                </button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl">✓</div>
                </div>
                <h3 className="font-bold text-lg mb-2">Carbon neutral storage.</h3>
                <p className="text-gray-600 text-sm">
                  Utilizing existing unused storage capacity
                  <br />
                  on recycled hardware around the world.
                </p>
                <button className="text-green-400 font-medium text-sm mt-2 hover:underline">
                  Environmental impact →
                </button>
              </div>
            </div>
          </div>

          {/* Right Features Cards */}
          <div className="space-y-6">
            {/* Private by design */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Private by design</h3>
                  <p className="text-gray-600 text-sm">
                    We believe data privacy is a human right, which is why
                    <br />
                    Deupload is built as a decentralized service, one that
                    <br />
                    makes data breaches a thing of the past.
                  </p>
                </div>
              </div>
            </div>

            {/* Distributed network */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Distributed network</h3>
                  <p className="text-gray-600 text-sm">
                    Your data is safe on the decentralized network, with 80 pieces,
                    <br />
                    and distributed to unconnected Nodes. When you call for
                    <br />
                    the data, it is automatically reconstructed as an instant.
                  </p>
                </div>
              </div>
            </div>

            {/* Worldwide availability */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Worldwide availability</h3>
                  <p className="text-gray-600 text-sm">
                    Data is stored on Nodes that are selected by reputation
                    <br />
                    and local history. The better Nodes from this service
                    <br />
                    allows us your globally, ensuring data delivery to your users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Mobile App */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2 uppercase tracking-wide">
            PREMIUM ACCOUNTS & COUNTING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            No hidden fees. No credit checks.
          </h2>
          <p className="text-gray-600 text-xl">
            No more barriers to building credit.
          </p>
        </div>

        {/* Mobile App Showcase */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Features */}
            <div className="space-y-8">
              <div className="text-left">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">User-Centric Design</h3>
                <p className="text-gray-600 text-sm">
                  Everything is designed to meet
                  <br />
                  user needs and exceed
                  <br />
                  expectations.
                </p>
              </div>

              <div className="text-left">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Scalable and Secure Architecture</h3>
                <p className="text-gray-600 text-sm">
                  Robust architectures that ensure
                  <br />
                  scalability and data security.
                </p>
              </div>
            </div>

            {/* Center Mobile Image */}
            <div className="flex justify-center lg:col-span-1">
              <div className="relative">
                <img 
                  src="https://digitalwhopper.com/_next/image?url=%2FappMob.png&w=3840&q=80" 
                  alt="Mobile App Interface"
                  className="w-full max-w-xl h-auto"
                />
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-8">
              <div className="text-left">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Cross-Platform Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Leveraging the latest technologies for
                  <br />
                  multi-platform reach and impact.
                </p>
              </div>

              <div className="text-left">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Agile Development</h3>
                <p className="text-gray-600 text-sm">
                  Flexibility, speed and quality in
                  <br />
                  every application of client
                  <br />
                  requirements throughout the
                  <br />
                  development process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className=" py-16 bg-white ">
      {/* Top Section - Meet the Experts */}
      <div className="max-w-7xl mx-auto  mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Stats and Image */}
          <div className="relative">
            {/* Stats Cards */}
            <div className="bg-gray-200 rounded-3xl p-8 relative overflow-hidden">
              {/* Stats */}
              <div className="space-y-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-black mb-1">{counts.campaigns}+</div>
                  <div className="text-gray-600 text-sm">Campaigns</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-black mb-1">{counts.satisfaction}%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-black mb-1">{counts.countries}+</div>
                  <div className="text-gray-600 text-sm">Country Reach</div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-black mb-1">{counts.experts}+</div>
                  <div className="text-gray-600 text-sm">Certified Experts</div>
                </div>
              </div>

              {/* Central Illustration */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <div className="relative">
                  <img 
                    src="https://digitalwhopper.com/_next/image?url=%2Fabout.png&w=1080&q=80" 
                    alt="Expert Team Illustration"
                    className="w-96 h-auto rounded-2xl"
                  />
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">💡</span>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📊</span>
                  </div>
                  
                  <div className="absolute top-8 -right-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✨</span>
                  </div>
                  
                  <div className="absolute bottom-16 -right-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🎯</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-4">
              <span className="text-purple-600 font-medium text-sm uppercase tracking-wide">
                — About Us —
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Meet the Experts Behind
              <br />
              Your Online Success
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              SSDC is more than just an SEO and digital marketing agency – we are a team of
              <br />
              passionate professionals committed to your success. Our journey began with a
              <br />
              simple goal: to help businesses navigate the complex digital landscape and
              <br />
              achieve measurable growth.
            </p>
            
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-purple-700 transition-colors">
              Discover More
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - How it Works */}
      
    </section>
<div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            How it works?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Deupload removes complexity and offers a simple interface that allows users to take advantage
            <br />
            of the vast array of decentralized storage with better security, performance, and pricing.
          </p>
        </div>

        {/* Three Steps */}
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-white text-2xl">👤</div>
            </div>
            <h3 className="text-xl font-bold mb-4">Create an account</h3>
            <p className="text-gray-600">
              Create an Deupload account and start
              <br />
              uploading your files to Decentralized Storage.
            </p>
          </div>

          {/* Connector Line */}
          <div className="hidden md:block">
            <div className="border-t-2 border-dashed border-gray-300 w-full"></div>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Upload your files</h3>
            <p className="text-gray-600">
              Your file is encrypted and split into pieces then
              <br />
              distributed to the nodes around the world.
            </p>
          </div>

          {/* Connector Line */}
          <div className="hidden md:block">
            <div className="border-t-2 border-dashed border-gray-300 w-full"></div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Share className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Share file instantly</h3>
            <p className="text-gray-600">
              Send your file via email or shareable link with
              <br />
              password protect and expiration time.
            </p>
          </div>
        </div>
      </div>
      

      
    </section>
  );
};

export default AppDevelopmentSection;