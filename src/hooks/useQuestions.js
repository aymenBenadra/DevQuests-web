import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import QuestionsContext from "../contexts/QuestionsContext";
import useAlert from "./useAlert";

export default function useQuestions() {
  const { questions, setQuestions } = useContext(QuestionsContext);
  const { setAlert } = useAlert();
  const navigate = useNavigate();

  const getQuestions = async () => {
    try {
      const { data } = await axios.get("/questions");
      setQuestions(data);
      return data;
    } catch (e) {
      setAlert({ type: "error", message: e.message });
      navigate("/login", { state: { from: location }, replace: true });
    }
  };

  return { questions, setQuestions, getQuestions };
}
