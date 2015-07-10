var mongoose = require('mongoose');

var RequestSchema = new mongoose.Schema({
	name:String,
	artist_name:String,
	song_name:String,
	created_at:Date
});

mongoose.model('Request', RequestSchema);