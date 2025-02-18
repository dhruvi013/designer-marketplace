import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect when the section is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stats = [
    { value: "10k+", label: "Unique Designs", color: "bg-pink-100 text-pink-700" },
    { value: "50+", label: "Master Artisans", color: "bg-yellow-100 text-yellow-700" },
    { value: "15+", label: "Years of Heritage", color: "bg-green-100 text-green-700" },
    { value: "100k+", label: "Happy Customers", color: "bg-red-100 text-red-700" },
  ];

  return (
    <div
      id="stats-section"
      className="relative flex justify-center items-center min-h-[60vh] py-20 px-10 bg-cover bg-center mt-10"
      style={{
        backgroundImage: "url('https://c8.alamy.com/comp/WNB2KN/bunch-of-rose-flowers-in-top-right-corner-and-purple-ribbon-on-white-background-minimal-flat-lay-style-composition-greeting-card-mockup-WNB2KN.jpg')",
      }}
    >
      {/* Stats Section */}
      <div className="relative flex flex-wrap justify-center gap-10 max-w-6xl">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-xl shadow-md ${stat.color} text-center w-60`}
            initial={{ opacity: 0, y: 50 }} // Initial state (invisible and moved down)
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible state when section is in view
            transition={{ duration: 0.6, delay: index * 0.2 }} // Stagger the animations for each stat
            whileHover={{ scale: 1.05, y: -5 }} // Slight hover effect
          >
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <p className="mt-3 text-xl">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
