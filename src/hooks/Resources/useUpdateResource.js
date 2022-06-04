import { useMutation, useQueryClient } from "react-query";
import useAlert from "../useAlert";
import useAxiosPrivate from "../useAxiosPrivate";

export default function useUpdateResource() {
  const axiosPrivate = useAxiosPrivate();
  const { setAlert } = useAlert();
  const queryClient = useQueryClient();

  return useMutation(
    (resource) =>
      axiosPrivate.post(`/resource/update`, resource).then((res) => res.data),
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
