import React from "react";

import NavigationMenu from "./navigation_menu";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-4 h-14">
      <NavigationMenu />
      <div className="flex">
        <button>
          <img
            src={"https://img.icons8.com/?size=512&id=7819&format=png"}
            alt="logo"
            className="p-1 h-10"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
