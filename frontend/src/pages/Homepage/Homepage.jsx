import React from "react";
import StatsSection from "../../components/Customers/statsection/StatsSection";
import MainCarousal from "../../components/Customers/HomeCarousal/MainCarousal";
import FashionDifference from "../../components/Customers/FashionDifference/FashionDifference";
import BestSeller from "../../components/Customers/BestSeller/BestSeller";
import ShopByCategory from "../../components/Customers/ShopByCategory/ShopByCategory";
import LatestCollection from "../../components/Customers/LatestCollection/LateshCollection";
import PoliciesSection from "../../components/Customers/PoliciesSection/PoliciesSection";
import FashionShowSubscription from "../../components/Customers/Events/FashionShowSubscription";

const HomePage = ({ sections }) => {
  return (
    <div className="pt-24">      
      <MainCarousal />

      <StatsSection />

      <FashionDifference />

      <BestSeller />

      <ShopByCategory />

      <LatestCollection />

      <PoliciesSection />

      <FashionShowSubscription />
    </div>
  );
};

export default HomePage;
