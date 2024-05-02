import React from "react";
import { clothsPicturesData } from "../../data/data";
import ClothsItems from "../reusableComponents/ClothItems";

const DesktopCloths = () => {
  return (
    <section className="bg-[#FAFAFA] py-8">
      <div className="max-w-[1200px] mx-auto px-1">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold uppercase">SHOP</h1>
          <p className="text-lg">Home / Shop</p>
        </div>
        <div className="flex flex-row flex-wrap justify-start items-center mx-[-35px]">
          {clothsPicturesData.map((item, index) => (
            <div key={index} className="px-[12px] flex-auto">
              <ClothsItems
                key={index}
                imageUrl={item.imageUrl}
                category={item.category}
                items={item.items}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopCloths;
