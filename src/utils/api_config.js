import configList from "./config";

const { YOUTUBE_API_KEY } = configList;

const API = {
  videoList: `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=snippet&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`,
};

export default API;
