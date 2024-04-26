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
    url: "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMd0TpvHwm-5FftP7jkJzEmzf59eKBHetVCGhp8PlrCI8twT4fFEpOUYF8fCSJgdrjB8tZvGeKXkVLehXbY9I9XihZL3KxyO3QCuaFVpd7022miy1Ifrhpj275kU4Uxc20twESSse7taKv-EaqvkCL-hFhS-IajdT7FOBfdgMm0orQHulP9NEJ-Pi4LbNj5YqZnXggEkxkFYDfND8iac-JSY~J5-ly6wlu6wf5U3fqt4DHveHDkt3jyB-soG9WSjCvhJRgU4SOx9SCJzptqf8fFuNjdPc2~tRbTmuMjROGT5d6-W88M4U4uIuEY-uNNi78M1YuSbuIz3XFApe3XTIw__",
  },
  {
    id: 2,
    url: "https://www.usmagazine.com/wp-content/uploads/2022/09/City-Girl-Fashion-Stock-Photo.jpg?crop=0px%2C49px%2C2000px%2C1131px&resize=1600%2C900&quality=86&strip=allt",
  },
  {
    id: 3,
    url: "https://static.vecteezy.com/system/resources/previews/030/397/406/large_2x/a-beautiful-model-woman-walking-with-shopping-bags-buying-clothes-in-stores-on-a-city-street-in-france-fashionable-lady-with-high-heels-generative-ai-photo.jpeg",
  },
];

const Carousel = () => {
  return (
    <div>
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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              className="object-fill"
              src={image.url}
              alt={`image-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
