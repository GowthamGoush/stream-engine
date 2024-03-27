import React from "react";
import { useDispatch } from "react-redux";

import logo from "../../../assets/yt_logo.png";
import { toggleMenu } from "../../../models/appSlice";

const NavigationMenu = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex">
      <button onClick={toggleMenuHandler}>
        <img
          src={
            "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png"
          }
          alt="menu"
          className="p-1.5 h-10"
        />
      </button>
      <a href="/">
        <img src={logo} alt="logo" className="p-2.5 h-10" />
      </a>
    </div>
  );
};

export default NavigationMenu;
