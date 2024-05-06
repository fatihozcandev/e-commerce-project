import React from "react";
import AboutHero from "../components/aboutUsComponents/AboutHero";
import Statistics from "../components/aboutUsComponents/Statistics";
import Introduction from "../components/aboutUsComponents/Introduction";
import SponsorSection from "../components/aboutUsComponents/SponsorSection";
import WorkWithUs from "../components/aboutUsComponents/WorkWithUs";

function AboutUs() {
  return (
    <div className="max-w-[1050px] mx-auto">
      <AboutHero />
      <Statistics />
      <Introduction />
      <SponsorSection />
      <WorkWithUs />
    </div>
  );
}

export default AboutUs;
