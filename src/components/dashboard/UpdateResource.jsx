import { useEffect, useRef, useState } from "react";
import { useUpdateResource, useResources } from "../../hooks/Resources";
import Card from "../../layouts/Card";

function UpdateResource() {
  const idRef = useRef();

  const [id, setId] = useState(-1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const { data: resources, isSuccess: isResourcesLoaded } = useResources();
  const { mutate: updateResource } = useUpdateResource();

  useEffect(() => {
    idRef.current.focus();
  }, []);

  useEffect(() => {
    if (id !== -1) {
      console.log(id);
      const resource = resources.find((r) => r.id == id);
      setTitle(resource.title);
      setDescription(resource.description);
      setLink(resource.link);
    }
  }, [id, resources]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    updateResource({ id, title, description, link });

    setId(-1);
    setTitle("");
    setDescription("");
    setLink("");

    idRef.current.focus();
  };
  return (
    <Card
      title="Update Resource 🚀"
      styles="w-full bg-base-500 border border-base-300"
    >
      <form onSubmit={handleSubmit} className="text-center space-y-4">
        <div className="justify-evenly flex flex-col md:flex-row flex-wrap items-center md:space-y-0 space-y-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Resources</span>
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
              {isResourcesLoaded &&
                resources.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.title}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {id !== -1 && (
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
        )}

        {id !== -1 && (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        )}
      </form>
    </Card>
  );
}

export default UpdateResource;
