// Write an API to comment on a post 

// The API performs the following functionalities
// 1. Stores the comment in database 
// 2.Create a notification for the user who created the original post and send him the notification
// 3. Function to find all other people who commented on the post and then send them the notification
// 4. Add the current commented to the list of subscriber of the post. 



module.exports.controllerFunction= function(app){

				

	//route to comment on a post
	postRouter.post('/:id/comment' , function( req ,res){
		
		commentModel.save(function(err,result){

				if(err){
					//send error response. 
				}
				else{
					// now comment save is successfull, lets create a notification 
					//some code to create a notification 
					newNotification.save(function(err,result){

						if(err){
							//send error response
						}
						else{

							//notification has been saved 
							// code to sent the notification to the user 
							// code to find the people who also commented on the post
							 postModel.findOne({'_id':req.params.id},function(err,foundPost){
							 	if(err){
							 		//send error response 

							 	}
							 	else{
							 		
							 		//function to generate notification for this post subscribers. 

							 		//.... and continued
							 		///.. AND CONTINUES TILL THE BOTTOM. 

							 	}


							 })
						}	


					})

				}


		});// end comment model 


	});
	//end comment on a post

	






	app.use('/post', postRouter);
 
}



