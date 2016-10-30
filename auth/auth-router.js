const Router = require('express').Router;
const router = new Router();
const passport = require('passport');
const User = require('../model/user/user-schema')
const jwt = require('jwt-simple');
const secrets = require('../secrets');

router.route('/register')
    .post(function (req, res) {
        User.register(new User(
            req.body
        ), req.body.password, function (err, user) {
            if (err) {
                console.log(err);
                return res.json({
                    error: err.message
                });
            }

            passport.authenticate('local')(req, res, function () {
                console.log(req.user);
                return res.json({
                    token: jwt.encode({username: req.user.username, _id: req.user._id}, secrets.secret_token),
                    username: req.user.username,
                    _id: req.user._id
                });
            });
        });
    });

router.route('/login')
    .post(passport.authenticate('local'), function (req, res) {
        console.log(req.user);
        return res.json({
            token: jwt.encode({username: req.user.username, _id: req.user._id}, secrets.secret_token),
            username: req.user.username,
            _id: req.user._id
        });
    });

router.route('/logout')
    .post(function (req, res) {
        req.logout();
        res.redirect('/');
    });

module.exports = router;
