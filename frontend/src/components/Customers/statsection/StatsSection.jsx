import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "10k+", label: "Unique Designs", color: "bg-pink-100 text-pink-700" },
    { value: "50+", label: "Master Artisans", color: "bg-yellow-100 text-yellow-700" },
    { value: "15+", label: "Years of Heritage", color: "bg-green-100 text-green-700" },
    { value: "100k+", label: "Happy Customers", color: "bg-red-100 text-red-700" },
  ];

  return (
    <div
      className="relative flex justify-center items-center min-h-[60vh] py-20 px-10 bg-cover bg-center mt-10"
      style={{
        backgroundImage: "url('https://c8.alamy.com/comp/WNB2KN/bunch-of-rose-flowers-in-top-right-corner-and-purple-ribbon-on-white-background-minimal-flat-lay-style-composition-greeting-card-mockup-WNB2KN.jpg')",
      }}
    >
      {/* Stats Section */}
      <div className="relative flex flex-wrap justify-center gap-10 max-w-6xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl shadow-md ${stat.color} text-center w-60 transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300`}
          >
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <p className="mt-3 text-xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
