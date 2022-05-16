import React from "react";
import { useParams } from "react-router-dom";

function Module() {
  const { module } = useParams();
  return <div>Module: {module}</div>;
}

export default Module;
