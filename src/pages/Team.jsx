import React from "react";
import { teams } from "../data/data";
import TeamCard from "../components/reusableComponents/TeamCard";

const Team = () => {
  const imageUrl =
    "https://www.shutterstock.com/image-photo/beautiful-sexy-brunette-woman-tanned-600nw-1686851977.jpg";
  return (
    <section className="bg-white text-gray-800  mx-auto  ">
      <div className="flex mb-10 max-w-[1050px] mx-auto gap-5  max-sm:flex-col ">
        <div className="sm:w-1/2 ">
          <img src={imageUrl} alt="Large Image" className="w-full h-auto" />
        </div>
        <div className="sm:w-1/2 flex gap-2">
          <div className="flex flex-col gap-y-2">
            <img src={imageUrl} alt="Image 1" className="w-full " />
            <img src={imageUrl} alt="Image 2" className="w-full " />
          </div>
          <div className="flex flex-col gap-y-2">
            <img src={imageUrl} alt="Image 3" className="w-full " />
            <img src={imageUrl} alt="Image 4" className="w-full " />
          </div>
        </div>
      </div>

      <div className="meetTeam py-5 max-w-[1050px] mx-auto">
        <h2
          className="text-h2 font-bold text-center mb-6"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Meet Our Team
        </h2>
        <div className="flex justify-center flex-wrap gap-7 ">
          {teams.map((item, index) => (
            <TeamCard key={index} teamData={item} className="" />
          ))}
        </div>
        <div className="">
          <div className=" container flex flex-col mx-auto py-8 max-w-xl">
            <div>
              <h2
                className="text-h2 font-bold text-center mb-6"
                id="feature-section"
              >
                Start your 14 days free trial
              </h2>
              <p className="text-h4 text-center text-second-text-color">
                Sed ut perspiciatis unde omnis iste natus error sit, totam rem
                aperiam, eaque ipsa quae ab illo inventore.
              </p>
            </div>
            <div className="flex justify-center my-8">
              <button className="btn-blue w-[272px] h-[52px] text-paragraph font-semibold">
                Try it free now
              </button>
            </div>
            <div className="flex justify-center">
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/twitterlogo.svg" className=" mx-5" />
              </a>
              <a
                href="https://www.facebook.com/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/facebooklogo.svg" className=" mx-5" />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagramlogo.svg" className=" mx-5" />
              </a>
              <a
                href="https://www.linkedin.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedinlogo.svg" className="mx-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
