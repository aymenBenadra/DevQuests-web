import { useContext } from "react";
import QuestionsContext from "../contexts/QuestionsContext";

export default function useQuestions() {
  return useContext(QuestionsContext);
}
