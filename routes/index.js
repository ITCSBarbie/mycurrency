var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: "Karena" });
});
router.get('/about', function(req, res, next) {
    res.render('about', { name: 'awesome site!' });
    });
/* GET convert page */
router.get('/convert', function(req, res, next){


    var query = req.query;

});

module.exports = router;
