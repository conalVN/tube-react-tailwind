import { memo } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function RelatedVideo() {
  const { relatedVideos } = useSelector((state) => state.video);
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col gap-2">
      {relatedVideos?.map((video) => {
        return (
          <div
            className="flex-none flex gap-2"
            key={video?.id?.videoId}
            onClick={() => navigate(`/watch?v=${video?.id?.videoId}`)}
          >
            <div className="flex-thumbnail h-24 rounded-md overflow-hidden">
              <img
                src={video?.snippet?.thumbnails?.medium?.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium line-clamp-2">
                {video?.snippet?.title}
              </p>
              <span className="mt-1 text-xs text-gray-500 line-clamp-1">
                {video?.snippet?.channelTitle}
              </span>
              <p className="text-xs text-gray-500">
                <span className="">{}</span>
                <span className="">
                  {moment(video?.snippet?.publishedAt).startOf("day").fromNow()}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default memo(RelatedVideo);
