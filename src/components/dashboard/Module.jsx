import { useEffect, useRef, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import useModules from "../../hooks/useModules";
import Card from "../../layouts/Card";
import produce from "immer";
import Node from "./Node";

function Module({ index }) {
  const { modules, setModules } = useModules();
  const nodesRef = useRef();

  const [title, setTitle] = useState(() => {
    return modules[index] ? modules[index].title : "";
  });
  const [weeks, setWeeks] = useState(() => {
    return modules[index] ? modules[index].weeks : 0;
  });
  const [description, setDescription] = useState(() => {
    return modules[index] ? modules[index].description : "";
  });

  useEffect(() => {
    setModules(
      produce((draft) => {
        draft[index].title = title;
        draft[index].description = description;
        draft[index].weeks = weeks;
      })
    );
  }, [title, weeks, description]);

  const handleRemoveModule = (e, index) => {
    e.preventDefault();

    setModules(
      produce((draft) => {
        draft.splice(index, 1);
      })
    );
  };

  const handleAddNode = (e) => {
    e.preventDefault();
    setModules(
      produce((draft) => {
        draft[index].nodes.push({
          id: uuidV4(),
          title: "",
          description: "",
        });
      })
    );
  };

  return (
    <Card
      title={`Module #${index + 1}`}
      styles="w-full bg-base-500 border border-base-300 relative"
    >
      <div className="justify-evenly flex flex-col md:flex-row flex-wrap items-center space-y-4">
        <button
          className="absolute top-2 right-2 btn btn-circle btn-sm btn-ghost"
          onClick={(e) => handleRemoveModule(e, index)}
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

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Estimated time in weeks</span>
          </label>
          <input
            type="number"
            id="weeks"
            value={weeks}
            onChange={(e) => setWeeks(e.target.value)}
            autoComplete="off"
            required
            min={1}
            max={100}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>

      <section className="space-y-4 mt-2">
        <div ref={nodesRef} className="space-y-3">
          {modules[index].nodes.length > 0 &&
            modules[index].nodes.map((node, i) => (
              <Node key={node.id} moduleIndex={index} nodeIndex={i} />
            ))}
        </div>
        <button
          className="btn btn-primary btn-sm btn-outline"
          onClick={(e) => handleAddNode(e)}
        >
          Add Node +
        </button>
      </section>
    </Card>
  );
}

export default Module;
