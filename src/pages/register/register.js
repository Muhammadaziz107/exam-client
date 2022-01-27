import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import "./register.css";
function Register() {
  const elName = useRef(null);
  const elPassword = useRef(null);
  const elPhone = useRef(null);

  let navigate = useNavigate();

  async function handleRegister(evt) {
    evt.preventDefault();

    const res = await fetch("http://localhost:4000/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: elName.current.value,
        password: elPassword.current.value,
        phone: elPhone.current.value,
      }),
    });

    if (res.status == 200) {
      const { token } = await res.json();
      window.localStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    }
  }

  return (
    <div className="login__body">
      <div className="login-page">
        <div className="register">
          <h1 className="login__heading">Register</h1>
          <form method="POST" onSubmit={handleRegister}>
            <input
              className="login__email"
              type="text"
              placeholder="username"
              name="name"
              required
              ref={elName}
            />
            <input
              className="login__email"
              type="password"
              placeholder="password"
              name="password"
              required
              ref={elPassword}
            />

            <input
              className="login__passwrod"
              type="text"
              placeholder="phone"
              name="phone"
              required
              ref={elPhone}
            />
            <button className="login__btn">Sign up</button>
            <p className="login__footer">
              Do you have an account. Please{"  "}
              <NavLink href="./login.html" to="/login">
                Sign in
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
