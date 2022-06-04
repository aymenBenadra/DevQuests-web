import { useQuery } from "react-query";
import axios from "../../api/axios";

export default function useQuestions() {
  const getQuestions = async () =>
    axios.get("/questions").then((res) => res.data);

  return useQuery(["questions"], () => getQuestions());
}
