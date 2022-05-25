import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios from "../api/axios";
import useRoadmaps from "../hooks/useRoadmaps";
import useAuth from "../hooks/useAuth";
import useAlert from "../hooks/useAlert";
import Roadmap from "./Roadmap";

function Roadmaps() {
  const { roadmaps, setRoadmaps } = useRoadmaps();
  const { auth } = useAuth();
  const { setAlert } = useAlert();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const getRoadmaps = async () => {
      try {
        const { data } = auth?.username
          ? await axiosPrivate.get("/roadmaps")
          : await axios.get("/roadmaps");
        setRoadmaps(data);
      } catch (e) {
        setAlert({ type: "error", message: e.message });
        navigate("/login", { state: { from: location }, replace: true });
      }
    };

    getRoadmaps();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="mt-4 mx-4 bg-base-200 p-10 rounded-box">
      <h1 className="text-4xl mb-6">Roadmaps</h1>
      <p className="text-accent">
        Pick a Roadmap and start learning how to code today!
      </p>
      {roadmaps?.length > 0 ? (
        <div className="carousel carousel-center h-96 md:h-fit p-2 md:p-4 space-x-0 md:space-x-4 space-y-4 md:space-y-0 bg-neutral rounded-box carousel-vertical items-center md:flex-row md:overflow-x-scroll md:snap-y md:snap-mandatory">
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
          No roadmaps yet, try{" "}
          <span className="link link-hover animate-bounce">refreshing</span> the
          page?
        </p>
      )}
    </section>
  );
}

export default Roadmaps;
