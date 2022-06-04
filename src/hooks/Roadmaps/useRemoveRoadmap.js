import { useMutation, useQueryClient } from "react-query";
import useAxiosPrivate from "../useAxiosPrivate";
import useAlert from "../useAlert";
import useAuth from "../useAuth";

export default function useRemoveRoadmap() {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const { setAlert } = useAlert();
  const { auth } = useAuth();
  const cache = auth?.username ? ["roadmaps", auth.username] : ["roadmaps"];

  return useMutation(
    (id) =>
      axiosPrivate
        .post(`/roadmap/delete`, {
          id,
        })
        .then((res) => res.data),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries(cache);
        setAlert({
          type: "success",
          message: res.message,
        });
      },
      onError: (err) => {
        setAlert({
          type: "error",
          message: err.message,
        });
      },
    }
  );
}
