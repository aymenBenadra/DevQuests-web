import { createContext, useState } from "react";

const RoadmapsContext = createContext({});

export const RoadmapsProvider = ({ children }) => {
  const [roadmaps, setRoadmaps] = useState([]);

  return (
    <RoadmapsContext.Provider
      value={{
        roadmaps,
        setRoadmaps,
      }}
    >
      {children}
    </RoadmapsContext.Provider>
  );
};

export default RoadmapsContext;
