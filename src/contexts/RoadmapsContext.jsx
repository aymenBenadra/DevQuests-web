import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAlert from "../hooks/useAlert";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios from "../api/axios";

const RoadmapsContext = createContext({});

export const RoadmapsProvider = ({ children }) => {
  const [roadmaps, setRoadmaps] = useState([]);
  const { auth } = useAuth();
  const { setAlert } = useAlert();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  const getRoadmaps = async () => {
    try {
      if (!!auth) {
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

  return (
    <RoadmapsContext.Provider
      value={{
        roadmaps,
        setRoadmaps,
        getRoadmaps,
      }}
    >
      {children}
    </RoadmapsContext.Provider>
  );
};

export default RoadmapsContext;
