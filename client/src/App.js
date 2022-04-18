import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/register";
import Navbar from "./components/Navbar/navbar";
import NewProduct from "./components/NewProduct/newProduct";
import Products from "./components/Products/Products";
import User from "./components/User/user";
import Product from "./components/Product/product";

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let newUser = JSON.parse(localStorage.getItem("user"));
    setUser(newUser);
    console.log(user);
  }, []);

  return (
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/new" element={<NewProduct />} />
        <Route path="/product" element={<Product />} />

        <Route path="/user/*" element={<User setUser={setUser} />} />
      </Routes>
    </div>
  );
}

// export default Home

export default App;
