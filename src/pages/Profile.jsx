import Hero from "../components/Hero";
import Roadmaps from "../components/Roadmaps";
import { ROADMAPS_FILTER_OPTIONS } from "../constants";
import useAuth from "../hooks/useAuth";

function Profile() {
  const { auth } = useAuth();
  const badge = (
    <span className="badge badge-outline badge-primary badge-lg align-top">
      {auth?.is_admin ? "Admin" : "User"}
    </span>
  );

  return (
    <>
      <Hero
        title={
          <>
            {`Welcome ${auth?.name}`} {badge}
          </>
        }
        subtitle={
          <>
            Learn how to code <span className="underline text-lg">Today!</span>{" "}
            with our Roadmaps and resources!
          </>
        }
        cta={
          <>
            {!auth?.username && (
              <Link to="/register" className="btn btn-success">
                Get Started
              </Link>
            )}
          </>
        }
      />
      <Roadmaps
        title="In Progress Roadmaps"
        filter={ROADMAPS_FILTER_OPTIONS.inProgress}
        trailingItem={false}
        subtitle="Your Roadmaps that are in progress"
      />
      <Roadmaps
        title="Completed Roadmaps"
        filter={ROADMAPS_FILTER_OPTIONS.completed}
        trailingItem={false}
        subtitle="Your Roadmaps that are completed"
      />
    </>
  );
}

export default Profile;
