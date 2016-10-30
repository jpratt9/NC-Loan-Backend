const Controller = require('../../lib/controller');
const userModel  = require('./user-facade');
const request = require('superagent');
const secrets = require('../../secrets');
// "secrets.var"
const utils = require('../../utils/utils');

class UserController extends Controller {

  // put:
  //  - DO NOT change: customer_id, first_name, last_name
  //  - DO change: email, loans, rating, avatar_url,
  //    offers, requests, status
  put(req, res, next) {
    var user = User.findOne({"customer_id" : req.customer_id});
    if (user == null)
    var body = req.body;
    if (utils.hasIt(body, 'email')) {
      user.email = body.email;
    }

    if (req.hasOwnProperty('loan')) {
      user.loans.push(req.loan);
    }

    if (req.hasOwnProperty('rating')) {
      if (req.rating > 5 || req.rating < 0) {
        res.json({error : "Rating must be within range 0 to 5 (inclusive)."})
      }
      user.rating = (user.num_ratings * user.rating + req.rating) / (user.num_ratings + 1);
      user.num_ratings++;
    }

    if (req.hasOwnProperty('avatar_url')) {
      user.avatar_url = req.avatar_url;
    }

    if (req.hasOwnProperty('offer')) {
      user.offers.push(req.offer);
    }

    /*if (req.hasOwnProperty('request')) {
      user.requests.push(req.request);
    }*/

    if (req.hasOwnProperty('status')) {
      // check that status is valid
      var statuses = User.schema.path('status').enumValues;
      if (statuses.includes(req.status)) {
          user.status = req.status;
      } else {
        res.json({error : "Invalid status code - " + req.status + "."})
      }
    }
  }

  // get:
  //  - GET: first_name, last_name, offers, requests,
  //    rating, avatar_url

}

module.exports = new UserController(userModel);
