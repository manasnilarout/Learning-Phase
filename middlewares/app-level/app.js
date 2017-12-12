var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));

// application level middleware

app.use(function (req, res, next) {
  
  console.log('Time of request:', Date.now());
  console.log("request url is ",req.originalUrl);
  console.log("request ip address is",req.ip)
  
  // store some global variable object in request object
  
  req.someGuy = {name:'someGuy',email:'some email'};

  next();
});

// end application level middleware


// error handling middleware 

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// end error handling middleware

var middleWares = require('./myMiddlewares');

//////////////////////////////// start of routes ////////////////////////////

app.get('/normal/route',function(request,response){
	var dateOfBirth = new Date(request.query.dob);
  console.log(request.someGuy.name + " made this request");
	response.send("this is a normal routes accessible to everyone and date of birth is "+dateOfBirth);


});// end normal route

app.get('/restricted/route',middleWares.ageFilter,function(request,response){

	var dateOfBirth = new Date(request.query.dob);

	response.send("this is a restricted routes accessible to people above 18 and date of birth is "+dateOfBirth);


});// end normal route


///////////////////////////// end of routes //////////////////////////////

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});