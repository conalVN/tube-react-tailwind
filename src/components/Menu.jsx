import { memo } from "react";
import { NavLink } from "react-router-dom";

const styleA = `flex items-center gap-4 p-2 rounded-md bg-gray-200 hover:bg-gray-300 `;
const styleB = `flex items-center gap-4 p-2 rounded-md hover:bg-gray-200`;

function Menu({ title, data, playlistUser, isMore }) {
  return (
    <ul className="py-4 border-b border-gray-200">
      {title && <h3 className="px-4">{title}</h3>}
      {data?.map((item) => {
        return (
          <li className="" key={item?.name}>
            <NavLink
              to={item?.path}
              className={({ isActive }) => (isActive ? styleA : styleB)}
            >
              <span className="flex items-center justify-center">
                <span className="material-symbols-outlined">{item?.icon}</span>
              </span>
              <span className="flex-1">{item?.name}</span>
              {item?.subs && (
                <span className="flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </span>
              )}
            </NavLink>
          </li>
        );
      })}
      {playlistUser?.lenght > 0 &&
        playlistUser?.map((item) => {
          return (
            <li className="" key={item?.name}>
              <NavLink
                to={item?.path}
                className={({ isActive }) => (isActive ? styleA : styleB)}
              >
                <span className="flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    {item?.icon}
                  </span>
                </span>
                <span className="">{item?.name}</span>
              </NavLink>
            </li>
          );
        })}
      {isMore && (
        <li className="flex gap-4 p-2 rounded-md hover:bg-gray-200">
          <span className="material-symbols-outlined">expand_more</span>
          <span className="">Thêm</span>
        </li>
      )}
    </ul>
  );
}

export default memo(Menu);
