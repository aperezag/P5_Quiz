var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*GET credits*/
router.get('/credits', function(req, res, next) {
	res.render('credits',{
		autor: 'Alejandro Pérez',
		foto: images/autor.jpg
	})
	});

module.exports = router;
