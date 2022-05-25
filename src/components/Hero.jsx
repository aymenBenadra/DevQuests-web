import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Hero() {
  const { auth } = useAuth();
  return (
    <div className="hero min-h-fit bg-base-200 md:place-content-start">
      <div className="hero-content md:ml-40">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to DevQuests!</h1>
          <p className="py-6">
            Learn how to code <span className="underline text-lg">today!</span>{" "}
            with our Roadmaps and resources!
          </p>
          {!auth?.username && (
            <Link to="/register" className="btn btn-success">
              Get Started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
