var express = require('express'); 
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var quotes = ["You are inspired when you find inspiration", "If you seek inspiration, look for it", "I am always inspired by inspirational quotes"];

app.use(express.static( __dirname + '/public'));

app.get('/', function(req, res) {  
	res.render('home'); 
}); 
app.get('/about', function(req,res){     
	res.render('about'); 
}); 
app.get('/inspiration', function (req, res) {
	var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
	res.render('inspiration', { inspirational: randomQuote });
  
});
app.listen(3000, function () {   
	console.log('Inspiration app listening on port 3000!'); 
});
