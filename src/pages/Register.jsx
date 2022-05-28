import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAlert from "../hooks/useAlert";
import Card from "../layouts/Card";

function Register() {
  const usernameRef = useRef();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setAlert } = useAlert();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "/register",
        JSON.stringify({ username, name, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setAlert({ type: "success", message: data.message });
      navigate("/login");
    } catch (err) {
      if (!err?.response) {
        setAlert({ type: "error", message: "Server not responding" });
      } else {
        setAlert({ type: "error", message: err.response?.data.message });
      }
    }
  };

  return (
    <section className="text-center flex justify-center">
      <Card title="Sign up" styles="w-96">
        <form onSubmit={handleSubmit} className=" space-y-3 text-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameRef}
              autoComplete="off"
              required
              placeholder="Username"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
        <p>
          Already have an Account?{" "}
          <span>
            <Link to="/login" className="link link-hover">
              Login
            </Link>
          </span>
        </p>
      </Card>
    </section>
  );
}

export default Register;
