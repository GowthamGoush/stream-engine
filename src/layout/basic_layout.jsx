import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../pages/components/header";
import Sidebar from "../pages/components/sidebar/sidebar";

const BasicLayout = () => {
  return (
    <main className="h-screen">
      <Header />
      <section className="flex">
        <Sidebar />
        <Outlet />
      </section>
    </main>
  );
};

export default BasicLayout;
