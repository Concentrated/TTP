var express = require('express');
var db = require('../queries');

var router = express.Router();

router.get('/',function(req,res){     
	res.render('todo');
})

router.get('/todo', db.getTodos);
router.post('/todo', db.addTodo);

module.exports = router;