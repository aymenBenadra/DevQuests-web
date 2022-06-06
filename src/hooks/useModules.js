import { useContext } from "react";
import ModulesContext from "../contexts/ModulesContext";

export default function useModules() {
  return useContext(ModulesContext);
}
