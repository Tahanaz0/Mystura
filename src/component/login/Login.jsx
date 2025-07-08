import React, { useState } from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      username: username.trim() === "",
      password: password.trim() === "",
    };

    setErrors(newErrors);

    if (newErrors.username || newErrors.password) {
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="parent">
      <div className="first-container">
        <img src="/image/icon1.png" alt="Logo" />
        <h1 className="heading1">MYSTURA</h1>
        <p className="pera">FOR THE PEOPLE BY THE PEOPLE</p>
      </div>

      <div className="second-container">
        <h2 className="heading">Welcome Back to Home MYSTURA</h2>
          <p className="pera"> 
            Enter your login details to continue exploring smart home &
            lifestyle services with Mystura.
          </p>
        <form className="form" onSubmit={handleSubmit}>
          
           
          <div>
          <input
            className="input1"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              border: errors.username ? "2px solid red" : "1px solid #bbb",
            }}
          />
          {errors.username && (
            <p style={{ color: "red", fontSize: "0.85rem", margin:'0px' }}>
              Username is required
            </p>
          )}
          </div>
          <div>
          <input
            className="input1"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              border: errors.password ? "2px solid red" : "1px solid #bbb",
            }}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "0.85rem",margin:'0px' }}>
              Password is required
            </p>
          )}
          </div>
          <div className="remember-me">
            <div>
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            </div>
            <div>
              <label htmlFor="remember" className="remember">
                Remember Me
              </label>
            </div>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
