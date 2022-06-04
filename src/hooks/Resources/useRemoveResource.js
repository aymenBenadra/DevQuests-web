import { useMutation, useQueryClient } from "react-query";
import useAlert from "../useAlert";
import useAxiosPrivate from "../useAxiosPrivate";

export default function useRemoveResource() {
  const axiosPrivate = useAxiosPrivate();
  const { setAlert } = useAlert();
  const queryClient = useQueryClient();

  return useMutation(
    (id) =>
      axiosPrivate
        .post(`/resource/delete`, {
          id,
        })
        .then((res) => res.data),
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
