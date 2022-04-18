import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import ListedProducts from "../ListedProducts/ListedProducts";
import Profile from "../ProfileDetails/profile";
import PurchasedProducts from "../PurchasedProducts/purchasedProducts";
import "./user.css";

const User = ({ setUser }) => {
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <div className="user-container">
      <div className="user-sidebar">
        <ul className="ul-list">
          <li>
            <NavLink className="li-item" to="profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="li-item" to="purchases">
              Purchases
            </NavLink>
          </li>
          <li>
            <NavLink className="li-item" to="listed">
              Listed
            </NavLink>
          </li>
          <li>
            <NavLink className="li-item" to="/" onClick={logout}>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="user-details">
        <Routes>
          <Route path="purchases" element={<PurchasedProducts />} />
          <Route path="listed" element={<ListedProducts />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default User;
