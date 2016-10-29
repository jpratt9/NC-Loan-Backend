const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const loanSchema = new Schema({
  loaner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  loanee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  principle: { type: Number, required: true },
  interest_rate: { type: Number, required: true },
  period: { type: Number, required: true },
  period_unit: { type: String, required: true, enum: ['day', 'month', 'year']},
  payments: { type: Array }
});


module.exports = mongoose.model('Loan', loanSchema);
