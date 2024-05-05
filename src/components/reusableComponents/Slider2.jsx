import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function App({ sliderData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="h-full  text-white  ">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[80%] w-full"
      >
        {sliderData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="text-center font-bold bg-white flex justify-center items-center"
          >
            <img
              src={item.url}
              className="block w-full h-full object-cover"
              alt={`Item ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-[20%] box-border py-2.5 mx-auto"
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index} className="w-[25%] h-full opacity-90">
            <img
              src={item.url}
              className="block w-full h-full object-cover"
              alt={`Thumbnail of Nature ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
