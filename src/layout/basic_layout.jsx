import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../pages/components/sidebar/sidebar";

const BasicLayout = () => {
  return (
    <section className="flex ">
      <Sidebar />
      <Outlet />
    </section>
  );
};

export default BasicLayout;
