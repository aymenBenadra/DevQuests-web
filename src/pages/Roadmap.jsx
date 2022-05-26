import { useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import Hero from "../components/Hero";
import useRoadmaps from "../hooks/useRoadmaps";
import useModules from "../hooks/useModules";
import useAlert from "../hooks/useAlert";
import useAuth from "../hooks/useAuth";
import { axiosPrivate } from "../api/axios";

function Roadmap() {
  const { roadmap: title } = useParams();
  const { roadmaps, roadmap, getRoadmaps, setRoadmap } = useRoadmaps();
  const { modules, setModules } = useModules();
  const { setAlert } = useAlert();
  const { auth } = useAuth();

  useEffect(() => {
    if (roadmaps.length === 0) {
      getRoadmaps();
    }
  }, []);

  useEffect(() => {
    setRoadmap(roadmaps.filter((r) => r.title === title)[0]);
  }, [roadmaps, title]);

  useEffect(() => {
    if (!roadmap) return;
    setModules(roadmap.modules);
  }, [roadmap]);

  if (!roadmap) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  const startRoadmap = async () => {
    try {
      if (!auth?.username) {
        throw new Error("You must be logged in to start a roadmap");
      }

      const { data } = await axiosPrivate.post(`/roadmap/start`, {
        id: roadmap.id,
      });
      setAlert({ type: "success", message: data.message });
      setRoadmap((prev) => ({
        ...prev,
        started: true,
      }));
    } catch (e) {
      setAlert({ type: "error", message: e.message });
    }
  };

  const toggleMode = async () => {
    try {
      if (!auth?.username) {
        throw new Error("You must be logged in to start a roadmap");
      }

      const { data } = await axiosPrivate.post(`/roadmap/mode`, {
        id: roadmap.id,
      });

      setAlert({ type: "success", message: data.message });
      setRoadmap((prev) => ({
        ...prev,
        relaxed: !prev.relaxed,
      }));
    } catch (e) {
      setAlert({ type: "error", message: e.message });
    }
  };

  return (
    <>
      <Hero
        title={
          <>
            {roadmap.title}{" "}
            {roadmap.relaxed ? (
              <button
                className="badge badge-primary btn-sm"
                onClick={() => toggleMode()}
              >
                Relaxed
              </button>
            ) : (
              <button
                className="badge badge-primary btn-sm"
                onClick={() => toggleMode()}
              >
                Strict
              </button>
            )}
          </>
        }
        subtitle={roadmap.description}
        cta={
          !roadmap.started && (
            <button className="btn btn-primary" onClick={() => startRoadmap()}>
              Start Roadmap
            </button>
          )
        }
      />
      <div className="flex flex-col md:flex-row w-full">
        <section className="mt-4 md:mx-4 bg-base-200 p-10 rounded-box w-full md:w-1/3">
          <h1 className="text-4xl mb-6">Modules</h1>
          <ul className="menu bg-base-100 w-full p-2 rounded-box">
            {modules.map((module) => (
              <li key={module.id}>
                <Link to={`/roadmap/${title}/${module.title}`}>
                  {module.title}
                  {module.completed && (
                    <span className="badge badge-primary">Completed</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-4 md:mx-4 bg-base-200 p-10 rounded-box w-full md:w-2/3">
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default Roadmap;
