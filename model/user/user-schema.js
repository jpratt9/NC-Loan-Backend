const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name:  { type: String, required: true },
  bank_accounts: { type: Array },
  email:  { type: String, required: true },
  encrypted_password:  { type: String, required: true },
  offers:  { type: Array, required: true },
  requests: { type: Array, required: true },
  rating: { type: Number, min: 0, max: 5 },
  avatar_url: {type: String, required: true }
});


module.exports = mongoose.model('User', userSchema);
