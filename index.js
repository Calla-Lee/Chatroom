var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var userID = 0;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('User #' + userID + ' has connected.');
  if(userID = 0){
    userID = 0;
  }else {
    userID++;
  }

  socket.on('chat message', function(msg){
    console.log('User #' + userID + ': ' + msg);
  });

  socket.on('chat message', function(msg){
    io.emit('User #' + userID + ': ', msg);
  });

});

http.listen(1738, function(){
  console.log('listening on *:1738');
});
