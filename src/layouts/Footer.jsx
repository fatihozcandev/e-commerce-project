import React from "react";
import { SocialIcon } from "react-social-icons";
import { footerLinks } from "../data/data";

const Footer = () => {
  return (
    <footer className="text-text-color body-font">
      <div className="bg-light-gray-1">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-4 lg:py-0 h-28 lg:h-36 lg:max-w-[1060px]">
          <h2 className="text-h3 font-semibold mb-4 lg:mb-0 ">Super Outfits</h2>
          <div className="icons flex justify-center lg:justify-start">
            <SocialIcon
              url="http://www.facebook.com"
              className="mr-5"
              style={{ width: "2rem", height: "2rem" }}
            />
            <SocialIcon
              url="http://www.instagram.com"
              className="mr-5"
              style={{ width: "2rem", height: "2rem" }}
            />
            <SocialIcon
              url="http://www.x.com"
              style={{ width: "2rem", height: "2rem" }}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto lg:max-w-[1060px] flex max-lg:flex-wrap items-start py-4">
        <div className="flex flex-wrap justify-around w-full max-sm:flex-col">
          {footerLinks.map((link, idx) => (
            <div
              key={idx}
              className="flex flex-col basis-1/2 lg:basis-1/4 mb-4"
            >
              <h2 className="font-bold text-h5 my-4 max-sm:text-center">
                {link.title}
              </h2>
              <ul className="flex flex-col max-sm:text-center ">
                <a href="#" className="mb-2 hover:underline">
                  {link.link1}
                </a>
                <a href="#" className="mb-2 hover:underline">
                  {link.link2}
                </a>
                <a href="#" className="mb-2 hover:underline">
                  {link.link3}
                </a>
                <a href="#" className="mb-2 hover:underline">
                  {link.link4}
                </a>
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col basis-full lg:basis-1/2 w-full lg:w-auto">
          <p className="text-h5 font-bold mb-5 max-sm:text-center">
            Get In Touch
          </p>
          <form className="flex flex-row h-14">
            <input
              className="flex-grow px-3 text-base bg-gray-200 border border-gray-300 rounded outline-none"
              type="email"
              placeholder="Your Email"
            />
            <button className="btn-blue">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="bg-light-gray-1 h-16">
        <div className="container mx-auto flex flex-col items-center justify-center h-full lg:max-w-[1060px]">
          <p className="text-second-text-color">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
