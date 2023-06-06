/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useState } from "react";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as actions from "../store/action";
import formatView from "../ultis/formatView";

function Card({ data }) {
  const navigate = useNavigate();
  const [thumbnailChannel, setThumbnailChannel] = useState("");
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/v3/channels?${new URLSearchParams({
        key: process.env.REACT_APP_API_KEY,
        part: "snippet",
        id: data?.snippet?.channelId,
      })}`
    )
      .then((res) => res.json())
      .then((data) => {
        setThumbnailChannel(data?.items[0]?.snippet?.thumbnails?.default?.url);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      className="flex-card cursor-pointer"
      onClick={() => {
        navigate(`/watch?v=${data?.id}`);
      }}
    >
      <div className="w-full h-full">
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src={data?.snippet?.thumbnails?.medium?.url}
            alt={data?.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-2 mt-3">
          <div className="flex-none w-9 h-9 rounded-full overflow-hidden">
            <Link
              to={`/${data?.snippet?.channelId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={thumbnailChannel}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          <div className="pr-4">
            <h3 className="line-clamp-2 font-medium">{data?.snippet?.title}</h3>
            <p className="text-sm font-base text-gray-500">
              {data?.snippet?.channelTitle}
            </p>
            <span className="flex gap-2 text-sm text-gray-500">
              <span className="">
                {formatView(+data?.statistics?.viewCount)}
              </span>
              <span className="">
                {moment(data?.snippet?.publishedAt, "YYYYMMDD").fromNow()}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
