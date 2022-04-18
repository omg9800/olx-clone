import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";
function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const verifyUser = async () => {
    try {
      const res = await fetch(`http://localhost:6400/api/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });

      const response = await res.json();
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("userId", JSON.stringify(response.user._id));
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("token", JSON.stringify(response.token));
      window.location("/");
      setLoggedIn(true);
      setUser(response.user);
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h1>Login</h1>
        <ul className="list-container">
          <li className="item">
            <input
              type="text"
              placeholder="Mobile Number"
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li className="item">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li className="submit-btn" onClick={verifyUser}>
            <button>Submit</button>
          </li>
        </ul>

        <span className="not-reg">Not Resistered?</span>
        <Link className="signup" to="/register">
          SignUp
        </Link>
      </div>
    </div>
  );
}

export default Login;
