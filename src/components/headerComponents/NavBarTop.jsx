import React from "react";

function NavBarTop() {
  return (
    <div className="flex sm:flex-row flex-wrap items-center justify-around bg-primary-color lg:p-3 max-sm:hidden lg:flex lg:flex-row lg:px-11">
      <div className="flex items-center lg:ml-2.5">
        <a
          href="mailto:michelle.rivera@example.com"
          className="Mail-icon flex items-center text-white hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
        >
          <i className="fa-solid fa-envelope fa-1x"></i>
          <span className="lg:ml-2 lg:text-sm">
            michelle.rivera@example.com
          </span>
        </a>
        <a
          href="tel:+12255550118"
          className="Phone-icon flex items-center text-white hover:text-gray-400 dark:hover:text-white dark:text-gray-400 lg:ml-2.5"
        >
          <i className="fa-solid fa-phone"></i>
          <span className="lg:ml-2 lg:text-sm">(225) 555-0118</span>
        </a>
      </div>
      <div className="flex justify-center max-lg:hidden">
        <p className="text-white lg:text-sm text-center">
          Follow Us and get a chance to win 80% off
        </p>
      </div>
      <div className="flex items-center lg:mr-2.5">
        <p className="text-white font-bold lg:text-sm lg:mr-2.5 max-xl:hidden">
          Follow Us:
        </p>
        <ul className="flex lg:space-x-5">
          {["facebook", "instagram", "twitter", "youtube"].map((platform) => (
            <li key={platform} className={`${platform}-icon`}>
              <a
                href={`https://${platform}.com`}
                className="mx-0.5 text-white hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
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
