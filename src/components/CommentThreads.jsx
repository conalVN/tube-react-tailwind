import { memo, useRef, useState } from "react";
import Comment from "./Comment.jsx";
import { useSelector } from "react-redux";
import Button from "./Button.jsx";

function CommentThreads({ data }) {
  const { userInfo } = useSelector((state) => state.app);
  const [comment, setComment] = useState("");
  const ref = useRef();
  function handleResize() {
    ref.current.style.height = ref.current.scrollHeight + "px";
    console.log(comment);
    if (!comment) ref.current.style.height = "40px";
  }
  function handleComfirm() {}
  return (
    <section className="w-full h-full mt-4">
      <div className="w-full h-full flex gap-4">
        <img
          src={userInfo?.photoURL}
          alt={userInfo?.displayName}
          className="w-12 h-12 object-cover rounded-full overflow-hidden"
        />
        <div className="w-full h-auto">
          <textarea
            ref={ref}
            placeholder="Viết bình luận..."
            className="w-full h-10 py-2 outline-none resize-none overflow-hidden border-b border-gray-500 focus:border-b-2"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              handleResize();
            }}
            onKeyUp={() => {
              if (!comment) ref.current.style.height = "40px";
            }}
          ></textarea>
          <div className="flex items-center justify-end gap-2">
            <Button
              title="Hủy"
              styleBtn="bg-transparent shadow-none py-2 px-4 hover:bg-gray-100 "
              onClick={() => {
                setComment("");
                ref.current.style.height = "40px";
              }}
            />
            <Button
              title="Bình luận"
              styleBtn={`shadow-none py-2 px-4 ${
                comment
                  ? "text-white bg-blue-600 opacity-100 hover:bg-blue-700"
                  : "bg-gray-100 opacity-50"
              }`}
              onClick={handleComfirm}
            />
          </div>
        </div>
      </div>
      <div className="">
        {data?.map((item) => {
          return <Comment data={item} key={item?.id} />;
        })}
      </div>
    </section>
  );
}

export default memo(CommentThreads);
