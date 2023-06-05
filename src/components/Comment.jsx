import { memo } from "react";
import moment from "moment";
import Button from "./Button";

function Comment({ data }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img
          src={data?.topLevelComment?.snippet?.authorProfileImageUrl}
          alt={data?.topLevelComment?.snippet?.authorDisplayName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-2">
          <span className="font-medium">
            {data?.topLevelComment?.snippet?.authorDisplayName}
          </span>
          <span className="text-gray-500 text-sm">
            {moment(data?.topLevelComment?.snippet?.publishedAt)
              .startOf("day")
              .fromNow()}
          </span>
        </p>
        <p
          className=""
          dangerouslySetInnerHTML={{
            __html: data?.topLevelComment?.snippet?.textDisplay,
          }}
        ></p>
        <div className="flex gap-5">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined">thumb_up</span>
            <span className="">
              {data?.topLevelComment?.snippet?.likeCount}
            </span>
          </span>
          <span className="">
            <span className="material-symbols-outlined">thumb_down</span>
          </span>
          <Button
            title="Phản hồi"
            styleBtn="text-sm py-2 px-4 bg-transparent shadow-none hover:bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(Comment);
