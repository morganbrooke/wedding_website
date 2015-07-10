wedding_app.factory('requestFactory', function($http, $location){
	var requests = [];
	var factory = {};
	console.log('in user request factory');

	factory.getRequests = function(callback){
		console.log('in factory get requests');
		$http.get('/requests').success(function(output){
			callback(output);
		})
	}
	factory.addRequests = function(info, callback){
		$http.post('/add', info).success(function(){
			console.log("morgan");
			callback();
		})
	}
	return factory;
});