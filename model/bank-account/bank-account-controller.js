const Controller = require('../../lib/controller');
const bankAccountModel  = require('./bank-account-facade');


class BankAccountController extends Controller {}

module.exports = new BankAccountController(bankAccountModel);
