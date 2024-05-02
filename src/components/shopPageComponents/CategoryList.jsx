import React from "react";
import ProductCard1 from "../reusableComponents/ProductCard1"; // Dosya adı düzeltilmeli
import { productCardData2 } from "../../data/data"; // Yeni veri seti import edilmeli

const CategoryList = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center md:justify-center md:mx-auto gap-8 max-w-[1050px]">
        {productCardData2.map((card, index) => (
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
  );
};

export default CategoryList;
