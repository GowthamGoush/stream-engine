import { useState } from "react";

import CommentsSection from "../index";

const Comment = ({ data }) => {
  const { totalReplyCount, topLevelComment, videoId } = data?.snippet || {};
  const { authorDisplayName, authorProfileImageUrl, textOriginal } =
    topLevelComment?.snippet || {};

  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="flex items-start mb-1">
      <img
        src={authorProfileImageUrl}
        alt="profile"
        className="rounded-full size-10 mt-[2px] mr-4"
      />
      <div className="flex flex-col">
        <h3 className="text-[13px] text-slate-950 font-semibold mb-[2px]">
          {authorDisplayName}
        </h3>
        <p className="text-slate-800">{textOriginal}</p>
        {totalReplyCount > 0 && (
          <div
            className="flex items-center rounded-3xl w-fit mt-2 p-2 hover:bg-sky-100 hover:cursor-pointer"
            onClick={() => setShowReplies(!showReplies)}
          >
            <img
              src="https://img.icons8.com/?size=50&id=5jRysPx2JtDa&format=png"
              alt="dropdown"
              className="size-3 mr-2"
            />
            <h3 className="text-sm text-nowrap text-blue-700 font-medium">
              {`${totalReplyCount} ${
                totalReplyCount > 1 ? "replies" : "reply"
              }`}
            </h3>
          </div>
        )}
        {showReplies && <CommentsSection videoId={videoId} />}
      </div>
    </div>
  );
};

export default Comment;
