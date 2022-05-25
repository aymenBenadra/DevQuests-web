import { useContext } from "react";
import RoadmapsContext from "../contexts/RoadmapsContext";

export default function useRoadmaps() {
  return useContext(RoadmapsContext);
}
