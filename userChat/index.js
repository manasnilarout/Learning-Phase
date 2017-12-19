var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});




io.on('connection', function(socket){
//socket.broadcast.emit('chat message', 'A new user has just joined the chat');

  socket.on('user',function(data){
    console.log(data+ "came online");
    socket.broadcast.emit('chat message', data+" came online");
    // you can allocate variables in socket.
    socket.user = data;


  });

  socket.on('chat message', function(msg){
    io.emit('chat message', socket.user+' : '+msg);

  });

  socket.on('disconnect',function(){
  	 
  	 console.log("some user left the chat");
     socket.broadcast.emit('chat message', socket.user+" left the chat");
  	  


  }); //end socket disconnected


});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
