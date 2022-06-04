import { useMutation, useQueryClient } from "react-query";
import useAxiosPrivate from "./useAxiosPrivate";
import useAlert from "./useAlert";

export default function useReactMutation(endpoint, cache = null) {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const { setAlert } = useAlert();

  return useMutation(
    async (data) => axiosPrivate.post(endpoint, data).then((res) => res.data),
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
