import React from "react";
import StatsSection from "../../components/Customers/statsection/StatsSection";
import MainCarousal from "../../components/Customers/HomeCarousal/MainCarousal";
import FashionDifference from "../../components/Customers/FashionDifference/FashionDifference";
import BestSeller from "../../components/Customers/BestSeller/BestSeller";
import ShopByCategory from "../../components/Customers/ShopByCategory/ShopByCategory";

const HomePage = ({ sections }) => {
  return (
    <div className="pt-24">      
      <MainCarousal />

      <StatsSection />

      <FashionDifference />

      <BestSeller />

      <ShopByCategory />
    </div>
  );
};

export default HomePage;
