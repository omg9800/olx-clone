import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({ item }) => {
  const buyItem = (event) => {
    event.preventDefault();

    const userId = JSON.parse(localStorage.getItem("userId"));

    fetch(`http://localhost:6400/api/product/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
        productId: item._id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    // console.log(formData);
    // fetch("http://localhost:6400/api/product", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then(() => console.log("posted"))
    //   .catch((e) => console.log(e));
  };

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
