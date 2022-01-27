import "./login.css";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

function Login() {
  const elName = useRef(null);
  const elPassword = useRef(null);

  let navigate = useNavigate();

  async function handleLogin(evt) {
    evt.preventDefault();

    const res = await fetch("http://localhost:4000/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: elName.current.value,
        password: elPassword.current.value,
      }),
    });

    if (res.status === 200) {
      const { token } = await res.json();
      window.localStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    }
  }
  return (
    <div className="login__body">
      <div className="login-page">
        <div className="login">
          <h1 className="login__heading">Login</h1>
          <form onSubmit={handleLogin}>
            <input
              className="login__email"
              type="text"
              placeholder="username"
              name="name"
              ref={elName}
            />
            <input
              className="login__passwrod"
              type="password"
              placeholder="password"
              ref={elPassword}
              name="password"
            />
            <button type="submit" className="login__btn">
              Sign in
            </button>

            <p className="login__footer">
              Don't have any account. Please <NavLink to="/register">Sign up</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
