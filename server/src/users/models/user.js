const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../../config');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  number: String,
  role: { type: String, default: 'user' },
  preferences: [String],
  shoppingHistory: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    purchaseDate: Date
  }]
});

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

UserSchema.methods.generateAuthToken = function() {
  return jwt.sign({ _id: this._id }, config.API_KEY_JWT, { expiresIn: '1d' });
};

UserSchema.statics.createUser = async function(email, password, name, number, role) {
  const user = new this({ email, password, name, number, role });
  await user.save();
  return user;
};

module.exports = mongoose.model('User', UserSchema);