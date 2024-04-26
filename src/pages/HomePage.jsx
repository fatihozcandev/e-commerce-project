import React from "react";

import BuyMe from "../components/homepageComponents/BuyNow";
import Carousel from "../components/homepageComponents/Carousel";
import FeaturedPosts from "../components/homepageComponents/FeaturedPosts";
import BestSeller from "../components/homepageComponents/BestSeller";

function HomePage() {
  return (
    <div className="mx-auto border border-red-400">
      <Carousel />
      <BestSeller />
      <BuyMe />
      <FeaturedPosts />
    </div>
  );
}

export default HomePage;
