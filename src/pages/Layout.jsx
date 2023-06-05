import { memo, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components";
import { useDispatch } from "react-redux";
import { getPopularVideo } from "../store/action";

function Layout() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getPopularVideo());
  }, []);
  useEffect(() => {
    document.onbeforeunload = () => {
      document.scrollTo(0, 0);
    };
  }, [location]);
  return (
    <div className="w-full h-screen font-roboto overflow-hidden">
      <div className="px-4">
        <Header />
      </div>
      <div className="flex h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default memo(Layout);
