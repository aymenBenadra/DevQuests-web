import { useEffect, useRef, useState } from "react";
import { useQuestions, useRemoveQuestion } from "../../hooks/Questions";
import Card from "../../layouts/Card";

function RemoveQuestion() {
  const idRef = useRef();

  const [id, setId] = useState(-1);
  const { data: questions, isSuccess: isQuestionsLoaded } = useQuestions();
  const { mutate: removeQuestion } = useRemoveQuestion();

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    removeQuestion(id);

    setId(-1);

    idRef.current.focus();
  };
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
