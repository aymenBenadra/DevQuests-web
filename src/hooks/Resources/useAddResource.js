import { useMutation, useQueryClient } from "react-query";
import useAxiosPrivate from "../useAxiosPrivate";
import useAlert from "../useAlert";

export default function useAddResource() {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const { setAlert } = useAlert();

  return useMutation(
    (resource) =>
      axiosPrivate.post("/resource", resource).then((res) => res.data),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries(["resources"]);
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
