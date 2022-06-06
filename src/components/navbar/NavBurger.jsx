import React from "react";
import { Link } from "react-router-dom";

function NavBurger() {
  return (
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
      <ul
        tabIndex="0"
        className="menu dropdown-content mt-3 bg-base-100 rounded-box p-2 w-fit min-w-fit shadow"
      >
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/roadmaps`}>Roadmaps</Link>
        </li>
        <li>
          <Link to={`/resources`}>Resources</Link>
        </li>
        <li>
          <Link to={`/questions`}>Questions</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBurger;
