import React from "react";
import VideoCard from "./video_card";

const VideoContainer = ({ info }) => {
  const { items = [] } = info || {};
  return (
    <div className="h-full grid grid-cols-3 gap-1 my-6 px-6 md:grid-cols-3 xs:grid-cols-1">
      {items.map((item) => (
        <VideoCard details={item} />
      ))}
    </div>
  );
};

export default VideoContainer;
