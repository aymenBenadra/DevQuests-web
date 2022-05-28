import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/dashboard/SideMenu";
import Stats from "../components/dashboard/Stats";

function Dashboard() {
  return (
    <>
      <div className="flex items-center md:flex-nowrap flex-wrap justify-center space-y-2 md:space-x-4 px-4 md:space-y-0">
        <SideMenu />
        <Outlet />
        <Stats />
      </div>
    </>
  );
}

export default Dashboard;
