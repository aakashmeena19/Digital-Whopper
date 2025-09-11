import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: 'IN',
    subject: '',
    message: '',
    services: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="w-full bg-[rgba(225,225,225,1)] py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-8 mt-36 relative ">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Let's level up your brand, together
          </h1>
          <p className="text-gray-600 mb-2">You can reach us anytime via</p>
          <a 
            href="mailto:digitalwhopperhelp@gmail.com" 
            className="text-orange-500 hover:text-orange-600 transition-colors"
          >
            digitalwhopperhelp@gmail.com
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                Reach out to us anytime — we'd love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-700">+91-6200379161</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-700">
                  3rd Floor, 4/11, Vidyut Abhiyanta Colony, <br />
                  Sector 4, Malviya Nagar, Jaipur, Rajasthan 302017
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-700">digitalwhopperhelp@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-4">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone number
              </label>
              <div className="flex">
                <select 
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="px-3 py-3 border border-gray-300 rounded-l-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="IN">IN</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="CA">CA</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 (555) 000-0000"
                  className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="How can we help you?"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Services Section */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Services
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Website design',
                  'Content creation',
                  'UX design',
                  'Strategy & consulting',
                  'User research',
                  'Other'
                ].map((service) => (
                  <label key={service} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us a little about the project..."
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-8 max-w-7xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3559.677374596132!2d75.81637976117246!3d26.850211981842143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db70d6ddc5739%3A0x26f55464d633e961!2sDigital%20Whopper%20(digital%20marketing%20agency%20in%20Jaipur)!5e0!3m2!1sen!2sin!4v1756465391608!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactSection;