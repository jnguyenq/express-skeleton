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
app.set('view engine', 'html');
app.engine('html', hbs.__express);

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Serve static files
app.use(express.static(__dirname + '/public'));

//Routes
app.use(routes);

//Server
app.listen(port, function() {
	console.log('Listening on port ' + port);
});

