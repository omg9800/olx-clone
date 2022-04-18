import React, { useState, useEffect } from "react";
import "./style.css";
const NewProduct = () => {
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: 0,
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProduct((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleFile = (e) => {
    console.log(e.target.files[0], "b");
    setFile(e.target.files[0]);
    console.log(file, "a");
  };

  const handleSubmit = (event) => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    let formData = new FormData();
    formData.append("name", product.name);
    formData.append("category", product.category);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("userId", userId);

    formData.append("image", file);

    console.log(formData);
    fetch("http://localhost:6400/api/product", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e));

    event.preventDefault();
  };

  return (
    <div className="new-bg">
      <div className="form-container">
        <div className="form-item">
          <h2>Add new Product</h2>
        </div>
        <form encType="multipart/form-data" onSubmit="return false">
          <div className="form-item">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <input
              type="text"
              name="price"
              placeholder="Price"
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <input type="file" name="file" onChange={handleFile} />
          </div>
          <div className="form-item">
            <button type="submit" onClick={() => handleSubmit()}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
