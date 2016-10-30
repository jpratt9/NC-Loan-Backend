const Controller = require('../../lib/controller');
const userModel  = require('./user-facade');


class UserController extends Controller {
  // post
  //
}

module.exports = new UserController(userModel);
