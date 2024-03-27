import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../pages/components/sidebar/sidebar";

const BasicLayout = () => {
  return (
    <main className="h-screen">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default BasicLayout;
