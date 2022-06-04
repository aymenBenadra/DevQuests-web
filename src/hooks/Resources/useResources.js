import { useQuery } from "react-query";
import axios from "../../api/axios";

export default function useResources() {
  return useQuery(["resources"], () =>
    axios.get("/resources").then((res) => res.data)
  );
}
