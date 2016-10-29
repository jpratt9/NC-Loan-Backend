const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const loanSchema = new Schema({
  loaner: { type: Schema.ObjectId, ref: 'User', required: true },
  loanee: { type: Schema.ObjectId, ref: 'User', required: true },
  principle: { type: Number, required: true },
  interest_rate: { type: Number, min: 0, required: true },
  minimum_payment: { type: Number, min: 0 },
  regular_payment: { type: Number, min: 0, required: true },
  period: { type: String, enum: ['day', 'week', 'month', 'year'], required: true},
  transfers: { type: Array, required: true }
});


module.exports = mongoose.model('Loan', loanSchema);
