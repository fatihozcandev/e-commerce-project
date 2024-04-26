import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const images = [
  {
    id: 1,
    url: "https://cataas.com/cat",
  },
  {
    id: 2,
    url: "https://cataas.com/cat",
  },
  {
    id: 3,
    url: "https://cataas.com/cat",
  },
  {
    id: 4,
    url: "https://cataas.com/cat",
  },
  {
    id: 5,
    url: "https://cataas.com/cat",
  },
  {
    id: 6,
    url: "https://cataas.com/cat",
  },
  {
    id: 7,
    url: "https://cataas.com/cat",
  },
];

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 1000,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <img src={image.url} alt={`image-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
