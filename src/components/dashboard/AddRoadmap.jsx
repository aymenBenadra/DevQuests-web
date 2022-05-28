import { useState, useRef, useEffect } from "react";
import { axiosPrivate } from "../../api/axios";
import useAlert from "../../hooks/useAlert";
import useRoadmaps from "../../hooks/useRoadmaps";
import Card from "../../layouts/Card";
import Module from "./Module";

function AddRoadmap() {
  const titleRef = useRef();
  const modulesRef = useRef();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { setAlert } = useAlert();
  const { getRoadmaps, roadmap, setRoadmap } = useRoadmaps();

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    setTitle("");
    setDescription("");
  }, [roadmap]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axiosPrivate.post(
        "/Roadmap",
        JSON.stringify(roadmap),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setAlert({ type: "success", message: data.message });
      setRoadmap({
        title: "",
        description: "",
        modules: [],
      });
      // refresh Roadmaps
      getRoadmaps();
    } catch (err) {
      if (!err?.response) {
        setAlert({ type: "error", message: "Server not responding" });
      } else {
        setAlert({ type: "error", message: err.response?.data.message });
      }
    }
  };

  const handleAddModule = () => {
    const modulesSection = modulesRef.current;
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
        {/* Modules */}
        <section ref={modulesRef} className="space-y-4">
          <Module index={0} />
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
