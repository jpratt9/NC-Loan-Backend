const Controller = require('../../lib/controller');
const userModel  = require('./user-facade');


class UserController extends Controller {
  // post:
  //  - populate bank_accounts with accounts belonging to
  //    this customer_id
  //  - populate first_name and last_name with the ones associated
  //    with this user's customer_id

  // put:
  //  - DO NOT change: customer_id, first_name, last_name
  //  - DO change: email, loans, rating, avatar_url,
  //    offers, requests, rating, status

  // get:
  //  - GET: first_name, last_name, offers, requests,
  //    rating, avatar_url

}

module.exports = new UserController(userModel);
