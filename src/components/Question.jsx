import React from "react";

function Question({ question }) {
  return (
    <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-full mb-2 shadow h-fit">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-md font-medium">
        {question.question}
      </div>
      <div className="collapse-content overflow-y-auto h-fit text-center">
        <p>{question.answer}</p>
      </div>
    </div>
  );
}

export default Question;
