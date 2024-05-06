import React from "react";

function AboutHero() {
  return (
    <section className="flex gap-x-2 items-center max-lg:flex-col">
      <div className="sm:w1/2 flex flex-col gap-y-9 my-auto max-lg:items-center">
        <h2 className="lg:text-h5 max-lg:hidden text-h2">ABOUT COMPANY</h2>
        <h2 className="lg:text-h1 text-h2 font-bold ">ABOUT US</h2>
        <p className="text-h4 text-second-text-color max-lg:w-[275px] lg:w-[376px] max-lg:text-center">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
        <button className="btn-blue w-52">Get Quote Now</button>
      </div>
      <div className="lg:w-1/2 lg:h-[700px] relative mx-auto">
        <img className="max-lg:w-[400px] max-sm:" src="/aboutus.svg" alt="" />
        <span className="-z-10 absolute top-12 left-12  h-[295px] w-[295px] lg:top-7 lg:-left-[20px] lg:h-[485px] lg:w-[485px] inline-block rounded-full bg-circle-pinky"></span>
        <span className="-z-10 absolute left-[7px] top-16 h-[45px] w-[45px] lg:-left-16 lg:h-[77px] lg:w-[77px] inline-block rounded-full bg-circle-pinky"></span>
        <span className="lg:-z-10 lg:absolute lg:left-[500px] lg:top-[300px] lg:h-[30px] lg:w-[30px] inline-block rounded-full bg-circle-pinky"></span>
        <span className="-z-10 absolute left-[345px] top-[108px] h-[9px] w-[9px] lg:left-[10px] lg:top-[465px] lg:h-[15px] lg:w-[15px] inline-block rounded-full bg-circle-purple"></span>
        <span className="-z-10 absolute left-[7px] top-[285px] h-[9px] w-[9px] lg:left-[543px] lg:top-[178px] lg:h-[15px] lg:w-[15px] inline-block rounded-full bg-circle-purple"></span>
      </div>
    </section>
  );
}

export default AboutHero;
