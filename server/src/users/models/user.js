const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  preferences: [String],
  shoppingHistory: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    purchaseDate: Date
  }]
});

module.exports = mongoose.model('User', UserSchema);