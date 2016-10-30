const mongoose = require('mongoose'),
  Schema   = mongoose.Schema;
  passportLocalMongoose = require('passport-local-mongoose'),
  bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  username: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name:  { type: String, required: true },
  bank_accounts: { type: Array },
  email:  { type: String, required: true },
  password:  { type: String, required: true },
  offers:  { type: Array },
  requests: { type: Array },
  rating: { type: Number, min: 0, max: 5 },
  avatar_url: {type: String, required: true }
});


module.exports = mongoose.model('User', userSchema);
User.plugin(passportLocalMongoose);
