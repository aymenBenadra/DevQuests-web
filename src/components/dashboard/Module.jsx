import { useEffect, useRef, useState } from "react";
import useRoadmaps from "../../hooks/useRoadmaps";
import Card from "../../layouts/Card";

function Module({ index }) {
  const [title, setTitle] = useState("");
  const [weeks, setWeeks] = useState("");
  const [description, setDescription] = useState("");
  const { roadmap, setRoadmap } = useRoadmaps();

  useEffect(() => {
    setTitle("");
    setWeeks("");
    setDescription("");
  }, [roadmap]);

  useEffect(() => {
    setRoadmap({
      ...roadmap,
      modules: [
        ...roadmap.modules,
        {
          title,
          weeks,
          description,
        },
      ],
    });
  }, [title, weeks, description]);

  useEffect(() => {
    if (roadmap.modules.length > 0) {
      setTitle(roadmap.modules[index].title);
      setWeeks(roadmap.modules[index].weeks);
      setDescription(roadmap.modules[index].description);
    }
  }, [roadmap, index]);

  return (
    <Card
      title={`Module ${index + 1}`}
      styles="w-full bg-base-500 border border-base-300"
    >
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
    </Card>
  );
}

export default Module;
