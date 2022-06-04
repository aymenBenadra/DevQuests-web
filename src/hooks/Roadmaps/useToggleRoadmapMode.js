import { useMutation, useQueryClient } from "react-query";
import useAuth from "../useAuth";
import useAxiosPrivate from "../useAxiosPrivate";
import useAlert from "../useAlert";

export default function useToggleRoadmapMode(title) {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const { auth } = useAuth();
  const { setAlert } = useAlert();

  const cache = auth?.username
    ? ["roadmap", auth.username, title]
    : ["roadmap", title];

  return useMutation(
    (id) =>
      axiosPrivate
        .post("/roadmap/mode", {
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
