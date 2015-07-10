var requests = require('../server/controllers/requests.js');

module.exports = function(app){
	app.get('/requests', function(req,res){
		console.log('Im in server request controller');
		requests.show(req,res)
	})
	app.post('/add', function(req,res){
		console.log('add routes');
		requests.add(req,res);
	})
};