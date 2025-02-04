import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <img
    src="https://i.pinimg.com/originals/75/1d/2b/751d2b30f041d6a7ec336dbdef797311.jpg"
    alt="Pixabay Image"
    className="carousel-image"
    style={{ width: "1400px", height: "550px", objectFit: "cover" }}
  />,
  <img
    src="https://sun9-73.userapi.com/impg/xGanFbfm8lwhskYSmhwJYXsuiO4Xpj_rNLRIIg/3vOaiqahYMo.jpg?size=1280x640&quality=95&sign=5a63066ce7e855029101e1aaf6ee6d27&c_uniq_tag=Cf95M6vryKzVosVwYQMVu9kvyeb-AfXMzOUP89q3I6c&type=album"
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
  />
);

export default MainCarousal;
