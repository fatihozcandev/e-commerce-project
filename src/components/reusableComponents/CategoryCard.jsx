import React from "react";

function CategoryCard({ src, title }) {
  return (
    <div className="flex mb-4 relative p-2  ">
      <img src={src} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-light-bg-color  bg-opacity-50 text-text-color">
        <h5 className="text-h5  font-bold mb-4">{title}</h5>
      </div>
    </div>
  );
}

export default CategoryCard;
//
//
