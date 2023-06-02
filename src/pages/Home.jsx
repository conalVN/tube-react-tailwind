import { memo } from "react";
import { Card, Sidebar } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const { videos } = useSelector((state) => state.video);
  return (
    <>
      <div className="navbar flex-side w-full h-full overflow-y-auto">
        <Sidebar />
      </div>
      <section className="flex-1 h-full overflow-y-auto">
        <div className="w-full h-full flex flex-wrap gap-4 pt-4 mx-10">
          {videos?.length > 0 &&
            videos?.map((video) => {
              return <Card data={video} key={video?.id} />;
            })}
        </div>
      </section>
    </>
  );
}

export default memo(Home);
