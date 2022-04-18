const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Product = require("./product");

const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: { type: String, minlength: 5, maxlength: 255 },
  email: {
    type: String,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  phone: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  // purchases: [
  //   {
  //     productId: {
  //       type: schema.Types.ObjectId,
  //       ref: Product,
  //     },
  //   },
  // ],
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin, name: this.name },

    "privateKey"
  );
  return token;
};

module.exports = User = mongoose.model("user", userSchema);
// const User = mongoose.model("Users", userSchema);

// exports.User = User;
