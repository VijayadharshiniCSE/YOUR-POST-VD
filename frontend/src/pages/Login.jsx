import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "test@gmail.com" && password === "12345678") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login to <span>YOUR POST</span></h1>
        <p>ENTER YOUR DETAILS</p>

        <input
          type="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>LOGIN</button>
      <p className="signup-text">
          Don't have an account? <span>Create one</span>
        </p>
      </div>
    </div>
  );
}