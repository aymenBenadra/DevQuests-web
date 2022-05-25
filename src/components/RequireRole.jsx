import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAlert from "../hooks/useAlert";

function RequireRole({ role }) {
  const { auth, roles } = useAuth();
  const location = useLocation();
  const { setAlert } = useAlert();
  let pass = false;

  switch (role) {
    case roles.guest:
      pass = !auth?.username ? true : false;
      break;

    case roles.user:
      pass = auth?.username ? true : false;
      break;

    case roles.admin:
      pass = auth?.is_admin ? true : false;
      break;

    default:
      pass = false;
  }

  !pass &&
    setAlert({
      type: "error",
      message: `You are not authorized to access ${location.pathname.substring(
        1
      )}`,
    });

  return pass ? (
    <Outlet />
  ) : auth?.username ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireRole;
