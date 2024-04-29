import React from "react";
import BuyMe from "../components/homepageComponents/BuyNow";
import FeaturedPosts from "../components/homepageComponents/FeaturedPosts";
import BestSeller from "../components/homepageComponents/BestSeller";
import Slider1 from "../components/reusableComponents/Slider1";
import { topSliderData, bottomSliderData } from "../data/data";

function HomePage() {
  return (
    <div className="mx-auto">
      <Slider1 sliderData={topSliderData} />
      <BestSeller />
      <Slider1 sliderData={bottomSliderData} />
      <BuyMe />
      <FeaturedPosts />
    </div>
  );
}

export default HomePage;
