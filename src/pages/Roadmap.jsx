import React, { useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import Hero from "../components/Hero";
import useRoadmaps from "../hooks/useRoadmaps";

function Roadmap() {
  const { roadmap: title } = useParams();
  const { roadmaps, getRoadmaps } = useRoadmaps();
  const [roadmap, setRoadmap] = React.useState();

  useEffect(() => {
    getRoadmaps();
  }, []);

  React.useEffect(() => {
    const roadmap = roadmaps.find((roadmap) => roadmap.title === title);
    setRoadmap(roadmap);
  }, [roadmaps, title]);

  if (!roadmap) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <>
      <Hero title={roadmap.title} subtitle={roadmap.description} />
      <div className="flex flex-grow flex-col md:flex-row w-full">
        <section className="mt-4 mx-4 bg-base-200 p-10 rounded-box w-full md:w-1/3">
          <h1 className="text-4xl mb-6">Modules</h1>
          <ul className="menu bg-base-100 w-full p-2 rounded-box">
            {roadmap.modules.map((module) => (
              <li key={module.id}>
                <Link to={`/roadmap/${title}/${module.title}`}>
                  {module.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-4 mx-4 bg-base-200 p-10 rounded-box w-full md:w-2/3">
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default Roadmap;
