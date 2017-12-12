var express = require('express');
var app = express();

// this is my modules
var mathLib = require('./mathModule.js')

app.get('/', function (req, res) {

  res.send("This is a simple application");

});

app.get('/calculation/:num1/:num2/:operation', function (req, res) {

 	if(req.params.operation=='add'){
 		var result = mathLib.add(Number(req.params.num1),Number(req.params.num2));
 		res.send(result);
 	}
 	else if (req.params.operation == 'subtract'){

 		res.send(mathLib.subtract(Number(req.params.num1),Number(req.params.num2)));

 	}
 	else{

 		res.send("invalid operation")
 	}

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});