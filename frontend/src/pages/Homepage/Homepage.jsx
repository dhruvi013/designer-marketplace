import React from "react";
import MainCarousal from "../../components/Customers/HomeCarousal/MainCarousal";
import HomeSectionCarousal from "../../components/Customers/HomeSectionCarousal/HomeSectionCarousal";

const Homepage = () => {
  const sections = [
    {
      title: "New Arrivals",
      data: [
        "item1",
        "item2",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
      ],
    },
    {
      title: "Trending",
      data: [
        "item4",
        "item5",
        "item6",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
      ],
    },
    {
      title: "Best Sellers",
      data: [
        "item7",
        "item8",
        "item9",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
      ],
    },
    {
      title: "Women's Sarees",
      data: [
        "saree1",
        "saree2",
        "saree3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
      ],
    },
    {
      title: "Men's Kurtas",
      data: [
        "kurta1",
        "kurta2",
        "kurta3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
      ],
    },
    {
      title: "Shoes",
      data: [
        "shoes1",
        "shoes2",
        "shoes3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
      ],
    },
    {
      title: "Accessories",
      data: [
        "accessory1",
        "accessory2",
        "accessory3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
      ],
    },
    {
      title: "Ethnic Wear",
      data: [
        "ethnic1",
        "ethnic2",
        "ethnic3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
        "item3",
      ],
    },
  ];

  return (
    <div>
      <MainCarousal />
      <div className="space-y-8">
        {" "}
        {/* Adds spacing between rows */}
        {sections.map((section, index) => (
          <div key={index} className="py-4">
            {" "}
            {/* Adds padding between carousels */}
            <HomeSectionCarousal title={section.title} data={section.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
