/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import * as actions from "../store/action";

function Videos() {
  const { videos, nextPageToken } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    if (nextPageToken) {
      const handleScroll = () => {
        function isElementScrolledToBottom(element) {
          // Tính toán chiều cao của phần tử
          const elementHeight = element.scrollHeight;
          const scrollTop = element.parentElement.scrollTop;
          const elementVisibleHeight = element.clientHeight;

          // Kiểm tra nếu vị trí cuộn và kích thước của phần tử đạt đến cuối
          return scrollTop + elementVisibleHeight >= elementHeight - 400;
        }
        if (isElementScrolledToBottom(ref.current)) {
          dispatch(actions.getPopularVideoWithToken(nextPageToken));
        }
      };
      window.addEventListener("wheel", handleScroll);
      return () => window.removeEventListener("wheel", handleScroll);
    }
  }, [nextPageToken]);
  return (
    <div
      className="w-full h-full max-w-container-videos mx-auto flex flex-wrap gap-4 pt-4"
      ref={ref}
    >
      {videos?.length > 0 &&
        videos?.map((video) => {
          return <Card data={video} key={video?.id} />;
        })}
    </div>
  );
}

export default memo(Videos);
