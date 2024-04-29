import React from "react";

function BuyMe() {
  return (
    <section className="container-fluid">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 px-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/5f8c/e73d/1a41b674cbd12f927c7ea9a6ca0ce76c?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LC4F7xBCbAFGOCDQy8vyibpmv0OvjU0VHFVinbHZvlB21en7lcMpiXVkqHEK~0oTe43oNUI4SlQoXm0r7tC1EX6qzv2fED1GPGCjzVtXDyBqh6hD8OlJuINJisEyWxFxdzJnBytCAb4pvGTL53l2luk5JiRuf6F-P6bq5VWdpZk5-r8dbUkhXOiMwqgL~ivdCKyCP~TPDkYNY5pn2X4TpTiK43NOBB-B0Wpy2o~dO7B9iGa-WFFSUJpfVst7lIENK3ui5o-ZfY5jg-XAh~iVXHJmTvJnnKbrXMVrEDbvDGoD5JqQhyy6AXLU-17OlVQxH7jZrjIQOhExbpOzQDeHlg__"
            alt="Görsel"
            className="w-full h-auto"
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
              <a
                href="#"
                className=" bg-primary-color hover:bg-success-color  text-white font-montserrat  rounded mr-2 w-[151px] h-[52px] px-10 py-5 rounded-l-md "
              >
                BUY NOW
              </a>
              <a
                href="#"
                className=" bg-white-500 hover:bg-light-gray-1 text-success-color font-montserrat outline outline-1   rounded mr-2 w-[151px] h-[52px] px-10 py-5 rounded-l-md "
              >
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
