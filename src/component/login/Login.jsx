import React from "react";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const [username , setUsername] =useState('');
  const [password, setPassword] =useState('')
  const handleSubmit =(e) =>{
    e.preventDefault();
    if (username.trim()==='' || password.trim()===''){
            alert('please fill the both field')
            return;
    }
    alert(`welcome, ${username}`)
  }
  return (
    <>
      <div className="parent">
        <div className="first-container">
          <img src="/image/icon1.png" alt="Logo" />
          <h1 className="heading">MYSTURA</h1>
          <p className="pera">FOR THE PEOPLE BY THE PEOPLE</p>
        </div>
        <div className="second-container">
         
          <form className="form" onSubmit={handleSubmit}>
             <h2 className="heading">Welcome Back to Home MYSTURA</h2>
          <p className="pera">Enter your login details to continue exploring smart home & lifestyle services with Mystura.</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // style={styles.input}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
