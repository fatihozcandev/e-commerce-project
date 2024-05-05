import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import { Link } from "react-router-dom/cjs/react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider1 = ({ sliderData }) => {
  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2000,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="lg:h-[850px]">
              <img
                className="lg:w-full lg:h-full object-contain object-top"
                src={item.url}
                alt={`image-${index}`}
              />
            </div>
            <div className="absolute lg:p-64  inset-0 text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-start lg:gap-5 gap-3 ">
              <p className="text-h5 font-bold text-light-text-color">
                {item.season}
              </p>
              <p className="text-h1 max-sm:text-h3 text-light-gray-1">
                {item.category}
              </p>
              <p className="text-h3 max-sm:text-h6 max-sm:max-w-48 text-light-text-color">
                {item.description}
              </p>
              <div>
                {item.price && (
                  <p className="btn-white bg-light-gray-1 bg-opacity-20">
                    {item.price}
                  </p>
                )}
                <Link rel="stylesheet" href="">
                  <button className="btn-blue" type="button">
                    {item.linkText}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider1;
