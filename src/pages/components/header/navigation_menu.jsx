import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/yt_logo.png";

const NavigationMenu = () => {
  return (
    <div className="flex">
      <button>
        <img
          src={
            "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png"
          }
          alt="logo"
          className="p-1.5 h-10"
        />
      </button>
      <Link to={"/"}>
        <img src={logo} alt="logo" className="p-2.5 h-10" />
      </Link>
    </div>
  );
};

export default NavigationMenu;
