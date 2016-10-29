const Controller = require('../../lib/controller');
const loanModel  = require('./loan-facade');


class LoanController extends Controller {}

module.exports = new LoanController(loanModel);
