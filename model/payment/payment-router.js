const controller = require('./payment-controller');
const Router = require('express').Router;
const router = new Router();

router.route('/')
  .get((...args) => controller.find(...args))
  .post((...args) => controller.pay(...args));

router.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args));

module.exports = router;
