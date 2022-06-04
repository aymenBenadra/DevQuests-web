import { useEffect, useState } from "react";
import { PAGINATION_ITEMS_COUNT, ROADMAPS_FILTER_OPTIONS } from "../constants";
import useReactQuery from "../hooks/useReactQuery";
import Roadmap from "./Roadmap";

function Roadmaps({
  title = "Roadmaps",
  filter = ROADMAPS_FILTER_OPTIONS.limited,
  trailingItem = true,
  subtitle = "Pick a Roadmap and start learning how to code today!",
}) {
  const { data: roadmaps, isSuccess: isRoadmapsLoaded } = useReactQuery(
    "/roadmaps",
    ["roadmaps"]
  );
  const [roadmapsFiltered, setRoadmapsFiltered] = useState([]);

  function filterRoadmaps(filter) {
    if (filter === ROADMAPS_FILTER_OPTIONS.limited) {
      return roadmaps.slice(0, PAGINATION_ITEMS_COUNT);
    } else {
      return roadmaps.filter((roadmap) => {
        switch (filter) {
          case ROADMAPS_FILTER_OPTIONS.all:
            return true;
          case ROADMAPS_FILTER_OPTIONS.notStarted:
            return !roadmap.started;
          case ROADMAPS_FILTER_OPTIONS.inProgress:
            return roadmap.started && !roadmap.completed;
          case ROADMAPS_FILTER_OPTIONS.completed:
            return roadmap.completed;
          case ROADMAPS_FILTER_OPTIONS.strict:
            return !roadmap.relaxed;
          case ROADMAPS_FILTER_OPTIONS.relaxed:
            return roadmap.relaxed;
          default:
            return true;
        }
      });
    }
  }

  useEffect(() => {
    if (isRoadmapsLoaded) {
      setRoadmapsFiltered(filterRoadmaps(filter));
    }
  }, [roadmaps, isRoadmapsLoaded, filter]);

  return (
    <section className="mt-4 mx-4 p-4 rounded-box">
      <h1 className="text-4xl mb-6">{title}</h1>
      <p className="text-primary mb-4">{subtitle}</p>
      {isRoadmapsLoaded ? (
        <div className="carousel carousel-center h-96 md:h-fit p-2 md:p-4 space-x-0 md:space-x-4 space-y-4 md:space-y-0 bg-base-300 rounded-box carousel-vertical items-center md:flex-row md:overflow-x-scroll md:snap-y md:snap-mandatory">
          {roadmapsFiltered.length ? (
            roadmapsFiltered.map((roadmap) => (
              <Roadmap key={roadmap.id} roadmap={roadmap} />
            ))
          ) : (
            <p className="text-center text-primary">No Roadmaps here, yet!</p>
          )}
          {trailingItem && (
            <Roadmap
              roadmap={{
                title: "Want more?",
                description: "Click me to check more interesting Roadmaps! →",
                link: "/roadmaps",
              }}
            />
          )}
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
