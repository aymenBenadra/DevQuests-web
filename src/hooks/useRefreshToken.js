import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAlert from "./useAlert";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const { setAlert } = useAlert();
  const navigate = useNavigate();
  const location = useLocation();

  const refresh = async () => {
    try {
      const response = await axios.get("/refresh", {
        withCredentials: true,
      });
      setAuth((prev) => {
        return { ...prev, accessToken: response.data.accessToken };
      });
      return response.data.accessToken;
    } catch (error) {
      if (error?.response?.status === 403) {
        setAuth({});
        setAlert({
          type: "error",
          message: "Your session has expired. Please log in again.",
        });
        navigate("/login", { state: { from: location }, replace: true });
      }
    }
  };
  return refresh;
};

export default useRefreshToken;
