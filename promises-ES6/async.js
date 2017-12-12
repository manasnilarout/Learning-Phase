var express = require('express');
var postRouter = express.Router();
var mongoose = require('mongoose');
var postModel = mongoose.model('Post');
var bodyParser = require('body-parser'); 


var async = require("async");


module.exports.controllerFunction= function(app){

				

	//route to comment on a post
	postRouter.post('/:id/comment' , function( req ,res){
		
		var functionToStoreCommentInDatabase = function(callback){
				// write the programming logic here 
				//In case of error, return callback(err,null);
				//else return callback(null,result) and it will pass on the result to next function 
				callback(null,commentData,secondParameter)

		}// end here 

		var functionToCreateNotificationForPostUser = function(commentData,callback){
				// write the programming logic here 
				//In case of error, return callback(err,null);
				//else return callback(null,result) and it will pass on the result to next function 
				callback(null,commentData)


		}

		var functionToFindOtherPeopleWhoCommented = function(commentData,callback){
			// this function will result into an array of users. 
			callback(null,commentData,usersForNotification)

		}

		var functionToSendNotificationToOthers = function(commentData,usersForNotification,callback){

			var functionToSendNotification = function(oneUser,cb){
				// write logic to send notifications to people
				cb(null,oneUser)

			}

			var usersForNotification = [{'userName':'Aditya',fullName:'Aditya Kumar'},{'userName':'Aditya',fullName:'Aditya Kumar'},{'userName':'Aditya',fullName:'Aditya Kumar'}]
			async.map(usersForNotification,functionToSendNotification,function(err,result){

				if(err){
					callback(err,null);
				}
				else{
					callback(null,result)
				}

			});// end map

		}

		async.waterfall([
			
			functionToStoreCommentInDatabase,
			functionToCreateNotificationForPostUser,
			functionToFindOtherPeopleWhoCommented,
			functionToSendNotificationToOthers

			],function(err,result){
			if(err){
				console.log(err);
				res.send(err)
			}
			else{

				res.send(result)
			}


		});
		

	});
	//end comment on a post

	






	app.use('/post', postRouter);
 
}
