const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const { email, password, name, number, role } = req.body;
    const user = await User.createUser(email, password, name, number, role);
    const token = user.generateAuthToken();
    res.status(201).send({ message: 'User registered successfully', token, user: { _id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid email or password' });
    }
    const token = user.generateAuthToken();
    res.send({ message: 'Login successful', token, user: { _id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.profile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.validateToken = async (req, res) => {
  // If the middleware passes, the token is valid
  res.status(200).send({ message: 'Token is valid', user: { _id: req.user._id, name: req.user.name, email: req.user.email } });
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('shoppingHistory.product');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};