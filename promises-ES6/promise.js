var express = require('express');
var postRouter = express.Router();
var mongoose = require('mongoose');
var postModel = mongoose.model('Post');
var bodyParser = require('body-parser'); 
var responseGenerator = require('./../../libs/responseGenerator');
var auth = require("./../../middlewares/auth");
var Promise = require('bluebird');


module.exports.controllerFunction= function(app){



	var functionToStoreCommentInDatabase = function(resolve,reject){
			// write the code here 
			return resolve(commentData);
			//return reject("The reason for rejection")

	}

	var functionToCreateNotificationForPostUser = function(resolve,reject){
			// write the code here 
			return resolve(commentData);


	}

	var functionToFindOtherPeopleWhoCommented = function(resolve,reject){
		// write the code here 
		return resolve(commentData);

	}

	var functionToSendNotificationToOthers = function(resolve,reject){
		// write the code here 
		return resolve(commentData);

	}

	
				

	//route to comment on a post
	postRouter.post('/:id/comment' , function( req ,res){
		
		functionToStoreCommentInDatabase
		.then(functionToCreateNotificationForPostUser)
		.then(functionToFindOtherPeopleWhoCommented)
		.then(functionToSendNotificationToOthers)
		.catch(function(err){
			//do something with error here 
		})
		.then(function(finalResult){

			//send the response here.

		})
		

	});
	//end comment on a post

	






	app.use('/post', postRouter);
 
}
