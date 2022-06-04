import { useState, useRef, useEffect } from "react";
import useReactMutation from "../../hooks/useReactMutation";
import Card from "../../layouts/Card";

function AddResource() {
  const titleRef = useRef();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const {
    mutate: addResource,
    reset,
    isSuccess,
  } = useReactMutation("/resource", ["resources"]);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    addResource({ title, description, link });
  };

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setDescription("");
      setLink("");
      reset();
    }
  }, [isSuccess, reset]);
  return (
    <Card
      title="Add Resource 🚀"
      styles="w-full bg-base-500 border border-base-300"
    >
      <form onSubmit={handleSubmit} className="text-center space-y-4">
        <div className="justify-evenly flex flex-col md:flex-row flex-wrap items-center md:space-y-0 space-y-3">
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

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Link</span>
            </label>
            <input
              type="text"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
              placeholder="Link"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Card>
  );
}

export default AddResource;
