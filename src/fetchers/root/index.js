import API from "../../utils/api_config";

export const fetchPopularVideoList = async () => {
  let data, error, ok;
  const url = API.videoList;
  try {
    const response = await fetch(url);
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
