var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(window.location.hash){
    if(window.location.hash === "#en"){

    }
  }
  res.render('index', { greeting: "Hello!" });
});

module.exports = router;
