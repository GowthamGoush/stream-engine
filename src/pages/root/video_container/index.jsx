import React from "react";
import VideoCard from "./video_card";

const VideoContainer = ({ info }) => {
  const { items = [] } = info || {};
  return (
    <div className="h-full grid grid-cols-3 gap-1 my-6 overflow-y-auto">
      {items.map((item) => (
        <VideoCard details={item} />
      ))}
    </div>
  );
};

export default VideoContainer;
