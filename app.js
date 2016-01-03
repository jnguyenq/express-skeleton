require('dotenv').load();
var express = require('express');
var app = express();
var fs = require('fs');
var router = express.Router();
var routes = require('./routes/routes');
var knex = reqiure('knex');
var exphbs = require('express-handlebars');
var port = 3000;

//Templating

//Body parser

//Serve static files

//Routes

//Server
app.listen(port, function() {
	console.log('Listening on port ' + port);
});

