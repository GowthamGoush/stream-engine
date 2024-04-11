import React from "react";

import NavigationMenu from "./navigation_menu";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-4 h-14 ">
      <NavigationMenu />
      <div className="flex basis-2/5 items-center h-10">
        <div className="flex items-center w-full h-10 pl-4 pr-1 border-y border-l rounded-l-full">
          <input placeholder="Search" className="w-full outline-none" />
        </div>

        <button
          type="submit"
          className="min-w-16 h-10 p-1 justify-center border rounded-r-full bg-gray-50 hover:bg-gray-100"
        >
          <div className="inline-flex items-center h-full">
            <img
              src={"https://img.icons8.com/?size=60&id=59878&format=png"}
              alt="logo"
              className="h-6"
            />
          </div>
        </button>
      </div>
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
