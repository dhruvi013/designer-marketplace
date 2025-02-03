import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <img
    src="https://cdn.pixabay.com/photo/2018/01/13/19/26/fashion-3080626_1280.jpg"
    alt="Pixabay Image"
    className="carousel-image"
    style={{ width: "1400px", height: "550px", objectFit: "cover" }}
  />,
  <img
    src="https://cdn.pixabay.com/photo/2016/11/14/03/02/woman-1822454_1280.jpg"
    alt="Pixabay Image"
    className="carousel-image"
    style={{ width: "1400px", height: "550px", objectFit: "cover" }}
  />,
  <img
    src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg"
    alt="Pixabay Image"
    className="carousel-image"
    style={{ width: "1400px", height: "550px", objectFit: "cover" }}
  />,
  <img
    src="https://cdn.pixabay.com/photo/2024/06/13/05/31/men-8826710_1280.jpg"
    alt="Pixabay Image"
    className="carousel-image"
    style={{ width: "1400px", height: "550px", objectFit: "cover" }}
  />,
  <img
    src="https://cdn.pixabay.com/photo/2015/03/18/06/03/women-678849_1280.jpg"
    alt="Pixabay Image"
    className="carousel-image"
    style={{ width: "1400px", height: "550px", objectFit: "cover" }}
  />,
];

const MainCarousal = () => (
  <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
  />
);

export default MainCarousal;
