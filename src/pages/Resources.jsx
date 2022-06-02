import { useResources } from "../hooks/Resources";

function Resources() {
  const { data: resources, isSuccess } = useResources();

  return (
    <section className="bg-base-100 p-10 rounded-box w-full">
      <h1 className="text-4xl mb-6">Resources</h1>
      <p className="text-primary mb-4">
        Learn from these resources now for free!
      </p>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full rounded-box p-4">
        {isSuccess &&
          resources.map((resource) => (
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
    </section>
  );
}

export default Resources;
