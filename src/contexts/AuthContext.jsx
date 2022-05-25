import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const roles = {
    guest: 0,
    user: 1,
    admin: 2,
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        roles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
