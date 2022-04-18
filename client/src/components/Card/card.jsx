import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    navigate("./product", { state: { item } });
  };
  return (
    <div className="card-container" onClick={handleClick}>
      <div>
        <div className="img-card">
          <img src={`/images/${item.imageUrl}`} />
        </div>
        <div className="product-details">
          <p className="bold">Rs. {item.price}</p>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
