import { useEffect, useRef, useState } from "react";
import Card from "../../layouts/Card";
import { useRoadmaps, useRemoveRoadmap } from "../../hooks/Roadmaps";

function RemoveRoadmap() {
  const idRef = useRef();

  const [id, setId] = useState(-1);
  const { data: roadmaps, isSuccess: isRoadmapsLoaded } = useRoadmaps();
  const { mutate: removeRoadmap } = useRemoveRoadmap();

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    removeRoadmap(id);

    setId(-1);

    idRef.current.focus();
  };
  return (
    <Card
      title="Remove Roadmap 🚀"
      styles="w-full bg-base-500 border border-base-300"
    >
      <form onSubmit={handleSubmit} className="text-center space-y-4">
        <div className="justify-evenly flex flex-col md:flex-row flex-wrap items-center md:space-y-0 space-y-3">
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
                Select a Roadmap
              </option>
              {isRoadmapsLoaded &&
                roadmaps.map((roadmap) => (
                  <option key={roadmap.id} value={roadmap.id}>
                    {roadmap.title}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Card>
  );
}

export default RemoveRoadmap;
