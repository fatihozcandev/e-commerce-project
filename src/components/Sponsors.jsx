import React from "react";
import { sponsorlogos } from "../data/data";

function Sponsors() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 max-w-[1050px] mx-auto my-8">
        {sponsorlogos.map((logo) => (
          <div key={logo.id} className="w-32 h-32">
            <img
              src={logo.imageUrl}
              alt={logo.name}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
