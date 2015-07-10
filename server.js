var express = require('express')
var app = express()
var server = app.listen(8000, function(){
	console.log('mojo wedding site connected');
})
var path = require('path');
// Sockets
// io = require('socket.io').listen(server)

// Body Parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

// Session
var session = require('express-session')
app.use(session({
  secret: 'encryption key',
  resave: false,
  saveUninitialized: true
}))

app.use(express.static(__dirname + '/client'))

// Mongoose
require('./config/mongoose.js');
require('./config/routes.js')(app);
// SQL
// require('./server/config/sql.js');
// HTTP Routes`	
// require('./server/config/routes.js')(app);
// Socket Routes
// require('./server/config/socket.routes.js')(app);
