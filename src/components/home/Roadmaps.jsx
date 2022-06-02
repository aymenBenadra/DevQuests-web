import { useRoadmaps } from "../../hooks/Roadmaps";
import Roadmap from "./Roadmap";

function Roadmaps() {
  const { data: roadmaps, isSuccess: isRoadmapsLoaded } = useRoadmaps();

  return (
    <section className="mt-4 mx-4 p-10 rounded-box">
      <h1 className="text-4xl mb-6">Roadmaps</h1>
      <p className="text-primary mb-4">
        Pick a Roadmap and start learning how to code today!
      </p>
      {isRoadmapsLoaded ? (
        <div className="carousel carousel-center h-96 md:h-fit p-2 md:p-4 space-x-0 md:space-x-4 space-y-4 md:space-y-0 bg-base-300 rounded-box carousel-vertical items-center md:flex-row md:overflow-x-scroll md:snap-y md:snap-mandatory">
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
          No roadmaps yet? try{" "}
          <span className="link link-hover animate-pulse">refreshing</span> the
          page?
        </p>
      )}
    </section>
  );
}

export default Roadmaps;
