var express = require('express');


//always give instance to the app that you are creating
var app = express();

//include the event core module
var events = require('events');

//taking the eventemitter into account and xreating a new one
var eventEmitter = new events.EventEmitter();

//then you need to create a event listener that'd listen to the event once it is triggered
//it is done something like this
eventEmitter.on('WelcomeEmail',function(data){
	//here the code is written what needs to be done when the event is triggered
	console.log("The event has been triggered");
	console.log("Now here a dummy mail should be sent to "+data.email);

});

app.get('/event',function(req,res){
	//the route code need to placed here
	res.send("We are trying to create a user over here and let we have created a user and want to send the email");
	var user = {name: 'Manas Ranjan', email: 'manasnilarout@gmail.com'};
	
	//res.send("It should send the mail now");
	eventEmitter.emit('WelcomeEmail',user);
});

//let's make the app listen
app.listen(3000,function(){
	console.log("Started the app go to the route and see what happens");

});