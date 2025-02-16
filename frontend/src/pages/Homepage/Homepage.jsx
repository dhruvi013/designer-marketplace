import React from "react";
import StatsSection from "../../components/Customers/statsection/StatsSection";
import MainCarousal from "../../components/Customers/HomeCarousal/MainCarousal";

const HomePage = ({ sections }) => {
  return (
    <div>
      <MainCarousal />

      <StatsSection />
    </div>
  );
};

export default HomePage;
