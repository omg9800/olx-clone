const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

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
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin, name: this.name },

    "privateKey"
  );
  return token;
};

module.exports = User = mongoose.model("user", userSchema);
