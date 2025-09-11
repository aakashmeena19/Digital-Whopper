// AppDevelopmentSection.jsx
import React from "react";

const AppDevelopmentSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-5 md:px-20">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          File storage and sharing for remote teams that work together on{" "}
          <span className="text-indigo-600">Web3</span>
        </h2>
        <p className="mt-4 text-gray-500 text-lg">
          Deupload is a online file manager on decentralized cloud storage and IPFS that
          allows you storage, share, collect files privately, and team collaboration without subscription.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition">
            Pricing
          </button>
        </div>
      </div>

      {/* Image + Illustration Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20">
        <div className="flex-1">
          <img
            src="https://digitalwhopper.com/_next/image?url=%2Fvectorimg.png&w=1920&q=80"
            alt="App Illustration"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Feature 1"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Feature 2"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Feature 3"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Feature 4"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
        <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="text-indigo-600 text-3xl mb-4">💨</div>
          <h3 className="text-xl font-bold mb-2">Lightweight</h3>
          <p className="text-gray-500">
            Designed to be lightweight to help you enhance team collaboration by organizing and sharing files in your projects without stress.
          </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="text-indigo-600 text-3xl mb-4">🌐</div>
          <h3 className="text-xl font-bold mb-2">Decentralization</h3>
          <p className="text-gray-500">
            Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy and lightning speed.
          </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="text-indigo-600 text-3xl mb-4">🔓</div>
          <h3 className="text-xl font-bold mb-2">No subscription</h3>
          <p className="text-gray-500">
            With Pay-as-you-go pricing, you only pay for the resource you use without being charged a flat monthly fee even if you don't use it.
          </p>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How it works?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Deupload removes complexity and offers a simple interface that allows users to take advantage
          of decentralized storage with better security, performance, and pricing.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex-1 bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <div className="text-indigo-600 text-4xl mb-4">👤</div>
          <h3 className="text-xl font-bold mb-2">Create an account</h3>
          <p className="text-gray-500">
            Create an Deupload account and start uploading your files to Decentralized Storage.
          </p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <div className="text-indigo-600 text-4xl mb-4">☁️</div>
          <h3 className="text-xl font-bold mb-2">Upload your files</h3>
          <p className="text-gray-500">
            Your file is encrypted and split into pieces then distributed to nodes around the world.
          </p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <div className="text-indigo-600 text-4xl mb-4">📤</div>
          <h3 className="text-xl font-bold mb-2">Share file instantly</h3>
          <p className="text-gray-500">
            Send your file via email or shareable link with password protection and expiration time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentSection;
