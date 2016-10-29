const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const bankAccountSchema = new Schema({
  title: { type: String, required: true },
  body:  { type: String }
});


module.exports = mongoose.model('BankAccount', bankAccountSchema);
