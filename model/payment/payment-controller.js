const Controller = require('../../lib/controller');
const paymentModel  = require('./payment-facade');


class PaymentController extends Controller {
  function pay(req, res, next) {

  }
  
}

module.exports = new PaymentController(paymentModel);
