'use strict';
var express = require('express');
var router = express.Router();
var exphbs = require('express-handlebars');
var handlebars = require('handlebars');
var hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/../views/partials');
app.engine('handlebars', exphbs({ defaultLayout: 'demo' }));


hbs.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

module.exports = function (req, res) {
 
 
};