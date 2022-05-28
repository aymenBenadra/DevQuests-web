import React, { useEffect } from "react";
import useRoadmaps from "../../hooks/useRoadmaps";
import useResources from "../../hooks/useResources";
import useQuestions from "../../hooks/useQuestions";

function Stats() {
  const { roadmaps, getRoadmaps } = useRoadmaps();
  const { resources, getResources } = useResources();
  const { questions, getQuestions } = useQuestions();

  useEffect(() => {
    if (roadmaps.length === 0) {
      getRoadmaps();
    }
  }, [roadmaps, getRoadmaps]);

  useEffect(() => {
    if (resources.length === 0) {
      getResources();
    }
  }, [resources, getResources]);

  useEffect(() => {
    if (questions.length === 0) {
      getQuestions();
    }
  }, [questions, getQuestions]);

  return (
    <div className="stats stats-horizontal md:stats-vertical border border-base-300 min-w-fit shadow-xl">
      <div className="stat px-2 md:p-2">
        <div className="stat-title">Roadmaps</div>
        <div className="stat-value text-primary text-center">
          {roadmaps.length}
        </div>
      </div>

      <div className="stat px-2 md:p-2">
        <div className="stat-title">Resources</div>
        <div className="stat-value text-primary text-center">
          {resources.length}
        </div>
      </div>

      <div className="stat px-2 md:p-2">
        <div className="stat-title">Questions</div>
        <div className="stat-value text-primary text-center">
          {questions.length}
        </div>
      </div>
    </div>
  );
}

export default Stats;
