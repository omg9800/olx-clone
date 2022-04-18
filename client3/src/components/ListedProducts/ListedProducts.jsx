import React, { useEffect, useState } from "react";
import UserProductCard from "../UserProductCard/card";

const ListedProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    fetch(`http://localhost:6400/api/product/seller/${userId}`)
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
    <div>
      <p className="very-bold">Listed Products</p>

      {products.map((m) => (
        <UserProductCard product={m} flag={true} />
      ))}
    </div>
  );
};

export default ListedProducts;
