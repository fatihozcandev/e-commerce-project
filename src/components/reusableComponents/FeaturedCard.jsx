import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const FeaturedCard = ({
  imageUrl,
  title,
  date,
  description,
  commentsCount,
  links = [],
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2 bg-white">
      <div className=" ">
        <img
          className="w-[348px] h-[300px] object-cover "
          src={imageUrl}
          alt="A colorful street scene"
        />
      </div>
      <div className="w-[348px] h-[300px] flex flex-col justify-around">
        <div className="px-6 ">
          {links.map((link, index) => (
            <a
              className="mr-2.5 first:text-primary-color text-small text-second-text-color"
              key={index}
              href={link.url}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="px-6 ">
          <div className="text-h4 mb-2 text-text-color">{title}</div>
          <p className="text-second-text-color text-h6">{description}</p>
        </div>

        <div className="px-6 flex flex-row content-center justify-between ">
          <div>
            <i className="fa-regular fa-clock text-primary-color"></i>
            <span className="inline-block px-3 py-1 text-small text-second-text-color mr-2 mb-2">
              {date}
            </span>
          </div>
          <div>
            <i className="fa-solid fa-chart-area text-secondary-color-1 "></i>
            <span className="inline-block px-3 py-1 text-small text-second-text-color mr-2 mb-2">
              {commentsCount} comments
            </span>
          </div>
        </div>
        <div className="flex flex-row pl-6 content-center">
          <a
            href="http://www.google.com"
            target="_blank"
            className="mr-3 font-bold"
          >
            Learn More{" "}
          </a>
          <i className="fa-solid fa-chevron-right leading-normal"></i>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
