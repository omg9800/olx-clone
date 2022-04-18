import React, { useEffect, useState } from "react";
import Card from "../Card/card";
import "./products.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6400/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="products">
      {products.map((m) => {
        return <Card key={m._id} item={m} />;
      })}
    </div>
  );
};

export default Products;
