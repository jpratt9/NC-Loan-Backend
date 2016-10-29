const Model = require('../../lib/facade');
const bankAccountSchema  = require('./bank-account-schema');


class BankAccountModel extends Model {}

module.exports = new BankAccountModel(bankAccountSchema);
