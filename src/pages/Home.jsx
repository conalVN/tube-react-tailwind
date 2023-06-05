import { memo } from "react";
import { Sidebar, SidebarMini } from "../components";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function Home() {
  const { isToggle } = useSelector((state) => state.app);

  return (
    <>
      {!isToggle ? (
        <div className="navbar flex-side w-full h-full overflow-y-auto">
          <Sidebar />
        </div>
      ) : (
        <div className="">
          <SidebarMini />
        </div>
      )}
      <section className="flex-1 w-full h-full overflow-y-auto">
        <Outlet />
      </section>
    </>
  );
}

export default memo(Home);
