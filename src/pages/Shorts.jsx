/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import { memo, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortIcon } from "../ultis/constant";
import * as actions from "../store/action";

function Shorts() {
  const { shorts, curIndex } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const [curShort, setCurShort] = useState(
    shorts[curIndex] ? shorts[curIndex] : shorts[0]
  );
  useLayoutEffect(() => {
    const handleScrollNextPage = (index) => {
      if (index < shorts?.length - 1) {
        setCurShort(shorts[index + 1]);
        dispatch(actions.setCurIndex(index + 1));
      } else {
        alert("Bạn đã xem hết shorts");
      }
    };
    const handleScrollPrevPage = (index) => {
      if (index > 0) {
        setCurShort(shorts[index - 1]);
        dispatch(actions.setCurIndex(index - 1));
      }
    };
    window.onwheel = function (e) {
      if (e.deltaY < 0) {
        handleScrollPrevPage(curIndex);
      } else {
        handleScrollNextPage(curIndex);
      }
    };
  }, [curIndex]);
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center gap-2">
        <div
          className="w-short h-[90vh] flex items-center gap-3"
          key={curShort?.id}
        >
          <iframe
            src={`https://www.youtube.com/embed/${curShort?.id}`}
            className="w-full h-full rounded-lg overflow-hidden"
          ></iframe>
          <aside className="flex flex-col gap-10">
            {shortIcon?.map((opt) => {
              return (
                <span
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300"
                  key={opt?.icon}
                >
                  <span className="material-symbols-outlined">{opt?.icon}</span>
                </span>
              );
            })}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default memo(Shorts);
