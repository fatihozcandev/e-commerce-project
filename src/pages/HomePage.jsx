import React from "react";

import BuyMe from "../components/BuyNow";
import Carousel from "../components/Carousel";

function HomePage() {
  return (
    <div className="mx-auto border border-red-400">
      <Carousel />
      <BuyMe />
    </div>
  );
}

export default HomePage;
