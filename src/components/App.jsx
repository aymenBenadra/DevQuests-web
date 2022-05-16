import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Roadmap from "../pages/Roadmap";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";
import useAuth from "../hooks/useAuth";
import RequireRole from "./RequireRole";
import Module from "./Module";

function App() {
  const { roles } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path=":roadmap" element={<Roadmap />}>
          <Route index element={
            <div>select Module</div>
          } />
          <Route path=":module" element={<Module />} />
        </Route>
        <Route element={<RequireRole role={roles.guest} />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<RequireRole role={roles.user} />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route element={<RequireRole role={roles.admin} />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
