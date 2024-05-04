import React from "react";
import { Link } from "react-router-dom";

import { formatNumberWithSuffix } from "../../../../utils/common";

const VideoCard = ({ details }) => {
  const { id, snippet, statistics } = details || {};

  const { title, channelTitle, thumbnails } = snippet || {};
  const { viewCount } = statistics || {};

  return (
    <Link to={`/watch?v=${id}`}>
      <div className="h-full p-2 rounded-lg cursor-pointer transition-colors duration-700 ease-in-out bg-white hover:bg-gray-100">
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
    </Link>
  );
};

export default VideoCard;
