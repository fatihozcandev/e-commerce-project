import React from "react";

function BuyMe() {
  return (
    <section className="container-fluid my-10">
      <div className="flex flex-wrap items-center max-w-[1050px] mx-auto">
        <div className="w-full md:w-1/2 px-4">
          <img
            src="/asian-couple.svg"
            alt="Görsel"
            className="w-full max-h-[700px]  "
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="text-center md:text-left">
            <h5 className="font-montserrat font-bold text-h5 leading-6 tracking-tighter text-muted-color w-[122px] h-[24px] mb-4">
              SUMMER 2020
            </h5>

            <div className="w-96 h-24">
              <h2 className="font-montserrat font-bold text-h2 leading-10 tracking-wide text-text-color">
                {" "}
                Part of the Neural Universe
              </h2>
            </div>
            <h4 className="font-montserrat font-normal text-h4 leading-7 tracking-wide text-second-text-color w-[376px] mb-10">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div className="gap-2.5">
              <a href="#" className="btn-blue">
                BUY NOW
              </a>
              <a href="#" className=" btn-white">
                READ ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuyMe;
