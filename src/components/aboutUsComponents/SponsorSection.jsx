import React from "react";
import Sponsors from "../../components/reusableComponents/Sponsors";

function SponsorSection() {
  return (
    <div className="my-20 flex flex-col gap-y-8 items-center max-lg:w-[325px] mx-auto text-center">
      <p className="text-h2 text-text-color font-bold">
        Big Companies Are Here
      </p>
      <p className="text-paragraph text-second-text-color w-550px">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics{" "}
      </p>
      <Sponsors />
    </div>
  );
}

export default SponsorSection;
