import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    adaptiveHeight: true,
    focusOnSelect: true,
  };

  const images = [
    "https://picsum.photos/1400/800?random=1",
    "https://picsum.photos/1400/800?random=2",
    "https://picsum.photos/1400/800?random=3",
  ];

  return (
    <div className="mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
