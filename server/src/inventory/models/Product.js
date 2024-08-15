const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  iotData: {
    shelfLocation: String,
    lastRestocked: Date
  }
});

module.exports = mongoose.model('Product', ProductSchema);