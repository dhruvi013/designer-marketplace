import React from "react";

const BestSeller = () => {
  const bestSellers = [
    { image: "https://cdn.pixabay.com/photo/2020/11/21/06/58/woman-5763248_1280.jpg" },
    { image: "https://cdn.pixabay.com/photo/2023/01/19/16/43/woman-7729639_1280.jpg" },
    { image: "https://cdn.pixabay.com/photo/2023/01/19/16/36/fashion-7729607_1280.jpg" },
    { image: "https://cdn.pixabay.com/photo/2023/04/20/06/11/engagement-ceremony-7939040_1280.jpg" },
  ];

  return (
    <div className="py-16 bg-[#f9f9f9] text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Best Seller</h2>
      <p className="text-gray-600 mb-8">Discover Best Seller Products</p>
      <div className="flex justify-center gap-6 flex-wrap">
        {bestSellers.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg w-64 h-96 overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <img
              src={item.image}
              alt={`Best Seller ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
