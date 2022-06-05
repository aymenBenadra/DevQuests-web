import React from "react";
import Hero from "../components/Hero";
import Resources from "../components/home/Resources";
import Roadmaps from "../components/Roadmaps";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Questions from "../components/home/Questions";

function Home() {
  const { auth } = useAuth();
  return (
    <>
      <Hero
        title="Welcome to DevQuests!"
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
      <Roadmaps title="Featured Roadmaps" />
      <div className="flex flex-grow flex-col md:flex-row w-full">
        <section className="mt-4 bg-base-100 p-10 rounded-box w-full md:w-3/5">
          <h1 className="text-4xl mb-6">Resources</h1>
          <p className="text-primary mb-4">
            Learn from these resources now for free!
          </p>
          <Resources />
        </section>
        <section className="mt-4 bg-base-100 p-10 rounded-box w-full md:w-2/5">
          <h1 className="text-4xl mb-6">Questions</h1>
          <p className="text-primary mb-4">
            Challenge yourself and ask questions to learn more!
          </p>
          <Questions />
        </section>
      </div>
    </>
  );
}

export default Home;
