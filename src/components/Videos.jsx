import { memo } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

function Videos() {
  const { videos } = useSelector((state) => state.video);
  return (
    <div className="w-full h-full max-w-container-videos mx-auto flex flex-wrap gap-4 pt-4">
      {videos?.length > 0 &&
        videos?.map((video) => {
          return <Card data={video} key={video?.id} />;
        })}
    </div>
  );
}

export default memo(Videos);
