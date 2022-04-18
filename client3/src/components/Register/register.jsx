import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import "../Login/login.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// toast.configure();

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

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
        console.log("success");
        // notify();
      })
      .catch((e) => {
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
              //   onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li className="item">
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
              //   onChange={(e) => setUsername(e.target.value)}
            />
          </li>

          <li className="item">
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              //   onChange={(e) => setPassword(e.target.value)}
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
