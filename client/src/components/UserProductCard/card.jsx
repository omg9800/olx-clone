import React from "react";
import "./userCard.css";

function Card(props) {
  let { name, description, price, imageUrl, status } = props.product;

  return (
    <div className="user-card">
      <div className="card-img">
        <img id="user-card-img" src={`/images/${imageUrl}`} alt="Card Image" />
      </div>

      <div className="card-details">
        <div className="card-select">
          <h2 className="card-price">Rs. {price}</h2>
        </div>
        <p className="card-name">{name}</p>
        <p className="card-desc">{description}</p>
        {props.flag && <p className="bold">{status}</p>}
      </div>
    </div>
  );
}

export default Card;
