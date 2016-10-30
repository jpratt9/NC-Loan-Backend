const controller = require('./payment-controller');
const Router = require('express').Router;
const router = new Router();
const passport = require('passport');

router.route('/')
  .post(passport.authenticate('bearer', { session: false }), (...args) => controller.pay(...args));

router.route('/:id')
  .put(passport.authenticate('bearer', { session: false }), (...args) => controller.update(...args))
  .get(passport.authenticate('bearer', { session: false }), (...args) => controller.findById(...args));

module.exports = router;
