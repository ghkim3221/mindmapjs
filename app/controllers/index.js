const express = require('express');
const router = express.Router();

const auth = require('./auth');
const dashboard = require('./dashboard');

router.use('/auth', auth);

router.use(function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/auth/signin');
    }
});

router.use('/dashboard', dashboard);

router.use(function (req, res) {
    res.redirect('/dashboard');
});

module.exports = router;