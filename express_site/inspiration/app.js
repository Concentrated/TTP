var express = require('express'); 
var exphbs  = require('express-handlebars');

var app = express();

var quotes = ["You are inspired when you find inspiration", "If you seek inspiration, look for it", "I am always inspired by inspirational quotes"];

var numbers = ["One", "Two", "Three"];
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static( __dirname + '/public'));
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', function(req, res) { 
	var randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
	res.render('home', { number: randomNumber });
}); 

app.get('/about', function(req,res){     
	res.render('about'); 
}); 	

app.get('/inspiration', function(req,res){     
	var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
	res.render('inspiration', { inspirational: randomQuote });
});
app.post('/login', function(req, res) {
	console.log("Username: " + req.body.username);
	console.log("Password: " + req.body.password);
	res.redirect('/');
});
app.listen(3000, function () {   
	console.log('Inspiration app listening on port 3000!'); 
});
