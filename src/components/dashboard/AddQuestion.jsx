import { useState, useRef, useEffect } from "react";
import useReactMutation from "../../hooks/useReactMutation";
import Card from "../../layouts/Card";

function AddQuestion() {
  const questionRef = useRef();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    questionRef.current.focus();
  }, []);

  const {
    isSuccess,
    mutate: addQuestion,
    reset,
  } = useReactMutation("/question", ["questions"]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    addQuestion({
      question,
      answer,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setQuestion("");
      setAnswer("");
      reset();
    }
  }, [isSuccess, reset]);

  return (
    <Card
      title="Add Question 🚀"
      styles="w-full bg-base-500 border border-base-300"
    >
      <form onSubmit={handleSubmit} className="text-center space-y-4">
        <div className="justify-evenly flex flex-col md:flex-row flex-wrap items-center md:space-y-0 space-y-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Question</span>
            </label>
            <input
              type="text"
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              ref={questionRef}
              autoComplete="off"
              required
              placeholder="Question"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Answer</span>
            </label>
            <input
              type="text"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              placeholder="Answer"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Card>
  );
}

export default AddQuestion;
