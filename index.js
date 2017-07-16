var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var userID = 0;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  ++userID;

  console.log('User #' + userID + ' has connected.');

  socket.on('chat message', function (msg) {
    console.log('User #' + userID + ': ' + msg);
  });

  socket.on('chat message', function (msg) {
    io.emit('User #' + userID + ': ', msg);
  });
});

http.listen(1738, function () {
  console.log('listening on *:1738');
});
