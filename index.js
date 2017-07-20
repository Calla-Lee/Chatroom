const app   = require('express')();
const http  = require('http').Server(app);
const io    = require('socket.io')(http);
const users = require('./src/users.js');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  // Add the user to the channel
  let user = users.add(socket);

  console.log(`User #${user.id} has connected`);

  socket.on('chat message', function (msg) {
    console.log(`User #${user.id}: ${msg}`);
  });

  socket.on('chat message', function (msg) {
    io.emit(`User #${user.id}: ${msg}`);
  });
});

http.listen(1738, function () {
  console.log('listening on *:1738');
});
