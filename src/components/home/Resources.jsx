import { useEffect } from "react";
import { Link } from "react-router-dom";
import useResources from "../../hooks/useResources";

function Resources() {
  const { resources, getResources } = useResources();

  useEffect(() => {
    if (resources.length === 0) {
      getResources();
    }
  }, []);

  return (
    <ul className="menu space-y-1 w-full rounded-box p-0">
      {resources?.slice(0, 4).map((resource) => (
        <li key={resource.id}>
          <div
            className="tooltip border border-base-300 shadow"
            data-tip={resource.description}
          >
            <a href={resource.link}>
              <div className="indicator w-full">
                <span className="indicator-item indicator-middle -translate-x-1 hover:-translate-x-4 badge badge-primary ">
                  Go to →
                </span>
                {resource.title}
              </div>
            </a>
          </div>
        </li>
      ))}
      <li key={999}>
        <div
          className="tooltip border border-base-300 shadow"
          data-tip="Click to see more resources"
        >
          <Link to="/resources">
            <div className="indicator w-full">
              <span className="indicator-item indicator-middle -translate-x-1 hover:-translate-x-4 badge badge-primary   ">
                See all →
              </span>
              Wanna see more resources?
            </div>
          </Link>
        </div>
      </li>
    </ul>
  );
}

export default Resources;