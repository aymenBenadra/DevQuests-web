import { useContext } from "react";
import ResourcesContext from "../contexts/ResourcesContext";
import { useNavigate } from "react-router-dom";
import useAlert from "./useAlert";
import axios from "../api/axios";

export default function useResources() {
  const { resources, setResources } = useContext(ResourcesContext);
  const { setAlert } = useAlert();
  const navigate = useNavigate();

  const getResources = async () => {
    try {
      const { data } = await axios.get("/resources");
      setResources(data);
    } catch (e) {
      setAlert({ type: "error", message: e.message });
      navigate("/", { state: { from: location }, replace: true });
    }
  };

  return { resources, setResources, getResources };
}
