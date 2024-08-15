const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  name: String,
  location: {
    type: { type: String },
    coordinates: [Number]
  },
  inventory: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }]
});

module.exports = mongoose.model('Store', StoreSchema);