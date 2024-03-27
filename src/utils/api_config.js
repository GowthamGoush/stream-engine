const API = {
  videoList: (apikey) =>
    `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=snippet&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apikey}`,
};

export default API;
