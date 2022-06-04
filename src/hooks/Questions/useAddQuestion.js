import { useMutation, useQueryClient } from "react-query";
import useAxiosPrivate from "../useAxiosPrivate";
import useAlert from "../useAlert";

export default function useAddQuestion() {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const { setAlert } = useAlert();

  return useMutation(
    (question) =>
      axiosPrivate.post("/question", question).then((res) => res.data),
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
