import React from "react";
import underConstruction from "../images/under_construction.svg";

function UnderConstruction() {
  return (
    <div className="flex flex-col text-center items-center space-y-4 w-full">
      <img src={underConstruction} alt="Under Construction" className=" max-w-md w-full" />
      <h3 className="text-xl text-primary">Page Under Construction</h3>
    </div>
  );
}

export default UnderConstruction;
