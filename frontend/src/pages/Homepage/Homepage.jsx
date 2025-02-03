import React from "react";
import MainCarousal from "../../components/Customers/HomeCarousal/MainCarousal";
import HomeSectionCarousal from "../../components/Customers/HomeSectionCarousal/HomeSectionCarousal";

const Homepage = () => {
  return (
    <div>
      <MainCarousal />
      <div>
        <HomeSectionCarousal />
      </div>
    </div>
  );
};

export default Homepage;
