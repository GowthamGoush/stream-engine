import React from "react";
import { useSelector } from "react-redux";

import SectionContainer from "./section_container";
import { MENU_ITEMS } from "./constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <nav className="flex flex-col w-56 h-full px-4 items-stretch divide-y">
      {MENU_ITEMS.map((menuSection) => (
        <SectionContainer section={menuSection} />
      ))}
    </nav>
  );
};

export default Sidebar;
