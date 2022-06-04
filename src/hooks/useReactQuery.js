import { useQuery } from "react-query";
import axios from "../api/axios";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

export default function useReactQuery(endpoint, cache, data = null) {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  return useQuery(cache, async () => {
    if (auth?.username) {
      return axiosPrivate
        .get(endpoint, {
          params: data,
        })
        .then((res) => res.data);
    } else {
      return axios
        .get(endpoint, {
          params: data,
        })
        .then((res) => res.data);
    }
  });
}
