import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useRoadmaps from "../hooks/useRoadmaps";

function Module() {
  const { roadmap: roadmapTitle, module: moduleTitle } = useParams();
  const { roadmaps } = useRoadmaps();
  const [module, setModule] = React.useState();

  React.useEffect(() => {
    const roadmap = roadmaps.find((roadmap) => roadmap.title === roadmapTitle);
    const module = roadmap.modules.find(
      (module) => module.title === moduleTitle
    );
    setModule(module);
  }, [roadmaps, roadmapTitle, moduleTitle]);

  if (!module) {
    return <div>Module not found</div>;
  }

  return (
    <>
      <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li>
            <Link to={`/roadmap/${roadmapTitle}`}>{roadmapTitle}</Link>
          </li>
          <li className=" text-4xl">{moduleTitle}</li>
        </ul>
      </div>
      <p className="mb-4">{module.description}</p>
      <h3 className=" text-sm mb-4">
        <span className=" text-accent">Estimated completion time:</span>{" "}
        {module.weeks} weeks
      </h3>
      <div className="w-full h-fit bg-base-100 p-2 rounded-box">
        {module.nodes.map((node) => (
          <div className="collapse" key={node.id}>
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
