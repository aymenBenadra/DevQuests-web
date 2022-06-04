import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useReactQuery from "../../hooks/useReactQuery";
import useReactMutation from "../../hooks/useReactMutation";

function Module() {
  const { roadmap: roadmapTitle, module: title } = useParams();

  const { auth } = useAuth();
  const cache = auth?.username
    ? ["roadmap", auth.username, roadmapTitle]
    : ["roadmap", roadmapTitle];
  const { data: roadmap, isSuccess: isRoadmapLoaded } = useReactQuery(
    "/roadmap",
    cache,
    {
      title: roadmapTitle,
    }
  );
  const { mutate: toggleCompleted } = useReactMutation(
    "/module/completed",
    cache
  );

  const [module, setModule] = useState(() => {
    if (!roadmap) return null;
    return roadmap.modules.find((m) => m.title === title);
  });

  useEffect(() => {
    if (isRoadmapLoaded) {
      setModule(roadmap.modules.find((module) => module.title === title));
    }
  }, [isRoadmapLoaded, roadmap, title]);

  if (!module) {
    return <div>Module not found</div>;
  }

  const handleToggleCompleted = () => {
    if (!auth?.username) {
      throw new Error("You must be logged in to toggle a module");
    }

    toggleCompleted({ id: module.id });
  };

  return (
    !!module && (
      <>
        <div className="flex justify-between w-full">
          <div className="text-sm md:breadcrumbs mb-4 font-serif">
            <ul>
              <li className="hidden">
                <Link to={`/roadmap/${roadmap.title}`}>{roadmap.title}</Link>
              </li>
              <li className="text-4xl">{title}</li>
            </ul>
          </div>
          {module.completed ? (
            <button className="btn btn-primary" onClick={handleToggleCompleted}>
              Completed
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleToggleCompleted}>
              In Progress
            </button>
          )}
        </div>
        <p className="mb-4">{module.description}</p>
        {!roadmap.relaxed && (
          <h3 className=" text-sm mb-4">
            <span className=" text-primary">Estimated completion time:</span>{" "}
            {module.weeks} weeks
          </h3>
        )}
        <div className="w-full h-fit bg-base-100 p-2 rounded-box">
          {module.nodes.map((node) => (
            <div className="collapse collapse-arrow" key={node.id}>
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium w-full font-serif">
                {node.title}
              </div>
              <div className="collapse-content text-sm">
                <p>{node.description}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  );
}

export default Module;
