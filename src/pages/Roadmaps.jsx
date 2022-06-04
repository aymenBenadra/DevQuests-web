import { useRoadmaps } from "../hooks/Roadmaps";
import Roadmap from "../components/Roadmap";
import { useEffect, useRef, useState } from "react";
import { PAGINATION_ITEMS_COUNT } from "../constants";

function Roadmaps() {
  const { data: roadmaps, isSuccess } = useRoadmaps();
  const [count, setCount] = useState(1);
  const showMoreRef = useRef();

  function handleShowMore() {
    if (count * PAGINATION_ITEMS_COUNT < roadmaps.length) {
      setCount((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (isSuccess && count * PAGINATION_ITEMS_COUNT >= roadmaps.length) {
      showMoreRef.current.classList.add("hidden");
    }
  }, [isSuccess, count, roadmaps]);

  return (
    <section className="mt-4 mx-4 p-10 rounded-box">
      <h1 className="text-4xl mb-6">Roadmaps</h1>
      <p className="text-primary mb-4">
        Pick a Roadmap and start learning how to code today! 🚀
      </p>
      {isSuccess ? (
        <div className="h-fit p-2 md:p-4 bg-base-300 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {roadmaps.slice(0, count * PAGINATION_ITEMS_COUNT).map((roadmap) => (
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
      {isSuccess && (
        <div className="flex w-full justify-center mt-4">
          <button
            className="badge badge-lg badge-primary badge-outline text-center"
            onClick={handleShowMore}
            ref={showMoreRef}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

export default Roadmaps;
