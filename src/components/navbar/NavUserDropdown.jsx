import React from "react";
import useAuth from "../../hooks/useAuth";
import useAlert from "../../hooks/useAlert";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

function NavUserDropdown() {
  const { auth, setAuth } = useAuth();
  const { setAlert } = useAlert();
  const navigate = useNavigate();

  function handleLogout() {
    window.confirm("Are you sure you want to log out?") &&
      axios.post("/logout").then(() => {
        setAuth({});
        setAlert({ type: "info", message: "Logged out successfully" });
        navigate("/");
      });
  }

  return auth?.username ? (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar flex w-full hover:drop-shadow-xl pr-2"
      >
        <div
          className="object-center mr-2 mask mask-squircle"
          dangerouslySetInnerHTML={{
            __html: decodeURIComponent(auth.avatar),
          }}
        ></div>
        <span className="font-serif">{auth.username}</span>
      </label>
      <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-base-800 rounded-box w-56 bg-base-800 z-50">
        {auth?.is_admin ? (
          <li>
            <div>
              <Link to="/dashboard">
                Dashboard{" "}
                <span className="badge badge-outline badge-primary">Admin</span>
              </Link>
            </div>
          </li>
        ) : null}
        <li>
          <div>
            <Link to="/profile">
              Profile{" "}
              <span className="badge badge-outline badge-primary">
                {auth?.is_admin ? "Admin" : "User"}
              </span>
            </Link>
          </div>
        </li>

        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  ) : (
    <>
      <Link to="/register" className="btn justify-self-end btn-success mr-3 hidden md:block">
        Sign up
      </Link>
      <Link to="/login" className="btn justify-self-end">
        Login
      </Link>
    </>
  );
}

export default NavUserDropdown;
