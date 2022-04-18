import React, { useEffect, useState } from "react";
import "./style.css";
import UserProductCard from "../UserProductCard/card";

const PurchasedProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    fetch(`http://localhost:6400/api/product/buyer/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="purchased-prods">
      <p className="very-bold">Purchased Products</p>
      {products.map((m) => (
        <UserProductCard product={m} />
      ))}
    </div>
  );
};

export default PurchasedProducts;
