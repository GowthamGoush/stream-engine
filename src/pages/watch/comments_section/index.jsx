import { useEffect, useState } from "react";

import Comment from "./comment";
import { fetchCommentsThread } from "../../../fetchers/watch";

const CommentsSection = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  const fetchVideoComments = async () => {
    const { data, ok } = await fetchCommentsThread(videoId);
    if (ok) setComments(data);
  };

  useEffect(() => {
    fetchVideoComments();
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-2">
      {(comments || [])?.map((comment) => (
        <Comment data={comment} />
      ))}
    </div>
  );
};

export default CommentsSection;
