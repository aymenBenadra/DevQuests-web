import { useEffect, useRef, useState } from "react";
import { PAGINATION_ITEMS_COUNT } from "../constants";
import useReactQuery from "../hooks/useReactQuery";

function Resources() {
  const { data: resources, isSuccess } = useReactQuery("/resources", [
    "resources",
  ]);
  const [count, setCount] = useState(1);
  const showMoreRef = useRef();

  function handleShowMore() {
    if (count * PAGINATION_ITEMS_COUNT < resources.length) {
      setCount((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (isSuccess && count * PAGINATION_ITEMS_COUNT >= resources.length) {
      showMoreRef.current.classList.add("hidden");
    }
  }, [isSuccess, count, resources]);

  return (
    <section className="bg-base-100 p-10 rounded-box w-full">
      <h1 className="text-4xl mb-6">Resources</h1>
      <p className="text-primary mb-4">
        Learn from these resources now for free!
      </p>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full rounded-box p-4">
        {isSuccess &&
          resources.slice(0, count * PAGINATION_ITEMS_COUNT).map((resource) => (
            <li key={resource.id}>
              <div
                className="tooltip  border border-base-300 shadow w-full px-4 py-2 rounded-full"
                data-tip={resource.description}
              >
                <a href={resource.link} target="_blank">
                  <div className="indicator w-full">
                    <span className="indicator-item indicator-middle -translate-x-1 hover:-translate-x-4 badge badge-primary ">
                      Go to →
                    </span>
                    {resource.title}
                  </div>
                </a>
              </div>
            </li>
          ))}
      </ul>
      {isSuccess && (
        <div className="flex w-full justify-center mt-4">
          <button
            className="badge badge-lg badge-primary badge-outline text-center"
            onClick={handleShowMore}
            ref={showMoreRef}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

export default Resources;
