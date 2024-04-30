import React from "react";

function CategoryCard({ src, title }) {
  return (
    <div className=" mb-4 relative overflow-hidden ">
      <img src={src} className="w-full  " />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-light-bg-color  bg-opacity-50 text-text-color">
        <h5 className="text-h5 font-montserrat font-bold mb-4">{title}</h5>
      </div>
    </div>
  );
}

export default CategoryCard;
//
//
