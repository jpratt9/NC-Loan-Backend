const Router = require('express').Router;
const router = new Router();

const user  = require('./model/user/user-router');
const loan  = require('./model/loan/loan-router');
const loanOffer  = require('./model/loan-offer/loan-offer-router');
const loanRequest  = require('./model/loan-request/loan-request-router');
const bankAccount  = require('./model/bank-account/bank-account-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to nc-loan API!' });
});

router.use('/user', user);
router.use('/loan', loan);
router.use('/loan-offer', loanOffer);
router.use('/loan-request', loanRequest);
router.use('/bank-account', bankAccount);


module.exports = router;
