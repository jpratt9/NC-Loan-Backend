const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const paymentSchema = new Schema({
  loan: { type: Schema.ObjectId, ref: 'Loan', required: true },
  loanee_bank_account:  { type: String, required: true },
  loaner_bank_account: { type: String, required: true},
  amount: { type: Number, required: true},
  date: { type: Date, required: true}
});


module.exports = mongoose.model('Payment', paymentSchema);
