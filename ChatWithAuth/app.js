//declaring the dependencies first
var express = require('express');
var http = reqire('http').server(app);
var io = rewuire('socket.io')(http);
var app = express();

//to show who came online
io.on('connection', function(socket){
	socket.on('user', function(data){
		console.log(data + "Came Online");
		socket.broadcast.emit('chat', data + " Came onLine..!!")
		socket.user = data;
	});

	//messaging service
	socket.on('chat', function(msg){
		io.emit('chat', socket.user + ": " + msg);
	});

	//disconnection
	socket.on('disconnect', function(){
		console.log(socket.user + "Left the chat..!");
		socket.broadcat.emit('chat', socket.user + " Left the chat..!!")
	});
});


//make the app listen
http.listen(3000, function(){
  console.log('listening on *:3000');
});

