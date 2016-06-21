var express = require('express'); 
var path = require('path'); 
var bodyParser = require('body-parser');
var app = express();

var routes = require('./routes/index');

// view engine setup 
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs');

// body-parser for url encoded form data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


app.listen(3000, function(){     
	console.log('listening on port 3000') 
})