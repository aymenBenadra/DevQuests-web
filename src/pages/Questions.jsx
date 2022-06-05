import { useEffect, useRef, useState } from "react";
import Question from "../components/Question";
import { PAGINATION_ITEMS_COUNT } from "../constants";
import useReactQuery from "../hooks/useReactQuery";

function Questions() {
  const { data: questions, isSuccess } = useReactQuery("/questions", [
    "questions",
  ]);
  const [count, setCount] = useState(1);
  const showMoreRef = useRef();

  function handleShowMore() {
    if (count * PAGINATION_ITEMS_COUNT < questions.length) {
      setCount((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (isSuccess && count * PAGINATION_ITEMS_COUNT >= questions.length) {
      showMoreRef.current.classList.add("hidden");
    }
  }, [isSuccess, count, questions]);

  return (
    <section className="bg-base-100 p-10 rounded-box w-full">
      <h1 className="text-4xl mb-6">Questions</h1>
      <p className="text-primary mb-4">
        Learn from these Questions now for free!
      </p>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full rounded-box p-4">
        {isSuccess &&
          questions
            .slice(0, count * PAGINATION_ITEMS_COUNT)
            .map((question) => (
              <Question key={question.id} question={question} />
            ))}
      </ul>
      {isSuccess && (
        <div className="flex w-full justify-center mt-4">
          <button
            className="badge badge-lg badge-primary badge-outline text-center"
            onClick={handleShowMore}
            ref={showMoreRef}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

export default Questions;
