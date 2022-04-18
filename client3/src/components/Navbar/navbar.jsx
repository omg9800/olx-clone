import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../olx-logo.png";
import { MdSearch } from "react-icons/md";
import { BsPerson, BsPlusCircleFill } from "react-icons/bs";
const Navbar = ({ user }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={logo} alt="" />
          </Link>
        </div>
      </div>

      <div className="navbar-mid">
        <input
          className="search"
          type="text"
          placeholder="Search for product's brand"
          name="search"
          // value={searchText}
          // onChange={handleSearch}
        />
        <span className="search-icon">
          <MdSearch />
        </span>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="li-flex">
            <BsPerson />
            <Link className="link" to={user ? "/user/profile" : "/login"}>
              {!user ? "Login" : user.name}
            </Link>
          </li>
          <li className="li-flex">
            <BsPlusCircleFill />

            <Link
              className="link"
              to={user ? "/new" : "/login"}
              style={{ position: "relative" }}
            >
              Sell
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
