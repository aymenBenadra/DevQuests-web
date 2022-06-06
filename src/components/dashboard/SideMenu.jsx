import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <ul className="menu menu-horizontal md:menu-vertical w-fit p-0.5 md:p-2 rounded-box h-fit bg-base-100 border border-base-300 z-10 shadow-xl sticky top-2">
      <li>
        <span>Roadmaps</span>
        <ul className="rounded-box p-2 bg-base-100 border border-base-300">
          <li>
            <Link to="/roadmaps">
              <span>All Roadmaps</span>
            </Link>
          </li>
          <li>
            <Link to="roadmaps/add">
              <span>Add Roadmap</span>
            </Link>
          </li>
          <li>
            <Link to="roadmaps/update">
              <span>Update Roadmap</span>
            </Link>
          </li>
          <li>
            <Link to="roadmaps/remove">
              <span>Remove Roadmap</span>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <span>Resources</span>
        <ul className="rounded-box p-2 bg-base-100 border border-base-300">
          <li>
            <Link to="/resources">
              <span>All Resources</span>
            </Link>
          </li>
          <li>
            <Link to="resources/add">
              <span>Add Resource</span>
            </Link>
          </li>
          <li>
            <Link to="resources/update">
              <span>Update Resource</span>
            </Link>
          </li>
          <li>
            <Link to="resources/remove">
              <span>Remove Resource</span>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <span>Questions</span>
        <ul className="rounded-box p-2 bg-base-100 border border-base-300">
          <li>
            <Link to="/questions">
              <span>All Questions</span>
            </Link>
          </li>
          <li>
            <Link to="questions/add">
              <span>Add Question</span>
            </Link>
          </li>
          <li>
            <Link to="questions/update">
              <span>Update Question</span>
            </Link>
          </li>
          <li>
            <Link to="questions/remove">
              <span>Remove Question</span>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default SideMenu;
