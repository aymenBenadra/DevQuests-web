import { useRoadmaps } from "../hooks/Roadmaps";
import Roadmap from "../components/home/Roadmap";

function Roadmaps() {
  const { data: roadmaps, isSuccess: isRoadmapsLoaded } = useRoadmaps();

  return (
    <section className="mt-4 mx-4 p-10 rounded-box">
      <h1 className="text-4xl mb-6">Roadmaps</h1>
      <p className="text-primary mb-4">
        Pick a Roadmap and start learning how to code today! 🚀
      </p>
      {isRoadmapsLoaded ? (
        <div className="h-fit p-2 md:p-4 bg-base-300 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((roadmap) => (
            <Roadmap roadmap={roadmap} key={roadmap.id} />
          ))}
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
