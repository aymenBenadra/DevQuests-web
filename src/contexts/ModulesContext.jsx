import { createContext, useState } from "react";

const ModulesContext = createContext({});

export const ModulesProvider = ({ children }) => {
  const [modules, setModules] = useState([]);
  const [module, setModule] = useState();

  return (
    <ModulesContext.Provider
      value={{
        modules,
        setModules,
        module,
        setModule,
      }}
    >
      {children}
    </ModulesContext.Provider>
  );
};

export default ModulesContext;
