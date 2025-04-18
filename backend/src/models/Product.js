// backend/src/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true }, // Using string to match frontend (e.g., "₦10,500")
  image: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model('Product', productSchema);