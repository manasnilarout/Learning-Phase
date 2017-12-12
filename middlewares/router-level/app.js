var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));

// including my custom middleware file here 
var middleWares = require('./myMiddlewares');

//////////////////////////////// start of routes ////////////////////////////

app.get('/normal/route',function(request,response){
	
	var dateOfBirth = new Date(request.query.dob);
	response.send("this is a normal routes accessible to everyone and date of birth is "+dateOfBirth);


});// end normal route


app.get('/restricted/route',middleWares.ageFilter,function(request,response){

	console.log("code in route will be executed now");
	var dateOfBirth = new Date(request.query.dob);

	response.send("I am "+request.age+" years old and I can use this route");


});// end normal route


///////////////////////////// end of routes //////////////////////////////

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});