var express = require('express');
var router = express.Router();

/* GET terms page. */
router.get('/terms', function(req, res, next) {
  res.render('terms', { title: 'Express' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
