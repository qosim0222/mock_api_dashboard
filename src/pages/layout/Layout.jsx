import React from "react";
import { NavLink, Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <main className="min-h-[70vh] flex-1">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
