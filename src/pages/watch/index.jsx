import React from "react";

import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  return (
    <div className="w-full flex flex-col mt-14 px-6 content-area">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        title="YouTube video player"
        referrerpolicy="strict-origin-when-cross-origin"
        className="w-full my-6 aspect-video rounded-md"
      />
    </div>
  );
};

export default Watch;
