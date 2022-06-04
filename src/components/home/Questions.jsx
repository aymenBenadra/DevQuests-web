import { Link } from "react-router-dom";
import Question from "../Question";
import useReactQuery from "../../hooks/useReactQuery";

function Questions() {
  const {
    isLoading,
    isSuccess,
    data: questions,
  } = useReactQuery("/questions", ["questions"]);

  if (isLoading) return <div>Loading...</div>;
  if (isSuccess)
    return (
      <div>
        {questions.slice(0, 2).map((question) => (
          <Question key={question.id} question={question} />
        ))}
        <Question
          key={-1}
          question={{
            question: "Wanna see more?",
            answer: (
              <Link
                to="/questions"
                className="badge badge-outline badge-primary"
              >
                Click here!
              </Link>
            ),
          }}
        />
      </div>
    );
}

export default Questions;
