import React from "react";

const ClothsItems = ({ imageUrl, category, items }) => {
  return (
    <div className="w-[202px] h-[235px] relative m-2">
      <div className="w-full h-full">
        <img
          src={imageUrl}
          alt={category}
          className="w-full h-full object-cover rounded shadow"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <button className="text-lg font-bold text-white">{category}</button>
            <p className="text-sm text-white">{items}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothsItems;
