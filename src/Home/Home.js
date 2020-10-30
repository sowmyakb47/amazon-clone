import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photos from "../carousel/Photos";
import ProductList from "../Products/ProductList";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    className: "slides",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="home">
      <div className="home__container" style={{ padding: "0 20px" }}>
        <Slider {...settings}>
          {photos.map((photo, index) => {
            return (
              <img src={photo.url} className="home__image" alt="" key={index} />
            );
          })}
        </Slider>
        <ProductList />
      </div>
    </div>
  );
}

export default Home;
