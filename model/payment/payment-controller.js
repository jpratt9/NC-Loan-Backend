const Controller = require('../../lib/controller');
const paymentModel  = require('./payment-facade');


class PaymentController extends Controller {}

module.exports = new PaymentController(paymentModel);
