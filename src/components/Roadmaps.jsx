import { useEffect } from "react";
import useRoadmaps from "../hooks/useRoadmaps";
import Roadmap from "./Roadmap";

function Roadmaps() {
  const { roadmaps, getRoadmaps } = useRoadmaps();

  useEffect(() => {
    if (roadmaps.length === 0) {
      getRoadmaps();
    }
  }, []);

  return (
    <section className="mt-4 mx-4 bg-base-200 p-10 rounded-box">
      <h1 className="text-4xl mb-6">Roadmaps</h1>
      <p className="text-primary mb-4">
        Pick a Roadmap and start learning how to code today!
      </p>
      {roadmaps?.length > 0 ? (
        <div className="carousel carousel-center h-96 md:h-fit p-2 md:p-4 space-x-0 md:space-x-4 space-y-4 md:space-y-0 bg-neutral rounded-box carousel-vertical items-center md:flex-row md:overflow-x-scroll md:snap-y md:snap-mandatory">
          {roadmaps.slice(0, 3).map((roadmap) => (
            <Roadmap roadmap={roadmap} key={roadmap.id} />
          ))}
          <Roadmap
            roadmap={{
              title: "Want more?",
              description: "Click me to check more interesting Roadmaps! →",
              link: "/roadmaps",
            }}
          />
        </div>
      ) : (
        <p className="text-center text-lg center">
          No roadmaps yet, try{" "}
          <span className="link link-hover animate-bounce">refreshing</span> the
          page?
        </p>
      )}
    </section>
  );
}

export default Roadmaps;
