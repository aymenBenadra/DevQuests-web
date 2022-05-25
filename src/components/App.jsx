import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Roadmap from "../pages/Roadmap";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";
import useAuth from "../hooks/useAuth";
import RequireRole from "./RequireRole";
import Module from "./Module";
import Layout from "../layouts/Layout";
import Register from "../pages/Register";

function App() {
  const { roles } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="roadmap/:roadmap" element={<Roadmap />}>
          <Route
            index
            element={<div className="text-center">Select Module</div>}
          />
          <Route path=":module" element={<Module />} />
        </Route>

        <Route element={<RequireRole role={roles.guest} />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<RequireRole role={roles.user} />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route element={<RequireRole role={roles.admin} />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
