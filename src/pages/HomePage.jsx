import React from "react";

import BuyMe from "../components/homepageComponents/BuyNow";
import CarouselTop from "../components/homepageComponents/CarouselTop";
import FeaturedPosts from "../components/homepageComponents/FeaturedPosts";
import BestSeller from "../components/homepageComponents/BestSeller";
import CarouselBottom from "../components/homepageComponents/CarouselBottom";

function HomePage() {
  return (
    <div className="mx-auto">
      <CarouselTop />
      <BestSeller />
      <CarouselBottom />
      <BuyMe />
      <FeaturedPosts />
    </div>
  );
}

export default HomePage;
