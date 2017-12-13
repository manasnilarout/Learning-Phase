//declariing the required modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var nodemailer = reuire('nodemailer');

//giving the instance
var app = express();

//app level middleware
app.use(bodyParser.json(
{limit: '10mb', extended: true}
));
app.use(bodyParser.urlencoded(
{limit: '10mb', extended: true}
));

//defining or pointing the database path/url to be connected with
//we'll declare a localhost dbpath as we are hosting the server in one system only
var dbpath = "mongodb://localhost/mailerTest";
db = mongoose.connect(dbpath);
mongoose.connection.once('open', function(){
	//tell the console that connection is succesfull..!!
	console.log("The connection to the database has been setup succesfully.. :)");

});


