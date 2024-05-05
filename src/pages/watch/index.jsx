import React from "react";
import { useSearchParams } from "react-router-dom";

import CommentsSection from "./comments_section";

const Watch = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  return (
    <div className="w-full flex flex-col mt-14 px-6 content-area">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        title="YouTube video player"
        referrerpolicy="strict-origin-when-cross-origin"
        className="w-full mt-6 aspect-video rounded-md"
      />
      <div className="mb-10">
        <h1 className="text-lg font-semibold mb-5">Top comments:</h1>
        <CommentsSection videoId={videoId} />
      </div>
    </div>
  );
};

export default Watch;
