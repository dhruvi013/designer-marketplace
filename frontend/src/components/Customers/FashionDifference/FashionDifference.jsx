import React from "react";
import { FaCheck } from "react-icons/fa"; // Using FontAwesome for the checkmark icon

const FashionDifference = () => {
  const differences = [
    {
      title: " Authentic Craftsmanship",
      description:
        "Each piece is crafted with precision, blending traditional techniques with expert artistry.",
      color: "text-pink-300",
    },
    {
      title: "Contemporary Designs",
      description:
      "We fuse cultural heritage with modern styles to create elegant, timeless fashion.",
            color: "text-yellow-400",
    },
    {
      title: "Premium Quality",
      description:
      "Our garments use the finest fabrics and expert tailoring for unmatched quality and comfort.",
            color: "text-green-400",
    },
  ];

  return (
    <div className="bg-[#500724] py-20 px-5 min-h-[500px] flex flex-col items-center mt-20">
      <h2 className="text-center text-white text-3xl font-bold mb-12">
        The VastraVibe Difference
      </h2>
      <div className="flex justify-center gap-8 flex-wrap w-full">
        {differences.map((item, index) => (
          <div
            key={index}
            className="bg-[#8c2045] text-white p-8 rounded-2xl w-80 h-[260px] flex flex-col justify-center text-left transition-all duration-300 shadow-lg
              hover:-translate-y-2 hover:bg-[#a52a5e]"
          >
            <FaCheck className={`${item.color} text-3xl mb-4`} />
            <h3 className="text-lg font-extrabold mb-2">{item.title}</h3>
            <p className="text-base leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionDifference;
