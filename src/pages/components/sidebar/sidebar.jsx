import React from "react";
import SectionContainer from "./section_container";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-56 h-full px-4 items-stretch divide-y">
      <SectionContainer items={["Home", "Shorts", "Subscription"]} />
      <SectionContainer
        items={["Trending", "Shoping", "Music", "Live", "Gaming"]}
      />
      <SectionContainer items={["Settings", "Report history", "Help"]} />
    </aside>
  );
};

export default Sidebar;
