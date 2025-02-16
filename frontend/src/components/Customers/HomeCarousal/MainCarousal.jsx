import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <img
    src="https://www.karagiri.com/cdn/shop/collections/Lehengas_web_Banner.webp?v=1699417043&width=1920"
    alt="Pixabay Image"
    className="carousel-image"
    style={{ width: "1400px", height: "550px", objectFit: "cover" }}
  />,
  <img
    src="https://img.freepik.com/premium-photo/exclusive-fashion-deals-background-web-banner_1280472-3489.jpg?w=1060"
    alt="Pixabay Image"
    className="carousel-image"
    style={{ width: "1400px", height: "550px", objectFit: "cover" }}
  />,
  <img
    src="https://wallpapershigh.com/wp-content/uploads/fashion-background-1-5.webp"
    alt="Pixabay Image"
    className="carousel-image"
    style={{ width: "1400px", height: "550px", objectFit: "cover" }}
  />,
  <img
    src="https://i.ebayimg.com/00/s/ODAwWDEyODA=/z/aUoAAOSwGYVW9XIJ/$_45.JPG"
    alt="Pixabay Image"
    className="carousel-image"
    style={{ width: "1400px", height: "550px", objectFit: "cover" }}
  />,
  <img
    src="https://images8.alphacoders.com/551/551506.jpg"
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
    disableDotsControls
  />
);

export default MainCarousal;
