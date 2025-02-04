import React from "react";
import MainCarousal from "../../components/Customers/HomeCarousal/MainCarousal";
import HomeSectionCarousal from "../../components/Customers/HomeSectionCarousal/HomeSectionCarousal";

const Homepage = () => {
  const sections = [
    { title: "New Arrivals", data: ["item1", "item2", "item3"] },
    { title: "Trending", data: ["item4", "item5", "item6"] },
    { title: "Best Sellers", data: ["item7", "item8", "item9"] },
    { title: "Best Sellers", data: ["item7", "item8", "item9"] },
    { title: "Best Sellers", data: ["item7", "item8", "item9"] },
    { title: "Best Sellers", data: ["item7", "item8", "item9"] },

  ];

  return (
    <div>
      <MainCarousal />
      <div className="space-y-8"> {/* ✅ Adds spacing between rows */}
        {sections.map((section, index) => (
          <div key={index} className="py-4"> {/* ✅ Adds padding between carousels */}
            <HomeSectionCarousal title={section.title} data={section.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
