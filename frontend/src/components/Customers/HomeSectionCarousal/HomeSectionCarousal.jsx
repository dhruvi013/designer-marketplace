import React, { useState, useRef } from "react"; // ✅ Import useState & useRef
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "react-alice-carousel/lib/alice-carousel.css"; // Ensure styles are imported

const HomeSectionCarousal = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const responsive = {
    0: { items: 2 },
    675: { items: 3 },
    1024: { items: 5 },
  };

  const items = Array(9).fill(<HomeSectionCard />);

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

  const handleSlideChange = (e) => {
    setCurrentIndex(e.item);
  };

  return (
    <div className="px-4 lg:px-8">
      <div className="relative p-2">
        {/* Left Arrow Button (Hidden on First Slide) */}
        {currentIndex > 0 && (
          <button
            onClick={slidePrev}
            className="absolute z-50 top-1/2 left-2 transform -translate-y-1/2 p-2 shadow-md bg-white"
          >
            <ArrowBackIosIcon />
          </button>
        )}

        {/* Carousel Component */}
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          mouseTracking
          touchTracking
          disableDotsControls
          disableButtonsControls
          onSlideChanged={handleSlideChange} // ✅ Track Slide Changes
        />

        {/* Right Arrow Button (Hidden on Last Slide) */}
        {currentIndex < items.length - responsive[1024].items && (
          <button
            onClick={slideNext}
            className="absolute z-50 top-1/2 right-2 transform -translate-y-1/2 p-2 shadow-md bg-white"
          >
            <ArrowForwardIosIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousal;
