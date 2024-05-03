import React from "react";

function NavBarTop() {
  return (
    <div className="flex flex-wrap justify-around items-center bg-primary-color lg:flex-row lg:px-11 lg:p-3 sm:h-16 max-sm:hidden">
      <div className="flex items-center lg:ml-2.5">
        <a
          href="mailto:michelle.rivera@example.com"
          className="flex items-center text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-white Mail-icon"
        >
          <i className="fa-solid fa-envelope fa-1x"></i>
          <span className="ml-2 text-sm lg:ml-2 lg:text-sm">
            michelle.rivera@example.com
          </span>
        </a>
        <a
          href="tel:+12255550118"
          className="flex items-center text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-white Phone-icon ml-2.5 lg:ml-2.5"
        >
          <i className="fa-solid fa-phone"></i>
          <span className="ml-2 text-sm lg:ml-2 lg:text-sm">
            (225) 555-0118
          </span>
        </a>
      </div>
      <div className="flex justify-center hidden lg:block max-lg:hidden">
        <p className="text-white text-sm text-center">
          Follow Us and get a chance to win 80% off
        </p>
      </div>
      <div className="flex items-center mr-2.5 lg:mr-2.5">
        <p className="text-white font-bold text-sm lg:text-sm mr-2.5 lg:mr-2.5 hidden xl:block">
          Follow Us:
        </p>
        <ul className="flex space-x-5 lg:space-x-5">
          {["facebook", "instagram", "twitter", "youtube"].map((platform) => (
            <li key={platform} className={`${platform}-icon`}>
              <a
                href={`https://${platform}.com`}
                className="mx-0.5 text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-white"
              >
                <i className={`fa-brands fa-${platform} fa-lg`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBarTop;
