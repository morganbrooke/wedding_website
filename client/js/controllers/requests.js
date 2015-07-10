wedding_app.controller('requestsController', function (requestFactory){
	console.log('in client request controller');

	var that = this;
	that.requests = [];
	this.searchSong = {};

	requestFactory.getRequests(function(data){
		that.requests = data;
	})

	this.addRequest = function(){
		console.log('clicked submit');
		requestFactory.addRequests(that.newRequest, function(){
			requestFactory.getRequests(function(data){
				that.requests = data;
				this.songRequest.reset();
				console.log(data);
			})
		})
	}
});