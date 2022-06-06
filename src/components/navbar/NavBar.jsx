import React from "react";
import NavUserDropdown from "./NavUserDropdown";
import NavThemeSwap from "./NavThemeSwap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import NavBurger from "./NavBurger";

function NavBar() {
  return (
    <div className="navbar mb-4 p-0 py-2 md:p-2">
      <div className="navbar-start md:hidden">
        <NavBurger />
      </div>
      <div className="navbar-center md:navbar-start md:flex-shrink">
        <Link to="/">
          <span className="btn btn-ghost normal-case text-xl p-2 h-fit font-serif">
            <img src={logo} alt="logo" className="h-10 mr-2" />
            DevQuests
          </span>
        </Link>
      </div>
      <div className="hidden md:navbar-center md:inline-block">
        <ul
          tabIndex="0"
          className="menu menu-horizontal bg-base-100 rounded-box p-2 w-fit min-w-fit shadow"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/roadmaps">Roadmaps</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/questions">Questions</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavThemeSwap />
        <NavUserDropdown />
      </div>
    </div>
  );
}

export default NavBar;
