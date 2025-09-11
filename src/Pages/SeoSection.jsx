import React from 'react';
import { Search, ArrowRight, Star, Users, TrendingUp, Target, MessageCircle, BarChart3, Eye, Edit3 } from 'lucide-react';

const SEOLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <div className="relative ">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-8 h-8 bg-purple-500 rounded-full opacity-20"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-30"></div>
        <div className="absolute bottom-10 left-1/4 w-4 h-4 bg-pink-500 rounded-full opacity-25"></div>
        
        {/* Main Header Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          {/* Top Badge */}
          <div className="text-center mb-8">
            <span className="inline-block bg-white px-4 py-2 rounded-full text-sm text-gray-600 shadow-sm">
              Top #1 SEO & Marketing Agency
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Local SEO Tactics To <br />
              <span className="text-purple-600">Dominate</span> Your Market
            </h1>
          </div>
          
          {/* Search Bar */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full shadow-lg p-2 flex items-center max-w-md w-full">
              <input 
                type="text" 
                placeholder="Enter your business"
                className="flex-1 px-4 py-3 rounded-full outline-none text-gray-700"
              />
              <input 
                type="text" 
                placeholder="Zip code/Zip/Postcode"
                className="flex-1 px-4 py-3 rounded-full outline-none text-gray-700 border-l border-gray-200"
              />
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-700 transition-colors">
                Start AI Audit <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          {/* Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">Driving rankings</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">Advanced solutions</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">Smart strategies</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">SEO insights</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">Primary solutions</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">Writing process</span>
          </div>
          
          {/* Welcome Text */}
          <div className="text-center mt-16 max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to SEOC, where we specialize in revolutionizing your online presence through expert SEO and digital marketing solutions.
            </p>
          </div>
        </div>
        
        {/* Decorative Arrows */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="w-12 h-12 border-2 border-purple-300 border-dashed rounded-full flex items-center justify-center">
            <ArrowRight className="text-purple-400" size={20} />
          </div>
        </div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="w-12 h-12 border-2 border-blue-300 border-dashed rounded-full flex items-center justify-center">
            <ArrowRight className="text-blue-400 transform rotate-45" size={20} />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center">
                <img src="https://digitalwhopper.com/Figure.png" alt="Profile" className="w-full h-full object-cover rounded-2xl" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-purple-600 text-sm font-medium">
                  <div className="w-6 h-6 border border-purple-600 rounded-full flex items-center justify-center">
                    <Star size={14} />
                  </div>
                  ABOUT SEOC
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900">
                  Comprehensive SEO<br />
                  & Digital <span className="text-purple-600">Marketing</span><br />
                  Solutions.
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  Welcome to SEOC, your trusted partner for comprehensive SEO strategies. Operating across India. With a data-driven approach, we drive sustained growth and enhanced online visibility for businesses of all sizes.
                </p>
                
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-purple-700 transition-colors">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="relative">
              <div className="absolute top-4 right-4 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
              </div>
              <div className="bg-gray-100 rounded-3xl p-8 h-80 flex items-end">
                <img src="https://digitalwhopper.com/Figure2.png" alt="Team member" className="w-full h-48 object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-purple-600 text-sm font-medium mb-2">📊 Case Study</div>
            <h2 className="text-3xl font-bold text-gray-900">
              Our Handpicked Digital<br />
              Marketing Case Study
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-40 bg-blue-100 relative">
                <img src="https://digitalwhopper.com/Link.png" alt="Web Design" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">Website Design & Development</h3>
                  <p className="text-white text-sm opacity-90">Brand marketing platform</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-40 bg-purple-900 relative">
                <img src="https://digitalwhopper.com/Link%20(1).png" alt="SEO" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">SEO</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-40 bg-orange-400 relative">
                <img src="https://digitalwhopper.com/Link%20(2).png" alt="PPC Management" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">PPC Management</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-40 bg-gray-800 relative">
                <img src="https://digitalwhopper.com/Link%20(3).png" alt="Content Marketing" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold">Content Marketing</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              VIEW MORE CASE STUDY
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-purple-600 text-sm font-medium mb-2">🌟 Our Service</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Comprehensive Suite Of<br />
              Digital Marketing <span className="text-purple-600">Services.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Service 01 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="text-purple-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-purple-600 text-4xl font-bold mb-2">01</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Keyword Research and Strategy</h3>
                  <p className="text-gray-600 mb-4">
                    Discover profitable keywords and craft tailored strategies that drive targeted traffic and boost your search rankings effectively.
                  </p>
                  <button className="text-purple-600 font-semibold flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Service 02 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-purple-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-purple-600 text-4xl font-bold mb-2">02</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">On-Page SEO Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance website performance and improve search engine visibility through strategic on-page optimization techniques.
                  </p>
                  <button className="text-purple-600 font-semibold flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Service 03 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="text-purple-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-purple-600 text-4xl font-bold mb-2">03</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technical SEO Audits</h3>
                  <p className="text-gray-600 mb-4">
                    Identify and resolve technical issues that may hurt your site's performance with comprehensive SEO audits and optimization.
                  </p>
                  <button className="text-purple-600 font-semibold flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Service 04 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Edit3 className="text-purple-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-purple-600 text-4xl font-bold mb-2">04</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Content Creation and Link Building</h3>
                  <p className="text-gray-600 mb-4">
                    Create high-quality content and build authoritative links that enhance your website's credibility and search rankings.
                  </p>
                  <button className="text-purple-600 font-semibold flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center Icon */}
          <div className="flex justify-center mb-12">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <Target className="text-purple-600" size={32} />
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              View More Services
            </button>
          </div>
        </div>
      </div>

      {/* Why Partner Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <div className="text-purple-600 text-sm font-medium mb-2">📈 Our Work Process</div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Why Partner With SEOC Your Path<br />
                  To<br />
                  <span className="text-purple-600">SEO & Digital Marketing Success</span>
                </h2>
              </div>
              
              {/* Process Steps */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Strategy Development</h4>
                    <p className="text-gray-600 text-sm">
                      Based on our analysis, we develop customized digital marketing strategy tailored to your industry and objectives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Monitoring & Optimization</h4>
                    <p className="text-gray-600 text-sm">
                      We continuously monitor performance and optimize campaigns to improve results and ROI.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Continuous Improvement</h4>
                    <p className="text-gray-600 text-sm">
                      We focus on continuous improvement to adapt and evolve our approach to keep ahead of the market trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="relative h-80">
                  <img src="/api/placeholder/400/300" alt="Team collaboration" className="w-full h-full object-cover rounded-2xl" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-lg text-sm">
                    <Users size={16} />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white p-2 rounded-lg text-sm">
                    <TrendingUp size={16} />
                  </div>
                  <div className="absolute top-1/2 left-4 bg-purple-500 text-white p-2 rounded-lg text-sm">
                    <Target size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOLandingPage;