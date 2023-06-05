import { memo } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

function Search() {
  const { videosSerch } = useSelector((state) => state.video);
  const { detailChannel } = useSelector((state) => state.channel);
  return (
    <div className="flex flex-col gap-4">
      {videosSerch?.map((video) => {
        let isVideo = video?.id?.kind === "youtube#video";
        if (isVideo) {
          return (
            <div className="flex gap-2" key={video?.id?.videoId}>
              <div className="flex-thumbnailSearch rounded-md overflow-hidden">
                <img
                  src={video?.snippet?.thumbnails?.medium?.url}
                  alt={video?.snippet?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 mr-20">
                <h3 className="text-xl">{video?.snippet?.title}</h3>
                <p className="flex gap-1 text-xs text-gray-500">
                  <span className="">Views</span>-
                  <span className="">
                    {moment(video?.snippet?.publishedAt)
                      .startOf("day")
                      .fromNow()}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  {video?.snippet?.description}
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex gap-2" key={video?.id?.channelId}>
              <div className="flex-thumbnailSearch flex justify-center">
                <img
                  src={video?.snippet?.thumbnails?.default?.url}
                  alt={video?.snippet?.title}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <div className="mr-20">
                <h3 className="">{video?.snippet?.title}</h3>
                <span className="">
                  <span className=""></span>
                  <span className=""></span>
                </span>
                <p className="text-sm text-gray-500 text-ellipsis line-clamp-2">
                  {video?.snippet?.description}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default memo(Search);
