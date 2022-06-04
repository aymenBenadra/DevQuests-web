import { useMutation, useQueryClient } from "react-query";
import useAxiosPrivate from "../useAxiosPrivate";
import useAlert from "../useAlert";
import useAuth from "../useAuth";

export default function useStartRoadmap(title) {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const { setAlert } = useAlert();
  const { auth } = useAuth();

  const cache = auth?.username
    ? ["roadmap", auth.username, title]
    : ["roadmap", title];

  return useMutation(
    (id) =>
      axiosPrivate
        .post("/roadmap/start", {
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
