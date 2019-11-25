// Dependencies
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');var app = express();
var server = http.Server(app);
var io = socketIO(server);app.set('port', 5000);
app.use('/public', express.static(__dirname + '/public'));// Routing
//app.use(express.static('public'));
app.use('/Media', express.static(__dirname + '/Media'));
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'map.html'));
});// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});

io.on('connection', function(socket){

});
