import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "react-alice-carousel/lib/alice-carousel.css";

const HomeSectionCarousal = ({ title, data }) => {
  // ✅ Accept title and data
  const [carousel, setCarousel] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const responsive = {
    0: { items: 2 },
    675: { items: 3 },
    1024: { items: 5 },
  };

  const items = data.map(
    (
      item,
      index // ✅ Use actual data
    ) => <HomeSectionCard key={index} item={item} />
  );

  const slidePrev = () => carousel && carousel.slidePrev();
  const slideNext = () => carousel && carousel.slideNext();

  const handleSlideChange = (e) => {
    setCurrentIndex(e.item);
  };

  return (
    <div className="px-4 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{title}</h2>{" "}
      {/* ✅ Display Section Title */}
      <div className="relative p-2">
        {currentIndex > 0 && (
          <button
            onClick={slidePrev}
            className="absolute z-50 top-1/2 left-2 transform -translate-y-1/2 p-2 shadow-md bg-white"
          >
            <ArrowBackIosIcon />
          </button>
        )}

        <AliceCarousel
          ref={(el) => setCarousel(el)} // ✅ Correct ref usage
          items={items}
          responsive={responsive}
          mouseTracking
          touchTracking
          disableDotsControls
          disableButtonsControls
          onSlideChanged={handleSlideChange}
        />

        {currentIndex < items.length - (responsive[1024]?.items || 5) && (
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
