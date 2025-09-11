import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Why It Is Important To...",
      desc: "Digital marketing is extremely important for any business to have a strong online presence...",
      img: "https://digitalwhopper.com/_next/image?url=%2Fblog-1.jpg&w=1080&q=75",
      tag: "Digital Whopper",
    },
    {
      id: 2,
      title: "How To Create LMS...",
      desc: "LMS Creation from Scratch: Training without a Learning Management System (LMS) is unreal...",
      img: "https://digitalwhopper.com/_next/image?url=%2Fblog-2.jpg&w=1080&q=75",
      tag: "Digital Whopper",
    },
    {
      id: 3,
      title: "Crafting-high-imp...",
      desc: "In the fast-evolving landscape of digital marketing, a well-executed PPC (Pay-Per-Click) campaign...",
      img: "https://digitalwhopper.com/_next/image?url=%2Fblog-3.jpg&w=1080&q=75",
      tag: "Digital Whopper",
    },
  ];

  return (
    <div className="bg-[rgba(225,225,225,1)] min-h-screen flex justify-center items-center py-10">
      {/* <div className="grid md:grid-cols-3 gap-40 max-w-7xl w-full mx-auto justify-items-center"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 max-w-7xl w-full mx-auto px-4 justify-items-center">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative group w-full">
            {/* Orange background card */}
            <div className="absolute w-full h-full bg-orange-500 rounded-2xl -rotate-3"></div>

            {/* Main card */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              {/* Image */}
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-56 object-fill"
              />

              {/* Tag */}
              <span className="absolute top-3 left-3 bg-white text-black font-semibold px-3 py-1 rounded-full text-sm shadow">
                {blog.tag}
              </span>

              {/* Content (equal height with image) */}
              <div className="w-full h-56 p-4 flex flex-col justify-start">
                <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
