import React, { useState } from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";  // 👈 Add this
import { auth } from "../../firebase";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");   // 👈 new state
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      username: username.trim() === "",
      password: password.trim() === "",
    };
    setErrors(newErrors);

    if (newErrors.username || newErrors.password) {
      return;
    }

    try {
      // 👇 Firebase Auth Login
      await signInWithEmailAndPassword(auth, username, password);
      navigate('/dashboard');
    } catch (error) {
      console.error("Login Error:", error.message);
      setErrorMsg("Invalid username or password");
    }
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
              type="email"     // 👈 username = email hona chahiye Firebase Auth me
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ border: errors.username ? "2px solid red" : "1px solid #bbb" }}
              name="username"
              autoComplete="username"
            />
            {errors.username && (
              <p style={{ color: "red", fontSize: "0.85rem", margin:'0px' }}>
                Email is required
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
              style={{ border: errors.password ? "2px solid red" : "1px solid #bbb" }}
              name="password"
              autoComplete="current-password"
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

          {errorMsg && (
            <p style={{ color: "red", fontSize: "0.9rem" }}>{errorMsg}</p>
          )}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
