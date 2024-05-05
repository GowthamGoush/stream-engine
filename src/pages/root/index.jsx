import React, { useEffect, useState } from "react";

import VideoContainer from "./video_container";
import { fetchPopularVideoList } from "../../fetchers/root";

const Contents = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const { data, ok } = await fetchPopularVideoList();
    if (ok) setVideos(data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="h-full w-full content-area mt-14">
      <VideoContainer info={videos} />
    </div>
  );
};

export default Contents;
