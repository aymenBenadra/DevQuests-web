import { createContext, useState } from "react";

const ResourcesContext = createContext({});

export const ResourcesProvider = ({ children }) => {
  const [resources, setResources] = useState([]);

  return (
    <ResourcesContext.Provider
      value={{
        resources,
        setResources,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};

export default ResourcesContext;
