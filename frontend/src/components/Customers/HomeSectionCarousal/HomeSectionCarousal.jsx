import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "react-alice-carousel/lib/alice-carousel.css"; // Ensure AliceCarousel styles are imported

const HomeSectionCarousal = () => {
  // ✅ Fix: Initialize useRef before using it
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 2 },
    675: { items: 3 },
    1024: { items: 5 },
  };

  const items = Array(9).fill(<HomeSectionCard />);

  // ✅ Fix: Use carouselRef.current correctly
  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className="px-4 lg:px-8">
      <div className="relative p-2 ">
        {/* Left Arrow Button */}
        <button
          onClick={slidePrev}
          className="absolute z-50 top-1/2 left-2 transform -translate-y-1/2 p-2 shadow-md top-29"
        >
          <ArrowBackIosIcon />
        </button>

        {/* Carousel Component with ref attached ✅ */}
        <AliceCarousel
          ref={carouselRef} // ✅ Fix: Attach ref properly
          items={items}
          infinite
          responsive={responsive}
          mouseTracking
          touchTracking
          disableDotsControls
          disableButtonsControls
        />

        {/* Right Arrow Button */}
        <button
          onClick={slideNext}
          className="absolute z-50 top-1/2 right-0 transform -translate-y-1/2 p-2 shadow-md top-29"
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarousal;
