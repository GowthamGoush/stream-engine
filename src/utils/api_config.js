import configList from "./config";

const { YOUTUBE_API_KEY } = configList;

const API = {
  videoList: `https://youtube.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=contentDetails&part=snippet&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN`,
  commentThreads: `https://youtube.googleapis.com/youtube/v3/commentThreads?key=${YOUTUBE_API_KEY}&part=id&part=snippet&part=replies`,
  commentReplies: `https://youtube.googleapis.com/youtube/v3/comments?key=${YOUTUBE_API_KEY}&part=id&part=snippet`,
};

export const getApiUrl = (url, params = {}) => {
  const modifiedURL = new URL(url);

  Object.keys(params).forEach((key) =>
    modifiedURL.searchParams.append(key, params[key])
  );

  return modifiedURL;
};

export default API;
