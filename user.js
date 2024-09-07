const mongoose = require('mongoose');

// Define a schema for the User model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
