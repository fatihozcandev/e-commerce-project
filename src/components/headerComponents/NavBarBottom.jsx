import React from "react";
import { Link } from "react-router-dom";

function NavBarBottom() {
  return (
    <div className="bg-light-bg-color text-h3 p-4 flex justify-between items-center h-16">
      <div className="flex items-center">
        <p className="m-0 mr-6 text-black font-bold bg-white ">Super Outfits</p>
        <div className="relative">
          <div className="absolute top-full left-0 w-32 bg-gray-800 py-2 rounded-md shadow-lg hidden"></div>
        </div>
        <a href="#" className="text-link text-h6 hover:underline mr-4">
          Home
        </a>
        <button className="text-link text-h6 hover:underline mr-4">Shop</button>
        <a href="#" className="text-link text-h6 hover:underline mr-4">
          About
        </a>
        <a href="#" className="text-link text-h6 hover:underline mr-4">
          Blog
        </a>
        <a href="#" className="text-link text-h6 hover:underline mr-4">
          Contact
        </a>
        <a href="#" className="text-link text-h6 hover:underline">
          Pages
        </a>
      </div>
      <div className="flex items-center">
        <div className="mr-4 flex flex-row content-center">
          <a href="#" className=" text-h5 hover:underline">
            Login
          </a>
          <span className="text-link text-h6 mx-2">/</span>
          <a href="#" className="text-h5 hover:underline">
            Register
          </a>
        </div>
        <div className="flex items-center">
          <Link to="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>

          <Link to="#">
            {" "}
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link to="#">
            {" "}
            <i className="fa-regular fa-heart"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBarBottom;
