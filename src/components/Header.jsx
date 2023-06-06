import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../source/images/YouTube-Logo.wine.svg";
import { SearchInput, Button } from "../components";
import * as actions from "../store/action";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { infoUser, accessToken, isToggle } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const location = useLocation();
  function handleLogin() {
    dispatch(actions.login(true));
  }

  return (
    <header className="flex items-center justify-between">
      <section className="flex-side flex items-center overflow-hidden">
        <span
          className="flex items-center justify-center pl-2 cursor-pointer select-none"
          onClick={() => {
            isToggle
              ? dispatch(actions.toggle(false))
              : dispatch(actions.toggle(true));
            location.pathname.includes("/watch") &&
              dispatch(actions.showMenu(true));
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
      </section>
      <section className="flex-1">
        <SearchInput />
      </section>
      {!accessToken ? (
        <Button
          title="Sign In"
          iconLeft="account_circle"
          onClick={handleLogin}
        />
      ) : (
        <section className="flex-side flex items-center justify-end gap-2 pr-2">
          <span className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <span className="material-symbols-outlined">video_call</span>
          </span>
          <span className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
          </span>
          <span className="w-10 h-10 rounded-full shadow overflow-hidden">
            <img
              src={infoUser?.photoURL}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </span>
        </section>
      )}
    </header>
  );
}

export default memo(Header);
