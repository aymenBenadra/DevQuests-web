import React from "react";
import Card from "../layouts/Card";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { ROADMAPS_DESCRIPTION_WORD_LIMIT } from "../constants";

function Roadmap({ roadmap }) {
  const { auth } = useAuth();

  return (
    <Link
      to={roadmap.link ?? `/roadmap/${encodeURI(roadmap.title)}`}
      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 carousel-item min-w-fit place-content-center"
    >
      <Card title={roadmap.title} styles="w-full">
        <p>
          {roadmap.description
            .split(" ", ROADMAPS_DESCRIPTION_WORD_LIMIT)
            .join(" ")}
          ...
        </p>
        {auth?.username && (
          <div className="flex flex-wrap space-x-1 md:space-x-2">
            {roadmap?.started &&
              (roadmap?.completed ? (
                <span className="badge badge-primary badge-outline">
                  Completed
                </span>
              ) : (
                <span className="badge badge-primary badge-outline">
                  In Progress
                </span>
              ))}
            {roadmap?.started &&
              (roadmap?.relaxed ? (
                <span className="badge badge-warning badge-outline">
                  Relaxed
                </span>
              ) : (
                <span className="badge badge-warning badge-outline">
                  Strict
                </span>
              ))}
          </div>
        )}
      </Card>
    </Link>
  );
}

export default Roadmap;
