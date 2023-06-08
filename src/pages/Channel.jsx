/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components";
import * as actions from "../store/action";
import formatSubscribers from "../ultis/formatSubscribers";

function Channel() {
  const { detailChannel } = useSelector((state) => state.channel);
  const { idChannel } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getDetailChannel(idChannel));
  }, [idChannel]);
  return (
    <div className="w-full h-full">
      <div className="h-[25vh] border border-red-500">
        <img src={``} alt="" className="w-full h-full" />
      </div>
      <div className="flex items-center px-4">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img src={``} alt="" className="" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl">{detailChannel?.snippet?.title}</h2>
          <p className="flex items-center gap-2 text-gray-500">
            <span className="text-gray-600 font-medium">
              {detailChannel?.snippet?.customUrl}
            </span>
            <span className="">
              {formatSubscribers(detailChannel?.statistics?.subscriberCount)}
            </span>
            <span className="">Total video</span>
          </p>
          <p className="text-sm text-gray-500 line-clamp-1 w-2/3">
            {detailChannel?.snippet?.description}
          </p>
        </div>
        <div className="">
          <Button
            iconLeft="notifications"
            iconRight="expand_more"
            title="Đã đăng ký"
          />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default memo(Channel);
