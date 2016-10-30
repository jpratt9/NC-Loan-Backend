const Router = require('express').Router;
const router = new Router();
const passport = require('passport');
var User = require('../model/user/user-schema')

router.route('/register')
    .post(function(req, res) {
        User.register(new User(
          req.body
        ), req.body.password, function(err, user) {
            if (err) {
              console.log(err);
                return res.json({
                    info: "Sorry. That username already exists. Try again."
                });
            }

            passport.authenticate('local')(req, res, function() {
                res.redirect('/');
            });
        });
    });

router.route('/login')
    .post(passport.authenticate('local'), function(req, res) {
        res.redirect('/');
    });

router.route('/logout')
    .post(function(req, res) {
        req.logout();
        res.redirect('/');
    });

module.exports = router;
