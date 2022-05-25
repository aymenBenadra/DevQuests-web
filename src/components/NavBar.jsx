import React from "react";
import NavUserDropdown from "./NavUserDropdown";
import NavThemeSwap from "./NavThemeSwap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <div className="navbar bg-base-100 w-full flex-col mb-4 sm:flex-row">
      <div className="flex-1">
        <Link to="/">
          <span className="btn btn-ghost normal-case text-xl p-3 h-fit">
            <img src={logo} alt="logo" className="h-10 mr-2" />
            DevQuests
          </span>
        </Link>
      </div>
      <div className="flex-none space-x-2">
        <NavThemeSwap />
        <NavUserDropdown />
      </div>
    </div>
  );
}

export default NavBar;
