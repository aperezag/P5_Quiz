var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const {models} = require('../models');

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
	models.quiz.findAll()
	.then(quizzes => {
			res.render('quizzes', {quizzes});
	})
	.catch(error => next(error));
});
module.exports = router;
