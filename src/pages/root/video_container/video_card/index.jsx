import React from "react";
import { formatNumberWithSuffix } from "../../../../utils/common";

const VideoCard = ({ details }) => {
  const { snippet, statistics } = details || {};

  const { title, channelTitle, thumbnails } = snippet || {};
  const { viewCount } = statistics || {};

  return (
    <div className="p-2 mb-6 rounded-md cursor-pointer hover:bg-gray-100">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="w-full rounded-md"
      />
      <div className="flex flex-col pr-12">
        <h3 className="mt-3 mb-1 font-semibold line-clamp-2">{title}</h3>
        <div className="text-sm text-gray-600">{channelTitle}</div>
        <div className="text-sm text-gray-600">
          {`${formatNumberWithSuffix(viewCount)} views`}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
