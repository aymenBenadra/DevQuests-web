import { useState, useRef, useEffect } from "react";
import produce from "immer";
import { v4 as uuidV4 } from "uuid";
import useModules from "../../hooks/useModules";
import useReactMutation from "../../hooks/useReactMutation";
import Card from "../../layouts/Card";
import Module from "./Module";
import useReactQuery from "../../hooks/useReactQuery";

function UpdateRoadmap() {
  const idRef = useRef();
  const modulesRef = useRef();

  const [id, setId] = useState(-1);
  const [title, setTitle] = useState(() => "");
  const [description, setDescription] = useState(() => "");
  const { data: roadmaps, isSuccess: isRoadmapsLoaded } = useReactQuery(
    "/roadmaps",
    ["roadmaps"]
  );
  const { mutate: updateRoadmap, isSuccess } = useReactMutation(
    "/roadmap/update",
    ["roadmaps"]
  );
  const { modules, setModules } = useModules();

  useEffect(() => {
    idRef.current.focus();

    return () => {
      setTitle("");
      setDescription("");
      setModules([]);
    };
  }, []);

  useEffect(() => {
    if (id !== -1) {
      console.log(id);
      const roadmap = roadmaps.find((r) => r.id == id);
      setTitle(roadmap.title);
      setDescription(roadmap.description);
      setModules(roadmap.modules);
      console.log(roadmap);
    }
  }, [id, roadmaps]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roadmap = {
      id,
      title,
      description,
      modules: modules.map((module) => {
        const { completed, order, roadmap_id, ...data } = module;
        const nodes = module.nodes.map((node) => {
          const { module_id, order, ...data } = node;
          return data;
        });

        return {
          ...data,
          nodes,
        };
      }),
    };

    updateRoadmap(roadmap);
    // console.log(roadmap);

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
              <span className="label-text">Roadmaps</span>
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
                Select a Resource
              </option>
              {isRoadmapsLoaded &&
                roadmaps.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.title}
                  </option>
                ))}
            </select>
          </div>
        </div>
        {id !== -1 && (
          <>
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
          </>
        )}
      </form>
    </Card>
  );
}

export default UpdateRoadmap;
