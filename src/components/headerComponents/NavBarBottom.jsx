import React from "react";
import { Link } from "react-router-dom";

function NavBarBottom() {
  return (
    <section className="flex flex-wrap max-md:flex-col justify-around items-center h-auto lg:h-16  bg-light-bg-color ">
      <h1 className="mr-6 font-bold text-h3 text-text-color">Super Outfits</h1>
      <nav className="flex flex-wrap items-center ">
        <section className="relative">
          <article className="absolute top-full left-0 hidden w-32 py-2 bg-gray-800 rounded-md shadow-lg"></article>
        </section>
        <div className="max-sm:flex max-sm:flex-col max-sm:order-last text-second-text-color  ">
          <Link
            to="/"
            className="mr-4 max-sm:text-h4 text-h6 text-link hover:underline"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="mr-4 max-sm:text-h4 text-h6 text-link hover:underline"
          >
            Shop
          </Link>
          <Link
            to="/About"
            className="mr-4 max-sm:text-h4 text-h6 text-link hover:underline"
          >
            About
          </Link>
          <Link
            to="/Blog"
            className="mr-4 max-sm:text-h4 text-h6 text-link hover:underline"
          >
            Blog
          </Link>
          <Link
            to="/Contact"
            className="mr-4 max-sm:text-h4 text-h6 text-link hover:underline"
          >
            Contact
          </Link>
          <Link
            to="/Pages"
            className="mr-4 max-sm:text-h4 text-h6 text-link hover:underline"
          >
            Pages
          </Link>
        </div>
      </nav>
      <div className="flex items-center">
        <div className="flex flex-row items-center mr-4">
          <Link
            to="/Login"
            className=" text-primary-color text-h5 hover:underline"
          >
            Login
          </Link>
          <span className="mx-2 text-h6 text-link text-primary-color ">/</span>
          <Link
            to="/Register"
            className=" text-primary-color text-h5 hover:underline"
          >
            Register
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="#">
            <i className="fa-solid fa-magnifying-glass  text-primary-color ml-2"></i>
          </Link>
          <Link to="#">
            <i className="fa-solid fa-cart-shopping text-primary-color ml-2"></i>
          </Link>
          <Link to="#">
            <i className="fa-regular fa-heart text-primary-color ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NavBarBottom;
