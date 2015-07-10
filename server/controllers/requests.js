var mongoose = require('mongoose');
var Request = mongoose.model('Request');

module.exports = (function (){
	return{
		show: function(req,res){
			Request.find({}, function (err, results){
				if(err){
					console.log(err, 'error in show requests controller')
				}else{
					res.json(results);
					console.log(results);
				}
			})
		},
		add: function(req,res){
			console.log('here in server controller for customer add');
			var request = new Request({name: req.body.name, artist_name: req.body.artist_name, song_name: req.body.song_name, created_at: new Date()});
			request.save(function(err){
				if(err){
					console.log("please don't see me");
				}else{
					console.log("made it");
					res.json({'success' : 'true'});
				}
			})
		}
	}
})();