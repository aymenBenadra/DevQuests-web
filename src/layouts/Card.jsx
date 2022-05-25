import React from "react";

function Card({ title, styles, children }) {
  return (
    <div className={"card bg-base-100 shadow-xl " + styles}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Card;
