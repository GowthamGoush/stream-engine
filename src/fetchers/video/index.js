import API from "../../utils/api_config";

export const fetchPopularVideoList = async () => {
  let data, error, ok;

  try {
    const response = await fetch(API.videoList(API_KEY));
    data = await response.json();
    ok = response.ok;
  } catch (e) {
    error = e;
  }

  return {
    data,
    ok,
    error,
  };
};
