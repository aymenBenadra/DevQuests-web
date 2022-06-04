import { useMutation, useQueryClient } from "react-query";
import useAxiosPrivate from "../useAxiosPrivate";
import useAlert from "../useAlert";
import useAuth from "../useAuth";

export default function useUpdateRoadmap() {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const { setAlert } = useAlert();
  const { auth } = useAuth();
  const cache = auth?.username ? ["roadmaps", auth.username] : ["roadmaps"];

  return useMutation(
    ({ id, Roadmap, answer }) =>
      axiosPrivate
        .post(`/roadmap/update`, {
          id,
          Roadmap,
          answer,
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
