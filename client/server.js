// Dependencies
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');var app = express();
var server = http.Server(app);
var io = socketIO(server);app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));// Routing
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'map.html'));
});// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});

io.on('connection', function(socket){

});
