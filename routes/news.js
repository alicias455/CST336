var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('news/index', {
    title: 'All the News!'
  });
});

module.exports = router;
