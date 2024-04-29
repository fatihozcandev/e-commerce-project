import React from "react";
import ProductCard1 from "../reusableComponents/ProductCard1";
import { productCardData } from "../../data/data";
import axios from "axios";

const BestSeller = () => {
  return (
    <section className="    container mx-auto px-4 py-8 w-screen-2xl ">
      <div className="text-center  my-20">
        <h2 className="text-h4 text-second-text-color">Featured Products</h2>
        <p className="text-h3 text-text-color font-bold">BESTSELLER PRODUCTS</p>
        <p className="text-paragraph text-second-text-color">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-center md:mx-auto gap-8 max-w-[1124px] ">
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
    </section>
  );
};

export default BestSeller;
