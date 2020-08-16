var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/en', function (req, res, next) {
  res.render('eng-index');
});

module.exports = router;
