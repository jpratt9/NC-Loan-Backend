const Router = require('express').Router;
const router = new Router();
const passport = require('passport');

router.route('/register')
    .post(function(req, res) {
        User.register(new User({
            username: req.body.username
        }), req.body.password, function(err, user) {
            if (err) {
                return res.render("register", {
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
