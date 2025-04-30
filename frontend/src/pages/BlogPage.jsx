// BlogPage.jsx

import React from "react";

const blogs = [
  {
    id: 1,
    title: "Top 5 Fashion Trends of 2025",
    date: "April 27, 2025",
    author: "Dhruvi Patel",
    image: "https://www.cableandco.co.za/system/images/W1siZiIsIjIwMjQvMTIvMTAvMTUvNDgvMjcvNzA1LzkwMFg1NjNweF9CTE9HX0NPVkVSX1BPU1QuanBnIl0sWyJwIiwidGh1bWIiLCI3NTB4NDY5I2MiXSxbInAiLCJzdHJpcCJdLFsiZSIsImpwZWciLCItcXVhbGl0eSA1NSJdXQ/900X563px_BLOG%20COVER%20POST.jpg",
    excerpt:
      "Explore the hottest fashion trends of the year, from sustainable fabrics to bold colors and cultural fusion styles.",
  },
  {
    id: 2,
    title: "How to Style Your Ethnic Wear for Modern Occasions",
    date: "April 15, 2025",
    author: "Team FashionDiva",
    image: "https://mereton.com.au/wp-content/uploads/2024/10/2025-Fashion-Trends-1.jpg",
    excerpt:
      "Blend traditional attire with modern aesthetics. Here’s how you can rock ethnic wear at parties, office, and casual meetups.",
  },
  {
    id: 3,
    title: "Our Behind-the-Scenes Fashion Show Experience",
    date: "March 30, 2025",
    author: "FashionDiva Events",
    image: "https://c8.alamy.com/comp/DH7EDP/model-being-prepared-for-fashion-show-DH7EDP.jpg",
    excerpt:
      "We take you backstage at our cultural fashion show – the energy, the chaos, the glam, and the inspiration behind every design.",
  },
  {
    id: 1,
    title: "Top 5 Fashion Trends of 2025",
    date: "April 27, 2025",
    author: "Dhruvi Patel",
    image: "https://www.cableandco.co.za/system/images/W1siZiIsIjIwMjQvMTIvMTAvMTUvNDgvMjcvNzA1LzkwMFg1NjNweF9CTE9HX0NPVkVSX1BPU1QuanBnIl0sWyJwIiwidGh1bWIiLCI3NTB4NDY5I2MiXSxbInAiLCJzdHJpcCJdLFsiZSIsImpwZWciLCItcXVhbGl0eSA1NSJdXQ/900X563px_BLOG%20COVER%20POST.jpg",
    excerpt:
      "Explore the hottest fashion trends of the year, from sustainable fabrics to bold colors and cultural fusion styles.",
  },
  {
    id: 2,
    title: "How to Style Your Ethnic Wear for Modern Occasions",
    date: "April 15, 2025",
    author: "Team FashionDiva",
    image: "https://mereton.com.au/wp-content/uploads/2024/10/2025-Fashion-Trends-1.jpg",
    excerpt:
      "Blend traditional attire with modern aesthetics. Here’s how you can rock ethnic wear at parties, office, and casual meetups.",
  },
  {
    id: 3,
    title: "Our Behind-the-Scenes Fashion Show Experience",
    date: "March 30, 2025",
    author: "FashionDiva Events",
    image: "https://c8.alamy.com/comp/DH7EDP/model-being-prepared-for-fashion-show-DH7EDP.jpg",
    excerpt:
      "We take you backstage at our cultural fashion show – the energy, the chaos, the glam, and the inspiration behind every design.",
  },

];

const BlogPage = () => {
  return (
    <div className="px-6 py-12 bg-white min-h-screen mt-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Latest Blogs
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{blog.date} | By {blog.author}</p>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <button className="text-indigo-600 hover:text-indigo-800 font-medium">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
