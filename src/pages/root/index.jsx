import React, { useEffect, useState } from "react";

import VideoContainer from "./video_container";
import { fetchPopularVideoList } from "../../fetchers/video";

const Contents = () => {
  const [videos, setVideos] = useState();

  const fetchVideos = async () => {
    const { data, ok } = await fetchPopularVideoList();
    if (ok) setVideos(data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <section className="h-full w-full">
      <VideoContainer info={videos} />
    </section>
  );
};

export default Contents;
