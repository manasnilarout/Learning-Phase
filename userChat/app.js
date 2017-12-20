var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var app = express();
var bodyParser = require('body-parser');
var cookieParser = reqiure('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var logger = require('morgan');
var path  = require('path');

//implementing the passport module for login logout functionality
passport.use(new LocalStrategy(function(username, password, done){

	userModel.findOne({userName: userName}, function(err, User){
		if(err)
			return done(error);
		if(!User)
			return done(null, false);
		if(!User.verifyPassword(password))
			return done(null, false);
		return done(null, User);

	});
  };
));

//serializing and deserializing the user for session maintainance
passport.serializeUser(function(User, done){
	done(null, User.id);
});

passport.deserializeUser(function(id, done){
	userModel.findById(id, function(err, User){
		done(err, User);
	});
});

