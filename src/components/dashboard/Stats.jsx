import useReactQuery from "../../hooks/useReactQuery";

function Stats() {
  const {
    data: roadmaps,
    isLoading: isRoadmapsLoading,
    isSuccess: isRoadmapsLoaded,
  } = useReactQuery("/roadmaps", ["roadmaps"]);
  const {
    data: resources,
    isLoading: isResourcesLoading,
    isSuccess: isResourcesLoaded,
  } = useReactQuery("/resources", ["resources"]);
  const {
    data: questions,
    isLoading: isQuestionsLoading,
    isSuccess: isQuestionsLoaded,
  } = useReactQuery("/questions", ["questions"]);

  return (
    <div className="stats stats-horizontal md:stats-vertical border border-base-300 min-w-fit shadow-xl">
      <div className="stat px-2 md:p-2">
        <div className="stat-title">Roadmaps</div>
        <div className="stat-value text-primary text-center">
          {isRoadmapsLoading
            ? "Loading..."
            : isRoadmapsLoaded
            ? roadmaps.length
            : "-1"}
        </div>
      </div>

      <div className="stat px-2 md:p-2">
        <div className="stat-title">Resources</div>
        <div className="stat-value text-primary text-center">
          {isResourcesLoading
            ? "Loading..."
            : isResourcesLoaded
            ? resources.length
            : "-1"}
        </div>
      </div>

      <div className="stat px-2 md:p-2">
        <div className="stat-title">Questions</div>
        <div className="stat-value text-primary text-center">
          {isQuestionsLoading
            ? "Loading..."
            : isQuestionsLoaded
            ? questions.length
            : "-1"}
        </div>
      </div>
    </div>
  );
}

export default Stats;
