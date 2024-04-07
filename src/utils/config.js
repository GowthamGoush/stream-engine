const { NODE_ENV, REACT_APP_YOUTUBE_API_KEY } = process.env;

const configList = {
  development: {
    CURRENT_ENV: NODE_ENV,
    HOST: "http://localhost:3000",
    YOUTUBE_API_KEY: REACT_APP_YOUTUBE_API_KEY,
  },
  production: {
    CURRENT_ENV: NODE_ENV,
    HOST: "https://streamengine.netlify.app",
    YOUTUBE_API_KEY: REACT_APP_YOUTUBE_API_KEY,
  },
};

export default configList[NODE_ENV];
