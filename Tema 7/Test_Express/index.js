var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('chat message', function (msg, username) {
    io.emit('chat message', msg, username);
  });
  socket.on('escribiendo', function (username) {
    socket.broadcast.emit('escribiendo',username);
  });
  socket.on('sin escribir', function (e) {
    io.emit('sin escribir');
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});