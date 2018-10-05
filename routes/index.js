const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

const Product = require('../models/product');

const csrfProtection = csrf();
router.use(csrfProtection); //post

router.get('/', function(req, res, next) {

  Product.find(function(err, docs) {
      res.render('shop/index', { 
        title: 'Shopping Card', 
        products: docs 
      });
  })

});

router.get('/user/signup', function(req, res) {
  res.render('user/signup', {csrfToken: req.csrfToken()});
})

router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

router.get('/user/profile', function(req, res, next) {
  res.render('user/profile');
});

module.exports = router;
