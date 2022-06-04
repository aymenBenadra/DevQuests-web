import { useQuery } from "react-query";
import axios from "../../api/axios";
import useAuth from "../useAuth";
import useAxiosPrivate from "../useAxiosPrivate";

export default function useRoadmap(title) {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const cache = auth?.username
    ? ["roadmap", auth.username, title]
    : ["roadmap", title];

  if (auth?.username) {
    return useQuery(cache, () =>
      axiosPrivate
        .get(`/roadmap`, {
          params: {
            title,
          },
        })
        .then((res) => res.data)
    );
  } else {
    return useQuery(cache, () =>
      axios
        .get(`/roadmap`, {
          params: {
            title,
          },
        })
        .then((res) => res.data)
    );
  }
}
