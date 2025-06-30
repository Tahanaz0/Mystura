import React from "react";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("please fill the both field");
      return;
    }
    alert(`welcome, ${username}`);
  };
  return (
    <>
      <div className="parent">
        <div className="first-container">
          <div>
            <img src="/image/icon1.png" alt="Logo" />
          </div>
          <div>
            <h1>MYSTURA</h1>
            <p>FOR THE PEOPLE BY THE PEOPLE</p>
          </div>
        </div>

        <div className="second-container">
          <h2 className="heading">Welcome Back to Home MYSTURA</h2>
          <p className="pera">
            Enter your login details to continue exploring smart home &
            lifestyle services with Mystura.
          </p>
          <form className="form" onSubmit={handleSubmit}>
            <span>Username</span>
            <input
              className="input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Password</span>
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
