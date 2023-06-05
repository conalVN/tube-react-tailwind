import { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import logo from "../source/images/YouTube-Logo.wine.svg";
import * as actions from "../store/action";
function SidebarFlex() {
  const { isShowMenu } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <aside
      className={`absolute top-0 bottom-0 left-0 z-50 max-w-[240px] h-full bg-white transition-all ${
        isShowMenu ? "animate-moveRight" : "animate-moveLeft"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center px-4">
        <span
          className="flex items-center justify-center pl-2 cursor-pointer select-none"
          onClick={() => {
            isShowMenu
              ? dispatch(actions.showMenu(false))
              : dispatch(actions.showMenu(true));
          }}
        >
          <span className="material-symbols-outlined">menu</span>
        </span>
        <span className="flex items-center justify-center w-[120px] py-4 pl-2 max-h-[56px] cursor-pointer">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-cover aspect-auto"
            />
          </Link>
        </span>
      </div>
      <div className="navbar w-full h-full overflow-y-auto">
        <Sidebar />
      </div>
    </aside>
  );
}

export default memo(SidebarFlex);
