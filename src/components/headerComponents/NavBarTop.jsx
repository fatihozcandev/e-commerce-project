import React from "react";

function NavBarTop() {
  return (
    <div className="bg-primary-color flex flex-row justify-between h-14 p-3   ">
      <div className="flex flex-row items-center ml-2.5">
        <div className="Mail-icon">
          <a href="mailto:michelle.rivera@example.com">
            <i
              className="fa-solid fa-envelope fa-1x"
              style={{ color: "#ffffff" }}
            ></i>
            <span className="text-white  hover:text-gray-400 dark:hover:text-white dark:text-gray-400 ml-2 text-sm">
              michelle.rivera@example.com
            </span>
          </a>
        </div>

        <div className="Phone-icon ml-2.5">
          <a
            href="#"
            className="flex items-center text-white  hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
          >
            <i className="fa-solid fa-phone" style={{ color: "#ffffff" }}></i>
            <span className="ml-2 text-sm">(225) 555-0118</span>
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-white  text-h6">
          Follow Us and get a chance to win 80% off
        </p>
      </div>
      <div className="flex flex-row  items-center mr-2.5">
        <p className="text-white font-bold text-center mr-2.5  text-sm ">
          Follow Us:
        </p>
        <ul className="flex justify-center space-x-5">
          <li className="Facebook-icon">
            <a
              href="#"
              className="text-white hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
            >
              <i className="fa-brands fa-facebook fa-lg"></i>
            </a>
          </li>
          <li className="Instagram-icon">
            <a
              href="#"
              className="text-white hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
            >
              <i className="fa-brands fa-instagram fa-lg"></i>
            </a>
          </li>
          <li className="Twitter-icon">
            <a
              href="#"
              className="text-white hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
            >
              <i className="fa-brands fa-twitter fa-lg"></i>
            </a>
          </li>
          <li className="Youtube-icon content-center">
            <a
              href="#"
              className="text-white hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
            >
              <i className="fa-brands fa-youtube fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarTop;
