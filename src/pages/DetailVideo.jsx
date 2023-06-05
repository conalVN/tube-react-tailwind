/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  CommentThreads,
  DescriptionVideo,
  RelatedVideo,
  SidebarFlex,
} from "../components";
import * as actions from "../store/action";
import formatSubscribers from "../ultis/formatSubscribers";

function DetailVideo() {
  const { statusSubscribe, isShowMenu } = useSelector((state) => state.app);
  const { detail, comments } = useSelector((state) => state.video);
  const { detailChannel } = useSelector((state) => state.channel);
  const location = useLocation();
  const dispatch = useDispatch();
  let id = location.search.split("=")[1];

  useEffect(() => {
    dispatch(actions.getDetailVideo(id));
    dispatch(actions.getComment(id));
    dispatch(actions.getRelatedVideo(id));
  }, [id]);
  return (
    <div className="flex gap-8 px-10 py-4 w-full h-full overflow-y-auto">
      <section
        className={`fixed top-0 bottom-0 left-0 right-0 bg-alpha-3 ${
          isShowMenu ? "block" : "hidden"
        }`}
        onClick={() => {
          dispatch(actions.showMenu(false));
        }}
      >
        <SidebarFlex />
      </section>
      <div className="flex-play w-full h-full">
        <div className="flex flex-col gap-2">
          <iframe
            className="w-full h-[75vh] px-4"
            src={`https://www.youtube.com/embed/${id}`}
            title={detail?.snippet?.title}
          ></iframe>
          <h2 className="text-[20px] font-medium tracking-wide">
            {detail?.snippet?.title}
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex-none w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={detailChannel?.snippet?.thumbnails?.default?.url}
                  alt={detailChannel?.snippet?.title}
                  className="w-full h-full object-cover"
                />
              </span>
              <div className="flex flex-col">
                <span className="font-medium">
                  {detailChannel?.snippet?.title}
                </span>
                <span className="text-gray-500 text-sm">
                  {detailChannel &&
                    formatSubscribers(
                      detailChannel?.statistics?.subscriberCount
                    )}
                </span>
              </div>
              <Button
                title={statusSubscribe ? "Hủy đăng ký" : "Đăng ký"}
                styleBtn="h-max bg-black text-white py-2 px-4"
                onClick={() => {}}
              />
            </div>
            <div className="flex gap-2">
              <Button
                title="Chia sẻ"
                iconLeft="share"
                styleBtn="bg-gray-100 py-2 px-4 hover:bg-gray-200"
              />
              <Button
                title="Tải xuống"
                iconLeft="vertical_align_bottom"
                styleBtn="bg-gray-100 py-2 px-4 hover:bg-gray-200"
              />
              <Button
                iconLeft="more_horiz"
                styleBtn="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200"
              />
            </div>
          </div>
          <DescriptionVideo data={detail} />
          <CommentThreads data={comments} />
        </div>
      </div>
      <div className="flex-card w-full h-full">
        <RelatedVideo />
      </div>
    </div>
  );
}

export default memo(DetailVideo);
