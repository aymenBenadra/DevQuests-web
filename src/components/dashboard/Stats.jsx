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
    <div className="stats stats-horizontal md:stats-vertical border border-base-300 min-w-fit h-fit md:sticky top-2 shadow-xl">
      <div className="stat px-2 md:p-2">
        <div className="stat-title">Roadmaps</div>
        <div className="stat-value text-primary text-center">
          {isRoadmapsLoading
            ? "0"
            : isRoadmapsLoaded
            ? roadmaps.length
            : "-1"}
        </div>
      </div>

      <div className="stat px-2 md:p-2">
        <div className="stat-title">Resources</div>
        <div className="stat-value text-primary text-center">
          {isResourcesLoading
            ? "0"
            : isResourcesLoaded
            ? resources.length
            : "-1"}
        </div>
      </div>

      <div className="stat px-2 md:p-2">
        <div className="stat-title">Questions</div>
        <div className="stat-value text-primary text-center">
          {isQuestionsLoading
            ? "0"
            : isQuestionsLoaded
            ? questions.length
            : "-1"}
        </div>
      </div>
    </div>
  );
}

export default Stats;
