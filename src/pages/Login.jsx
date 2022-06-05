import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAlert from "../hooks/useAlert";
import axios from "../api/axios";
import Card from "../layouts/Card";

function Login() {
  const { setAuth } = useAuth();
  const { setAlert } = useAlert();
  const loginRef = useRef();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loginRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "/login",
        JSON.stringify({ login, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setAuth(data);
      setAlert({ type: "info", message: "Logged in successfully" });
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setAlert({ type: "info", message: "No Server Response" });
      } else {
        setAlert({ type: "info", message: err.response?.data.message });
      }
    }
  };

  return (
    <section className="text-center flex justify-center">
      <Card title="Login" styles="w-96">
        <form onSubmit={handleSubmit} className=" space-y-3 text-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Username or Email</span>
            </label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              ref={loginRef}
              autoComplete="off"
              required
              placeholder="Username or Email"
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
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <p>
          Need an Account?{" "}
          <span>
            <Link to="/register" className="link link-hover">
              Sign Up
            </Link>
          </span>
        </p>
      </Card>
    </section>
  );
}

export default Login;
