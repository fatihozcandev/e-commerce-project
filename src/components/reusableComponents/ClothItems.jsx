import React from "react";

const ClothsItems = ({ imageUrl, category, items }) => {
  return (
    <div className="w-full max-sm:w-[450px] sm:w-[200px] h-[235px] relative m-1">
      <img
        src={imageUrl}
        alt={category}
        className="h-full w-full object-cover rounded shadow"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-7 py-1 bg-light-gray-2 rounded-lg bg-opacity-60">
          <button className="text-lg font-bold text-white">{category}</button>
          <p className="text-sm text-white">{items}</p>
        </div>
      </div>
    </div>
  );
};

export default ClothsItems;
