import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCaed from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HomeSectionCarousal = () => {
  const responsive = {
    0: { items: 2 },
    675: { items: 3 },
    1024: { items: 5 },
  };

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCaed />);
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
        />
        <button
          variant="contained"
          className="z-50"
          sx={{ position: "absolute", top: "8rem", right: "0rem", transform:"translateX(50%) rotate(90deg)"}}
          color="white"
          aria-label="next"
        >
    <ArrowBackIosIcon/>
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarousal;
