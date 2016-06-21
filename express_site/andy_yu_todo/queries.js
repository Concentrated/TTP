var promise = require('bluebird');

var options = {
	promiseLib: promise
};

var pgp = require('pg-promise')(options);

var connectionString = 'postgres://andy:soluq123@localhost:5432/mydb';

var db = pgp(connectionString);

function getTodos(req, res, next) {

	db.any("SELECT * FROM todo").then(function(data) {
		res.render("todo", {todo: data});
	})
}
function addTodo(req, res, next) {
	var input = req.body;

	db.none("INSERT INTO todo (descrip) VALUES(${todo})", input).then(function(data) {
		console.log("New todo added");
		res.redirect("/todo");
	}).catch(function(err) {
		return next(err);
	})
}

module.exports = {
	getTodos: getTodos,
	addTodo: addTodo
};