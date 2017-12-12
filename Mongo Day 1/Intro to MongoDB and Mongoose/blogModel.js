
// defining a mongoose schema 
// including the module
var mongoose = require('mongoose');
// declare schema object.
var Schema = mongoose.Schema;

var blogSchema = new Schema({

	title 		: {type:String,default:'',required:true},
	subTitle 	: {type:String,default:''},
	blogBody 	: {type:String,default:''},
	tags		: [],// name of tags in array
	created		: {type:Date},
	lastModified : {type:Date},
	authorInfo  :  {} // information of author in form of object
	

});


mongoose.model('Blog',blogSchema);