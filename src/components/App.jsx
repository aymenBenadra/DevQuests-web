import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Roadmap from "../pages/Roadmap";
import Roadmaps from "../pages/Roadmaps";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import useAuth from "../hooks/useAuth";
import RequireRole from "./RequireRole";
import Module from "./roadmap/Module";
import Layout from "../layouts/Layout";
import Register from "../pages/Register";
import Card from "../layouts/Card";
import RemoveRoadmap from "./dashboard/RemoveRoadmap";
import AddResource from "./dashboard/AddResource";
import UpdateResource from "./dashboard/UpdateResource";
import RemoveQuestion from "./dashboard/RemoveQuestion";
import AddQuestion from "./dashboard/AddQuestion";
import UpdateQuestion from "./dashboard/UpdateQuestion";
import RemoveResource from "./dashboard/RemoveResource";
import Resources from "../pages/Resources";
import Questions from "../pages/Questions";
import AddRoadmap from "./dashboard/AddRoadmap";

function App() {
  const { roles } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="resources" element={<Resources />} />
        <Route path="questions" element={<Questions />} />
        <Route path="roadmaps" element={<Roadmaps />} />
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
          <Route path="dashboard" element={<Dashboard />}>
            <Route
              index
              element={
                <Card
                  title="Dashboard 🚀"
                  styles="w-full bg-base-500 border border-base-300"
                >
                  Choose an Action
                </Card>
              }
            />
            <Route path="roadmaps/add" element={<AddRoadmap />} />
            <Route path="roadmaps/remove" element={<RemoveRoadmap />} />
            <Route path="resources/add" element={<AddResource />} />
            <Route path="resources/update" element={<UpdateResource />} />
            <Route path="resources/remove" element={<RemoveResource />} />
            <Route path="questions/add" element={<AddQuestion />} />
            <Route path="questions/update" element={<UpdateQuestion />} />
            <Route path="questions/remove" element={<RemoveQuestion />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
