import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoadmapsContext from "../contexts/RoadmapsContext";
import useAlert from "./useAlert";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";
import axios from "../api/axios";

export default function useRoadmaps() {
  const { roadmaps, roadmap, setRoadmaps, setRoadmap } =
    useContext(RoadmapsContext);
  const { auth } = useAuth();
  const { setAlert } = useAlert();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  const getRoadmaps = async () => {
    try {
      if (auth?.username) {
        const { data } = await axiosPrivate.get("/roadmaps");
        setRoadmaps(data);
      } else {
        const { data } = await axios.get("/roadmaps");
        setRoadmaps(data);
      }
    } catch (e) {
      setAlert({ type: "error", message: e.message });
      navigate("/login", { state: { from: location }, replace: true });
    }
  };

  const value = {
    roadmaps,
    roadmap,
    getRoadmaps,
    setRoadmap,
    setRoadmaps,
  };

  return value;
}
