import { useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "../api/axios";
import useAlert from "../hooks/useAlert";
import useResources from "../hooks/useResources";

function Resources() {
  const { resources, setResources } = useResources();
  const { setAlert } = useAlert();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const getResources = async () => {
      try {
        const { data } = await axios.get("/resources");
        setResources(data);
      } catch (e) {
        setAlert({ type: "error", message: e.message });
        navigate("/", { state: { from: location }, replace: true });
      }
    };

    getResources();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <ul className="menu bg-base-100 w-full rounded-box p-0">
      {resources?.slice(0, 4).map((resource) => (
        <li key={resource.id}>
          <div className="tooltip" data-tip={resource.description}>
            <a href={resource.link}>
              <div className="indicator w-full">
                <span className="indicator-item indicator-middle -translate-x-1 hover:-translate-x-4 badge badge-accent ">
                  Go to →
                </span>
                {resource.title}
              </div>
            </a>
          </div>
        </li>
      ))}
      <li key={999}>
        <div className="tooltip" data-tip="Click to see more resources">
          <Link to="/resources">
            <div className="indicator w-full">
              <span className="indicator-item indicator-middle -translate-x-1 hover:-translate-x-4 badge badge-accent   ">
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
