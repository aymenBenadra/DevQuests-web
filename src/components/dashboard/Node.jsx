import { useEffect, useState } from "react";
import useModules from "../../hooks/useModules";
import Card from "../../layouts/Card";
import produce from "immer";

function Node({ moduleIndex, nodeIndex }) {
  const { modules, setModules } = useModules();

  const [title, setTitle] = useState(() => {
    return modules[moduleIndex].nodes[nodeIndex].title;
  });
  const [description, setDescription] = useState(() => {
    return modules[moduleIndex].nodes[nodeIndex].description;
  });

  useEffect(() => {
    setModules(
      produce((draft) => {
        const module = draft[moduleIndex];
        module.nodes[nodeIndex].title = title;
        module.nodes[nodeIndex].description = description;
      })
    );
  }, [title, description]);

  const handleRemoveNode = (e, index) => {
    e.preventDefault();

    setModules(
      produce((draft) => {
        draft[moduleIndex].nodes.splice(index, 1);
      })
    );
  };

  return (
    <Card
      title={`Node #${nodeIndex + 1}`}
      styles="w-full bg-base-500 border border-base-300 relative"
    >
      <div className="justify-evenly flex flex-col md:flex-row flex-wrap items-center space-y-4">
        <button
          className="absolute top-2 right-2 btn btn-circle btn-sm btn-ghost"
          onClick={(e) => handleRemoveNode(e, nodeIndex)}
        >
          X
        </button>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
            required
            placeholder="Title"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
            value={description}
          />
        </div>
      </div>
    </Card>
  );
}

export default Node;
