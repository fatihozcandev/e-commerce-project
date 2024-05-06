import React from "react";

function WorkWithUs() {
  return (
    <section className="flex items-center gap-x-2 bg-hover-color max-lg:flex-col">
      <div className="flex flex-col items-center gap-y-6 w-[272px] px-5 py-16 text-center text-light-text-color lg:items-start lg:w-[60%] lg:px-12 lg:py-0 lg:text-start">
        <h2 className="text-h5 font-bold lg:text-h5">WORK WITH US</h2>
        <h2 className="text-h2 font-bold lg:text-h2">Now Let's grow Yours</h2>
        <p className="text-h4 w-[275px] lg:w-[376px]">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th.
        </p>
        <button className="w-32 px-10 py-3 text-light-text-color btn-white outline">
          Apply
        </button>
      </div>
      <div className=" max-lg:hidden lg:w-[40%]">
        <img
          className="w-full h-full object-cover"
          src="/applylady.svg"
          alt=""
        />
      </div>
    </section>
  );
}

export default WorkWithUs;
