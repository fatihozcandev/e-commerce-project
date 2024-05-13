import React from "react";

function TeamCard({ teamData }) {
  return (
    <div className="  w-60 h-[420px]   ">
      <div className="w-60 h-[80%] p-2   ">
        <img
          src={teamData.imageUrl1}
          alt=""
          className="object-cover w-full h-full  rounded-3xl "
        />
      </div>
      <div className=" text-center flex flex-col justify-center p-6 gap-y-2">
        <h3 className="font-bold text-text-color text-h5">
          {teamData.username}
        </h3>
        <p className="text-second-text-color text-h6 font-bold">
          {teamData.profession}
        </p>
      </div>
    </div>
  );
}

export default TeamCard;
