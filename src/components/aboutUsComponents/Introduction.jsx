import React from "react";
import ReactPlayer from "react-player";
import { relevantVideos } from "../../data/data";

function Introduction() {
  return (
    <div className="mx-auto my-10 flex justify-center ">
      <ReactPlayer url={relevantVideos[1].url} controls="true" />
    </div>
  );
}

export default Introduction;
