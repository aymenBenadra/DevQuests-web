import { useParams, Outlet, Link } from "react-router-dom";
import Hero from "../components/Hero";
import useAuth from "../hooks/useAuth";
import useReactMutation from "../hooks/useReactMutation";
import useReactQuery from "../hooks/useReactQuery";

function Roadmap() {
  const { roadmap: title } = useParams();
  const {
    data: roadmap,
    isSuccess: isRoadmapLoaded,
    isError: isRoadmapNotLoaded,
    error: roadmapError,
  } = useReactQuery(`/roadmap`, ["roadmap", title], {
    title,
  });
  const { mutate: startRoadmap } = useReactMutation("/roadmap/start", [
    "roadmap",
    title,
  ]);
  const { mutate: toggleRoadmapMode } = useReactMutation("/roadmap/mode", [
    "roadmap",
    title,
  ]);
  const { mutate: resetRoadmap } = useReactMutation("/roadmap/reset", [
    "roadmap",
    title,
  ]);

  const { auth } = useAuth();

  const handleStartRoadmap = () => {
    if (!auth?.username) {
      throw new Error("You must be logged in to start a roadmap");
    }

    startRoadmap({ id: roadmap.id });
  };

  const handleToggleMode = () => {
    if (!auth?.username) {
      throw new Error("You must be logged in to toggle a roadmap");
    }

    toggleRoadmapMode({ id: roadmap.id });
  };

  const handleResetProgress = () => {
    if (!auth?.username) {
      throw new Error("You must be logged in to reset a roadmap");
    }

    resetRoadmap({ id: roadmap.id });
  };

  return isRoadmapLoaded ? (
    <>
      <Hero
        title={
          <>
            {roadmap.title}{" "}
            {auth?.username ? (
              roadmap.relaxed ? (
                <button
                  className="badge badge-primary btn-sm"
                  onClick={() => handleToggleMode()}
                >
                  Relaxed
                </button>
              ) : (
                <button
                  className="badge badge-primary btn-sm"
                  onClick={() => handleToggleMode()}
                >
                  Strict
                </button>
              )
            ) : null}
          </>
        }
        subtitle={roadmap.description}
        cta={
          auth?.username ? (
            !roadmap.started ? (
              <button
                className="btn btn-primary"
                onClick={() => handleStartRoadmap()}
              >
                Start Roadmap
              </button>
            ) : (
              <div className="flex space-x-2">
                {!roadmap.completed ? (
                  <button className="btn btn-primary btn-disabled">
                    Started
                  </button>
                ) : (
                  <button className="btn btn-primary btn-disabled">
                    Completed
                  </button>
                )}
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    confirm(
                      "Are you sure you want to reset your progress? (CAN'T BE UNDONE!)"
                    ) && handleResetProgress();
                  }}
                >
                  Reset progress
                </button>
              </div>
            )
          ) : (
            <Link to="/login" className="btn btn-primary btn-outline">
              Login to start a roadmap
            </Link>
          )
        }
      />
      <div className="flex flex-col md:flex-row w-full">
        <section className="mt-4 md:mx-4 bg-base-300 p-10 rounded-box w-full md:w-1/4 h-fit min-w-fit">
          <h1 className="text-4xl mb-6">Modules</h1>
          <ul className="menu bg-base-100 w-full p-2 rounded-box min-w-fit">
            {isRoadmapLoaded &&
              roadmap.modules.map((module) => (
                <li key={module.id} className=" font-semibold">
                  <Link to={`/roadmap/${title}/${module.title}`}>
                    <span className="font-serif">{module.title}</span>
                    {module.completed && (
                      <span className="badge badge-primary">Completed</span>
                    )}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
        <section className="mt-4 md:mx-4 bg-base-300 p-10 rounded-box w-full md:w-3/4">
          <Outlet />
        </section>
      </div>
    </>
  ) : isRoadmapNotLoaded ? (
    <div className="text-center text-xl">
      <p>{roadmapError.message}</p>
    </div>
  ) : (
    <div className="text-center text-xl">
      <p>Loading...</p>
    </div>
  );
}

export default Roadmap;
