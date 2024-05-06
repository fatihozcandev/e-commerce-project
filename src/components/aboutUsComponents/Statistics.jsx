import React from "react";

function Statistics() {
  return (
    <div>
      <div className="flex flex-col gap-y-16 my-20 lg:flex-row lg:gap-x-16">
        <div className="flex flex-col items-center lg:items-start  text-center lg:text-left gap-y-8 w-[280px] mx-auto lg:w-1/2  ">
          <p className="text-paragraph text-danger-color   ">Problems trying</p>
          <p className="text-h3 font-semibold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div className="w-[280px] mx-auto lg:w-1/2 lg:content-center lg:pt-9">
          <p className="text-second-text-color text-paragraph">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col text-center mx-auto my-24 gap-y-20 font-bold lg:flex-row lg:justify-between ">
        <div className="items-center">
          <p className="text-h1  text-text">15K</p>
          <p className="text-h5 font-normal text-second-text-color">
            Happy Customer
          </p>
        </div>
        <div className="items-center">
          <p className="text-h1  text-text">150K</p>
          <p className="text-h5 font-normal text-second-text-color">
            Monthly Visitor
          </p>
        </div>
        <div className="items-center">
          <p className="text-h1  text-text">15</p>
          <p className="text-h5 font-normal text-second-text-color">
            Countries Worldwide
          </p>
        </div>
        <div className="items-center">
          <p className="text-h1  text-text">100+</p>
          <p className="text-h5 font-normal text-second-text-color">
            Top Partners
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
