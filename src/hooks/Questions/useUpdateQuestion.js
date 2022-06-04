import { useMutation, useQueryClient } from "react-query";
import useAlert from "../useAlert";
import useAxiosPrivate from "../useAxiosPrivate";

export default function useUpdateQuestion() {
  const axiosPrivate = useAxiosPrivate();
  const { setAlert } = useAlert();
  const queryClient = useQueryClient();

  return useMutation(
    (question) =>
      axiosPrivate.post(`/question/update`, question).then((res) => res.data),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries(["questions"]);
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
