import { useEffect, useRef, useState } from "react";
import useReactMutation from "../../hooks/useReactMutation";
import useReactQuery from "../../hooks/useReactQuery";
import Card from "../../layouts/Card";

function RemoveResource() {
  const idRef = useRef();

  const [id, setId] = useState(-1);
  const { data: resources, isSuccess: isResourcesLoaded } = useReactQuery(
    "/resources",
    ["resources"]
  );
  const {
    mutate: removeResource,
    isSuccess,
    reset,
  } = useReactMutation("/resource/delete", ["resources"]);

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    removeResource({ id });

    idRef.current.focus();
  };

  useEffect(() => {
    if (isSuccess) {
      setId(-1);
      reset();
    }
  }, [isSuccess, reset]);

  return (
    <Card
      title="Remove Resource 🚀"
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
                resources.map((Resource) => (
                  <option key={Resource.id} value={Resource.id}>
                    {Resource.title}
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

export default RemoveResource;
