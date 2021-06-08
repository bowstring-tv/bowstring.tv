var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.root);

/* GET about page. */
router.get('/about', mainController.about);

/* GET team page. */
router.get('/team', mainController.team);

/* GET studio page. */
router.get('/studio', mainController.studio);

/* GET careers page. */
router.get('/careers', mainController.careers);

/* GET contact page. */
router.get('/contact', mainController.contact);



module.exports = router;
