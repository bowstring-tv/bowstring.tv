var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bowstring' });
});
router.get('/landing', function(req, res, next){
  res.render('landing-page');
});

module.exports = router;
