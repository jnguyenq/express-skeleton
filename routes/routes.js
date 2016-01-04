var express = require('express');
var router = express.Router();
var exphbs = require('express-handlebars');
var hbs = require('hbs');
var app = express();

var home = require('../controllers/home');

//Home
router.get('/', function(req, res, next) {
	home(req, res);
});

module.exports = router;