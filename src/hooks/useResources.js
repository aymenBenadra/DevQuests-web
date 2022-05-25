import { useContext } from "react";
import ResourcesContext from "../contexts/ResourcesContext";

export default function useResources() {
  return useContext(ResourcesContext);
}
