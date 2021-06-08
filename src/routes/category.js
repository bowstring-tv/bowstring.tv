var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/categoryController');

/* GET category page */
router.get('/', categoryController.root);

/* GET category/commercials page */
router.get('/commercials', categoryController.commercials);

module.exports = router;