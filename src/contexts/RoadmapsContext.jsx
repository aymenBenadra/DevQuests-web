import { createContext, useState } from "react";

const RoadmapsContext = createContext({});

export const RoadmapsProvider = ({ children }) => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [roadmap, setRoadmap] = useState();

  return (
    <RoadmapsContext.Provider
      value={{
        roadmaps,
        setRoadmaps,
        roadmap,
        setRoadmap,
      }}
    >
      {children}
    </RoadmapsContext.Provider>
  );
};

export default RoadmapsContext;
