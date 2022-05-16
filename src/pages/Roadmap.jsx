import React from "react";
import { useParams, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Roadmap() {
  const { roadmap } = useParams();
  const { auth } = useAuth();
  return (
    <>
      <div>
        Roadmap: {roadmap} auth: {auth?.username} role:{" "}
        {auth.is_admin ? "admin" : "user"}
      </div>
      <Outlet />
    </>
  );
}

export default Roadmap;
