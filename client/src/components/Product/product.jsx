import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./product.css";

const Product = (props) => {
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(location.state.item);
  }, []);

  const buyItem = (event) => {
    event.preventDefault();

    const userId = JSON.parse(localStorage.getItem("userId"));

    fetch(`http://localhost:6400/api/product/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
        productId: product._id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="product-all">
      <div className="product-container">
        <div className="prod-img">
          <img src={`/images/${product?.imageUrl}`} alt="" />
        </div>
        <div className="prod-details">
          <p className="name">{product?.name}</p>
          <p className="desc">{product?.description}</p>
          <p className="price">Rs. {product?.price}</p>
          <div className="btn">
            <button onClick={buyItem}>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
