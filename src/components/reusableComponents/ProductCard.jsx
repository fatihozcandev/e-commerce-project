import React from "react";

const ProductCard = ({ imageUrl, title, date, description, commentsCount }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2 bg-white">
      <div className=" ">
        <img
          className="w-[348px] h-[300px] object-cover "
          src={imageUrl}
          alt="A colorful street scene"
        />
      </div>
      <div className="w-[348px] h-[300px] flex flex-col">
        <div className="px-6 py-4">
          <div className="font-bold text-h4 mb-2 text-text-color">{title}</div>
          <p className="text-second-text-color text-h6">{description}</p>
        </div>
        <div className="px-6  flex flex-row content-center justify-between ">
          <div>
            <i className="fa-regular fa-clock text-primary-color"></i>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-small text-second-text-color mr-2 mb-2">
              {date}
            </span>
          </div>
          <div>
            <i className="fa-solid fa-chart-area text-secondary-color-1"></i>
            <span className="inline-block px-3 py-1 text-small text-second-text-color mr-2 mb-2">
              {commentsCount} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
