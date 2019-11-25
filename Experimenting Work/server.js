// Dependencies
var express = require('express'); //These set up dependencies and routing for using express with nodejs
var app = express();
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5000); //sets the port
//These set which files the server needs to be able to access, e.g. media for the game images
app.use('/public', express.static(__dirname + '/public'));
app.use('/Media', express.static(__dirname + '/Media'));
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'gamemap.html'));
});

// Starts the server on the port 5000
server.listen(5000, function() { 
  console.log('Starting server on port 5000'); //Essentially a print statement to show that the server has started correctly from the terminal
});

var players = {}; //sets up the players array
io.on('connection', function(socket) { //communiates the following data to the index.js file so a server side implementation can happen
  socket.on('new player', function() {
    players[socket.id] = {
      x: 300,
      y: 300
    };
  });

  socket.on('movement', function(data) { //movement function so that users can communicate with the game
    var player = players[socket.id] || {};
    if (data.left) {
      player.x -= 5;
    }
    if (data.up) {
      player.y -= 5;
    }
    if (data.right) {
      player.x += 5;
    }
    if (data.down) {
      player.y += 5;
    }
  });
});

setInterval(function() { //sends the data to the index f
  io.sockets.emit('state', players);
}, 1000 / 60);
