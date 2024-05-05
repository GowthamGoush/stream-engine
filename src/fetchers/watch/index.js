import API, { getApiUrl } from "../../utils/api_config";

export const fetchCommentsThread = async (videoId) => {
  let data, error, ok;
  const url = getApiUrl(API.commentThreads, { videoId });
  try {
    const response = await fetch(url);
    data = await response.json();
    ok = response.ok;
  } catch (e) {
    error = e;
  }

  return {
    data: data?.items,
    ok,
    error,
  };
};

export const fetchCommentReplies = async (parentId) => {
  let data, error, ok;
  const url = getApiUrl(API.commentReplies, { parentId });
  try {
    const response = await fetch(url);
    data = await response.json();
    ok = response.ok;
  } catch (e) {
    error = e;
  }

  return {
    data: data?.items,
    ok,
    error,
  };
};
