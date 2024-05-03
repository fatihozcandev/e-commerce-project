import React from "react";
import { productCardData } from "../data/data";
import ProductCard1 from "../components/reusableComponents/ProductCard1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function ProductDetail() {
  return (
    <section className=" max-w-[1050px]  mx-auto">
      <div>
        <div className="  flex gap-8 max-[1050px]:flex-col">
          <div className=" lg:w-1/2 ">
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
              {productCardData.map((item, index) => (
                <SwiperSlide key={index} className="relative">
                  <div className="lg:h-[500px]">
                    <img
                      className="lg:w-full lg:h-full object-cover object-top"
                      src={item.imageUrl}
                      alt={`image-${index}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className=" container p-4 rounded-lg w-full max-lg:w-1/2">
            <div className=" items-center ">
              <h2 className="text-h4 font-normal text-text-color mb-3  ">
                Floating Phone
              </h2>
              <div className="flex items-center mb-5">
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-yellow-400"></span>
                <span className="fa fa-star text-gray-300"></span>
                <span className="text-paragraph text-second-text-color ml-2">
                  (10 Reviews)
                </span>
              </div>
              <p className="text-text-color text-h3 font-semibold mb-1">
                $1,139.33
              </p>
              <div className="mb-8">
                <span className="mr-2 text-second-text-color font-bold tracking-wider text-p">
                  Availability :
                </span>
                <span className="text-primary-color text-p font-bold tracking-wider">
                  In Stock{" "}
                </span>
              </div>
            </div>

            <p className="text-paragraph text-secondary-color-2 mb-7">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="mb-7" />
            <div className="flex items-center mb-16">
              <span className="inline-block text-[90px] leading-4 font-bold text-primary-color ">
                •
              </span>
              <span className="inline-block text-[90px] leading-4 font-bold text-secondary-text-color-1 ">
                •
              </span>
              <span className="inline-block text-[90px] leading-4 font-bold text-alert-color ">
                •
              </span>
              <span className="inline-block text-[90px] leading-4 font-bold text-text-color ">
                •
              </span>
            </div>
            <div className="flex flex-row gap-3">
              <button className="btn-blue">Select Options</button>

              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300">
                <i className="fa fa-heart"></i>
              </div>

              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300">
                <i className="fa fa-shopping-cart"></i>
              </div>

              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300">
                <i className="fa fa-eye"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center my-8">
          <div className="text-second-text-color text-montserrat font-bold  p-4 flex justify-between items-center">
            <div className="flex items-center"></div>
            <a href="#" className=" text-link px-3 text-p hover:underline mr-4">
              Description
            </a>

            <a href="#" className=" text-link px-3 text-p hover:underline mr-4">
              Additional Information
            </a>
            <a href="#" className=" text-link px-3 text-p hover:underline mr-4">
              Reviews(0)
            </a>
          </div>
        </div>
        <div className="flex mb-12 max-[1050px]:flex max-[1050px]:flex-col flex-wrap ">
          <div className="flex flex-1 bg-gray-200 p-4 shadow-md rounded-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/8b0c/0f76/c949a2cffacf01d40c82241e905719cb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m7XAXOK9g2vUydCr7IOmuFysGjBFt-zjLPhuLSGBvmdjvsSUCLZ8wmZi3Wz5XAPl4EKYWgu19qoIHUamGWeN7DzHoh~shfDil6QO5f9JDbVn-Sxri2vzlL8u4m26SXG1C0WhJt0gUoyIZbcb8WAKJOhexQJ9llLLhpxetu1sPAcdwVmFnjlAWATtv5oknRs7QH3IPqFUsVDyIgyEF3ScjUQlrSrsrP~8XLWTDFKM5M5QWNIsxD2BnPEOjxkvnvsLtQ4DRiq9EkTaYet33ORtzV7bWQtvLwGxLu8oMf3PRu9Cj--avoAPoOVbl4y5tY8njTY1UMcJBVKG5Lr454ogaw__"
              alt="Resim"
              className="object-cover"
            />
          </div>

          <div className="flex-1 bg-white p-4 ">
            <h3 className="text-h3 text-montserrat font-bold mb-6 text-text-color ">
              the quick fox jumps over{" "}
            </h3>

            <p className="mb-5 text-second-text-color text-montserrat text-paragraph ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="mb-5 text-second-text-color text-montserrat text-paragraph">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="mb-5 text-second-text-color text-montserrat text-paragraph">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex-1 bg-white p-4">
            <h3 className="text-h3 text-montserrat font-bold mb-7 text-text-color">
              the quick fox jumps over{" "}
            </h3>
            <div className="ml-4">
              <p className="text-h6 mb-2.5 text-second-text-color text-montserrat font-bold">
                &gt; the quick fox jumps over the lazy dog
              </p>
              <p className="text-h6 mb-2.5 text-second-text-color text-montserrat font-bold">
                &gt; the quick fox jumps over the lazy dog
              </p>
              <p className="text-h6 mb-2.5 text-second-text-color text-montserrat font-bold">
                &gt; the quick fox jumps over the lazy dog
              </p>
              <p className="text-h6 mb-2.5 text-second-text-color text-montserrat font-bold">
                &gt; the quick fox jumps over the lazy dog
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-h3 text-montserrat font-bold mb-7 text-text-color">
                the quick fox jumps over
              </h2>
              <div className="ml-4">
                <p className="text-h6 mb-2.5 text-second-text-color text-montserrat font-bold">
                  &gt; the quick fox jumps over the lazy dog
                </p>
                <p className="text-h6 mb-2.5 text-second-text-color text-montserrat font-bold">
                  &gt; the quick fox jumps over the lazy dog
                </p>
                <p className="text-h6 mb-2.5 text-second-text-color text-montserrat font-bold">
                  &gt; the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-h3 mb-10 ml-10 ">BESTSELLER PRODUCTS</h2>
        <div className="flex flex-wrap justify-center md:justify-center md:mx-auto gap-8  ">
          {productCardData.map((card, index) => (
            <ProductCard1
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              department={card.department}
              originalPrice={card.originalPrice}
              salePrice={card.salePrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
