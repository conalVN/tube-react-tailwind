import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TermsOfService, menu, menu2, menu3, options } from "../ultis/constant";
import { Menu, Button } from "../components";
import * as actions from "../store/action";

function Sidebar() {
  const { accessToken } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(actions.getSubscriptions())
  // }, [accessToken])
  return (
    <aside className="w-full h-full px-4">
      <Menu data={menu} />
      <Menu data={menu2} playlistUser={[]} isMore />
      {!accessToken ? (
        <div className="w-full p-4 border-b border-gray-200">
          <p className="mb-2 text-sm">
            Sign in to like videos, comment and subscribe
          </p>
          <Button title="Sign in" iconLeft="account_circle" />
        </div>
      ) : (
        <Menu title="Kênh đăng ký" data={[]} />
      )}
      <Menu title="Khám phá" data={menu3} />
      <Menu data={options} />
      <p className="flex flex-wrap gap-2 py-4">
        {TermsOfService?.map((item) => {
          return (
            <Link
              to={item?.path}
              key={item?.path}
              className="text-sm font-semibold text-gray-500"
            >
              <span className="">{item?.name}</span>
            </Link>
          );
        })}
      </p>
      <div className="h-20"></div>
    </aside>
  );
}

export default memo(Sidebar);
