import { useState, useRef, useEffect } from "react";
import produce from "immer";
import { v4 as uuidV4 } from "uuid";
import useModules from "../../hooks/useModules";
import useReactMutation from "../../hooks/useReactMutation";
import Card from "../../layouts/Card";
import Module from "./Module";

function AddRoadmap() {
  const titleRef = useRef();
  const modulesRef = useRef();

  const [title, setTitle] = useState(() => "");
  const [description, setDescription] = useState(() => "");
  const { mutate: addRoadmap, isSuccess } = useReactMutation("/roadmap", [
    "roadmaps",
  ]);
  const { modules, setModules } = useModules();

  useEffect(() => {
    titleRef.current.focus();

    return () => {
      setTitle("");
      setDescription("");
      setModules([]);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roadmap = {
      title,
      description,
      modules: modules.map((module) => {
        const { id: mid, ...data } = module;
        const nodes = module.nodes.map((node) => {
          const { id: nid, ...data } = node;
          return data;
        });

        return {
          ...data,
          nodes,
        };
      }),
    };

    addRoadmap(roadmap);

    if (isSuccess) {
      setModules([]);
    }
  };

  const handleAddModule = (e) => {
    e.preventDefault();
    setModules(
      produce((draft) => {
        draft.push({
          id: uuidV4(),
          title: "",
          description: "",
          weeks: 0,
          nodes: [],
        });
      })
    );
  };

  return (
    <Card
      title="Add Roadmap 🚀"
      styles="w-full bg-base-500 border border-base-300"
    >
      <form onSubmit={handleSubmit} className="text-center space-y-4">
        <div className="justify-evenly flex flex-col md:flex-row flex-wrap items-center space-y-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              ref={titleRef}
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

        <section className="space-y-4">
          <div ref={modulesRef} className="space-y-3">
            {modules.length > 0 &&
              modules.map((module, index) => (
                <Module key={module.id} index={index} />
              ))}
          </div>
          <button
            className="btn btn-primary btn-sm btn-outline"
            onClick={(e) => handleAddModule(e)}
          >
            Add Module +
          </button>
        </section>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Card>
  );
}

export default AddRoadmap;
