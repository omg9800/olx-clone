import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./product.css";

const Product = (props) => {
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(location.state.item);
  }, []);

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
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
