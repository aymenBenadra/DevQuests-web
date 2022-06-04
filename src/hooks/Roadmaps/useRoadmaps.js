import useAxiosPrivate from "../useAxiosPrivate";
import { useQuery } from "react-query";
import axios from "../../api/axios";
import useAuth from "../useAuth";

export default function useRoadmaps() {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const cache = auth?.username ? ["roadmaps", auth.username] : ["roadmaps"];

  if (auth?.username) {
    return useQuery(cache, () =>
      axiosPrivate.get("/roadmaps").then((res) => res.data)
    );
  } else {
    return useQuery(cache, () =>
      axios.get("/roadmaps").then((res) => res.data)
    );
  }
}
