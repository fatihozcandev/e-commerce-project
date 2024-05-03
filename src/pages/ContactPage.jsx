import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-[url('/contact-bg.svg')] max-xl:bg-cover bg-auto xl:h-[450px] flex flex-col content-center ">
      <div className=" container flex flex-col  mx-auto my-auto  max-w-xl ">
        <div className="py-8">
          <h2
            className="sm:text-h2 text-h3 font-bold text-center "
            id="feature-section"
          >
            Get answers to all your questions.
          </h2>
          <p className="sm:text-h4 text-h5 text-center text-second-text-color sm:my-8">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>
        </div>
        <div className="flex justify-center">
          <button className="btn-white w-[272px] h-[52px] text-paragraph font-semibold">
            CONTACT OUR COMPANY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
