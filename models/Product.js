const mongoose = require("mongoose");
const productDB = require("../db/productDB");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
});

module.exports = productDB.model("Product", productSchema);
