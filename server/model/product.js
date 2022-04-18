const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
  buyerId: {
    type: String,
  },
  sellerId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: String,
  category: String,
  status: {
    type: String,
    default: "unsold",
  },
});

module.exports = mongoose.model("Product", productSchema);
