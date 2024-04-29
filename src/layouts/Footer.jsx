import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/facebook";
import "react-social-icons/twitter";
import "react-social-icons/instagram";
import { footerLinks } from "../data/data";

const Footer = () => {
  return (
    <footer className=" text-text-color body-font">
      <div className="bg-light-gray-1">
        <div className=" container  lg:max-w-[1060px] sm:h-36 h-28   align-middle items-center  mx-auto flex lg:flex-row flex-col md:justify-between justify-around">
          <div>
            <h2 className="text-h3 font-semibold">Super Outfits</h2>
          </div>
          <div className="icons">
            <SocialIcon
              className="mr-5"
              url="http://www.facebook.com"
              style={{ width: "2rem", height: "2rem" }}
            />
            <SocialIcon
              className="mr-5"
              url="http://www.instagram.com"
              style={{ width: "2rem", height: "2rem" }}
            />
            <SocialIcon
              className="mr-5"
              url="http://www.x.com"
              style={{ width: "2rem", height: "2rem" }}
            />
          </div>
        </div>
      </div>
      <div className="container lg:max-w-[1060px] sm:h-72  mx-auto flex items-center sm:flex-row flex-col">
        {footerLinks.map((link, idx) => (
          <div key={idx} className="flex flex-col sm:basis-1/4">
            <h2 className="font-bold text-h5 mb-4">{link.title}</h2>
            <ul>
              <a href="#" className="mb-2 text-list hover:underline ">
                <p>{link.link1}</p>
              </a>
              <a href="#" className="mb-2 text-list hover:underline ">
                <p>{link.link2}</p>
              </a>
              <a href="#" className="mb-2 text-list hover:underline ">
                <p>{link.link3}</p>
              </a>
              <a href="#" className="mb-2 text-list hover:underline ">
                <p>{link.link4}</p>
              </a>
            </ul>
          </div>
        ))}

        <div className="flex sm:basis-2/4 sm:w-full flex-col">
          <p className="text-h5 font-bold text-text-color  mb-5">
            Get In Touch
          </p>
          <form className="flex flex-row h-14">
            <input
              className="w-full px-3  text-base bg-gray-200 border border-gray-300 rounded outline-none"
              type="email"
              placeholder="Your Email"
            />
            <button className="inline-flex items-center bg-primary-color text-white border-0 py-1 px-3 focus:outline-none hover:bg-secondary-text-color-1 rounded text-base mt-4 md:mt-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-light-gray-1 h-16 content-center">
        <div className="container lg:max-w-[1060px] mx-auto flex flex-col content-center ">
          <p className="text-second-text-color">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
