const Router = require('express').Router;
const router = new Router();

const user  = require('./model/user/user-router');
const payment  = require('./model/payment/payment-router');
const loanOffer  = require('./model/loan-offer/loan-offer-router');
const loan  = require('./model/loan/loan-router');
const bankAccount  = require('./model/bank-account/bank-account-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to nc-loan-backend API!' });
});

router.use('/user', user);
router.use('/payment', payment);
router.use('/loan-offer', loanOffer);
router.use('/loan', loan);
router.use('/bank-account', bankAccount);


module.exports = router;
