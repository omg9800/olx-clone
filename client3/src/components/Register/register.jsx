import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import "../Login/login.css";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(user);
  };

  const saveUser = () => {
    console.log("registering...");
    fetch("http://localhost:6400/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(() => {
        navigate("/login");
      })
      .catch((e) => {
        alert(e.message);
        console.log(e.message);
      });
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h1>Register</h1>
        <ul className="list-container">
          <li className="item">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </li>

          <li className="item">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </li>
          <li className="item">
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
            />
          </li>

          <li className="item">
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </li>
          <li>
            <button className="signup-btn" onClick={saveUser}>
              Sign Up
            </button>
          </li>
        </ul>

        <span className="al-reg">Already Resistered?</span>
        <Link className="signin" to="/login">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Register;
