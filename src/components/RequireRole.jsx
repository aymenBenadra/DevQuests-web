import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequireRole({ role }) {
  const { auth, roles } = useAuth();
  const location = useLocation();
  let pass = false;

  switch (role) {
    case roles.guest:
      pass = auth?.username ? false : true;
      break;

    case roles.user:
      pass = auth?.username ? true : false;
      break;

    case roles.admin:
      pass = auth?.username && auth?.is_admin ? true : false;
      break;

    default:
      pass = false;
  }

  return pass ? (
    <Outlet />
  ) : auth?.username ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireRole;
