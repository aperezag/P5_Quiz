var express = require('express');
var router = express.Router();
const {models} = require('./index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*GET credits*/
router.get('/credits', function(req, res, next) {
	res.render('credits',{
		autor: 'Alejandro Pérez',
	})
	});
/*GET quizzes*/
router.get('/quizzes', function(req, res, next){
	models.quizzes.findAll()
	.then(quizzes => {
			res.render('views/credits.ejs', {quizzes});
	})

});
module.exports = router;
