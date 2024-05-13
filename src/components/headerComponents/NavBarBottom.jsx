import React from "react";
import { Link } from "react-router-dom";

function NavBarBottom() {
  return (
    <section className="flex flex-wrap max-md:flex-col justify-around items-center h-auto lg:h-16  bg-light-bg-color sm:h-16 gap-4 max-sm:my-7 mb-8">
      <Link to="/">
        <h1 className="mr-6 font-bold text-h3 text-text-color">
          Super Outfits
        </h1>
      </Link>
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
            to="/about"
            className="mr-4 max-sm:text-h4 text-h6 text-link hover:underline"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="mr-4 max-sm:text-h4 text-h6 text-link hover:underline"
          >
            Blog
          </Link>

          <Link
            to="/team"
            className="mr-4 max-sm:text-h4 text-h6 text-link hover:underline"
          >
            Team
          </Link>
          <Link
            to="/pricing"
            className="mr-4 max-sm:text-h4 text-h6 text-link hover:underline"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="mr-4 max-sm:text-h4 text-h6 text-link hover:underline"
          >
            Contact
          </Link>
        </div>
      </nav>
      <div className="flex items-center">
        <div className="flex flex-row items-center mr-4">
          <Link
            to="/login"
            className=" text-primary-color text-h5 hover:underline"
          >
            Login
          </Link>
          <span className="mx-2 text-h6 text-link text-primary-color ">/</span>
          <Link
            to="/signup"
            className=" text-primary-color text-h5 hover:underline"
          >
            Sign Up
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
