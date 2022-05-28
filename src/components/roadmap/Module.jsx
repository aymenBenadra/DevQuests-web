import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosPrivate } from "../../api/axios";
import useModules from "../../hooks/useModules";
import useRoadmaps from "../../hooks/useRoadmaps";
import useAlert from "../../hooks/useAlert";

function Module() {
  const { module: title } = useParams();
  const { roadmap, setRoadmap, setRoadmaps } = useRoadmaps();
  const { module, setModule, modules, setModules } = useModules();
  const { setAlert } = useAlert();

  useEffect(() => {
    setModule(modules.filter((module) => module.title === title)[0]);
  }, [modules, title]);

  if (!module) {
    return <div>Module not found</div>;
  }

  const toggleCompleted = async () => {
    try {
      const { data } = await axiosPrivate.post(`/module/completed`, {
        id: module.id,
      });
      setModules((prev) =>
        prev.map((m) =>
          m.id === module.id ? { ...m, completed: !m.completed } : m
        )
      );
      setAlert({ type: "success", message: data.message });
    } catch (e) {
      setAlert({ type: "error", message: e.message });
    }
  };

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="text-sm md:breadcrumbs mb-4">
          <ul>
            <li className="hidden">
              <Link to={`/roadmap/${roadmap.title}`}>{roadmap.title}</Link>
            </li>
            <li className="text-4xl">{title}</li>
          </ul>
        </div>
        {module.completed ? (
          <button className="btn btn-primary" onClick={() => toggleCompleted()}>
            Completed
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => toggleCompleted()}>
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
            <div className="collapse-title text-lg font-medium w-full">
              {node.title}
            </div>
            <div className="collapse-content text-sm">
              <p>{node.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Module;
