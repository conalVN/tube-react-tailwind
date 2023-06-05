import { memo } from "react";
import { NavLink } from "react-router-dom";
import { menumini } from "../ultis/constant";

const styleA = "flex flex-col items-center gap-1";
const styleB = "flex flex-col items-center gap-1";

function SidebarMini() {
  return (
    <aside className="py-4">
      <ul className="flex flex-col gap-8">
        {menumini?.map((item) => {
          return (
            <li className="" key={item?.name}>
              <NavLink
                to={item?.path}
                className={({ isActive }) => (isActive ? styleA : styleB)}
              >
                <span className="material-symbols-outlined">{item?.icon}</span>
                <span className="text-xs">{item?.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default memo(SidebarMini);
