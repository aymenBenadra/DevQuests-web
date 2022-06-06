import { createContext, useState } from "react";

const ModulesContext = createContext({});

export const ModulesProvider = ({ children }) => {
  const [modules, setModules] = useState([]);

  return (
    <ModulesContext.Provider
      value={{
        modules,
        setModules,
      }}
    >
      {children}
    </ModulesContext.Provider>
  );
};

export default ModulesContext;
