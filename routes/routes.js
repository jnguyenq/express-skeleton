var express = require('express');
var router = express.Router();
var exphbs = require('express-handlebars');
var hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/../views/partials');
app.engine('handlebars', exphbs({ defaultLayout: 'demo' }));

module.exports = router;