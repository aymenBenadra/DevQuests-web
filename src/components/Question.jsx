import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import useAlert from "../hooks/useAlert";
import useQuestions from "../hooks/useQuestions";

function Question() {
  const { questions, setQuestions } = useQuestions();
  const [question, setQuestion] = useState({});
  const { setAlert } = useAlert();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const getQuestions = async () => {
      try {
        const { data } = await axios.get("/questions");
        setQuestions(data);
      } catch (e) {
        setAlert({ type: "error", message: e.message });
        navigate("/login", { state: { from: location }, replace: true });
      }
    };

    getQuestions();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    setQuestion(questions[Math.floor(Math.random() * questions.length)]);
  }, [questions]);

  function handleRefresh() {
    setQuestion((prev) => {
      while (true) {
        const newQuestion =
          questions[Math.floor(Math.random() * questions.length)];
        console.log(prev);
        console.log(newQuestion);
        if (prev.id !== newQuestion.id) {
          return newQuestion;
        }
      }
    });
  }

  return (
    <div className="indicator w-full max-h-44 h-fit">
      <button
        className="indicator-item badge badge-accent"
        onClick={() => handleRefresh()}
      >
        Refresh
      </button>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-full"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-md font-medium">
          {question?.question}
        </div>
        <div className="collapse-content overflow-y-auto h-fit">
          <p>{question?.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Question;
