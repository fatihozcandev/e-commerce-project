import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { bottomSliderData } from "../../data/data";
import { Link } from "react-router-dom/cjs/react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const CarouselBottom = () => {
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
        {bottomSliderData.map((data, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="lg:h-[850px]">
              <img
                className="lg:w-full h-full object-cover object-top"
                src={data.url}
                alt={`image-${index}`}
              />
            </div>
            <div className="absolute lg:p-64  inset-0 text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-start lg:gap-5 gap-3 ">
              <p className="text-h5 font-bold text-light-text-color">
                {data.season}
              </p>
              <p className="text-h1 text-light-gray-1">{data.category}</p>
              <p className="text-h3 text-light-text-color">
                {data.description}
              </p>
              <div>
                <p>{data.price}</p>
                <Link rel="stylesheet" href="">
                  <button type="button">{data.linkText}</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarouselBottom;
