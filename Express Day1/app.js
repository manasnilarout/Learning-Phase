var express = require('express');
var app = express();

var users = require('./users.json')

app.get('/', function (req, res) {

  res.send(users);

});

// request parameter 
app.get('/users/:userName', function (req, res) {
	console.log(req.params.userName);
	var foundUser = 'No User Found';

	for (u in users){
		if (users[u].userName == req.params.userName)
			foundUser = users[u]


	}
	
	console.log(foundUser);
  	res.send(foundUser);
});

// query parameter

app.get('/users/find', function (req, res) {

	console.log(req.query.userName);
	var foundUser = 'No User Found';

	for (u in users){
		if (users[u].userName == req.query.userName)
			foundUser = users[u]


	}
	
	console.log(foundUser);
  	res.send(foundUser);
	
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});