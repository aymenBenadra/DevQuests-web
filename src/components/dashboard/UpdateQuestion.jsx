import { useEffect, useRef, useState } from "react";
import useReactMutation from "../../hooks/useReactMutation";
import useReactQuery from "../../hooks/useReactQuery";
import Card from "../../layouts/Card";

function UpdateQuestion() {
  const idRef = useRef();

  const [id, setId] = useState(-1);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { data: questions, isSuccess: isQuestionsLoaded } = useReactQuery(
    "/questions",
    ["questions"]
  );
  const {
    mutate: updateQuestion,
    isSuccess,
    reset,
  } = useReactMutation("/question/update", ["questions"]);

  useEffect(() => {
    idRef.current.focus();

    return () => {
      setId(-1);
      setQuestion("");
      setAnswer("");
    };
  }, []);

  useEffect(() => {
    if (id !== -1) {
      const question = questions.find((question) => question.id == id);
      setQuestion(question.question);
      setAnswer(question.answer);
    }
  }, [id, questions]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    updateQuestion({ id, question, answer });

    idRef.current.focus();
  };

  useEffect(() => {
    if (isSuccess) {
      setId(-1);
      setQuestion("");
      setAnswer("");
      reset();
    }
  }, [isSuccess, reset]);

  return (
    <Card
      title="Update Question 🚀"
      styles="w-full bg-base-500 border border-base-300"
    >
      <form onSubmit={handleSubmit} className="text-center space-y-4">
        <div className="justify-evenly flex flex-col md:flex-row flex-wrap items-center md:space-y-0 space-y-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Questions</span>
            </label>
            <select
              className="select select-bordered"
              value={id}
              ref={idRef}
              onChange={(e) => {
                setId(e.target.value);
              }}
            >
              <option key={-1} disabled value={-1}>
                Select a question
              </option>
              {isQuestionsLoaded &&
                questions.map((question) => (
                  <option key={question.id} value={question.id}>
                    {question.question}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {id !== -1 && (
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
                required
                placeholder="Question"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Answer</span>
              </label>
              <textarea
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
        )}

        {id !== -1 && (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        )}
      </form>
    </Card>
  );
}

export default UpdateQuestion;
