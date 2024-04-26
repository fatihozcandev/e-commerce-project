import React from "react";

import BuyMe from "../components/BuyNow";
import Carousel from "../components/Carousel";
import FeaturedPosts from "../components/FeaturedPosts";

function HomePage() {
  return (
    <div className="mx-auto border border-red-400">
      <Carousel />
      <BuyMe />
      <FeaturedPosts />
    </div>
  );
}

export default HomePage;
