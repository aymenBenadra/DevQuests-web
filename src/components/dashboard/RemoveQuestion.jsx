import { useEffect, useRef, useState } from "react";
import useReactMutation from "../../hooks/useReactMutation";
import useReactQuery from "../../hooks/useReactQuery";
import Card from "../../layouts/Card";

function RemoveQuestion() {
  const idRef = useRef();

  const [id, setId] = useState(-1);
  const { data: questions, isSuccess: isQuestionsLoaded } = useReactQuery(
    "/questions",
    ["questions"]
  );
  const {
    mutate: removeQuestion,
    isSuccess,
    reset,
  } = useReactMutation("/question/delete", ["questions"]);

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    removeQuestion({ id });

    idRef.current.focus();
  };

  useEffect(() => {
    if (isSuccess) {
      setId(-1);
      reset();
    }
  }, [isSuccess, reset]);

  return (
    <Card
      title="Remove Question 🚀"
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Card>
  );
}

export default RemoveQuestion;
