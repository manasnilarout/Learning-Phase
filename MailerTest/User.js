var mongoose = require('mongoose');

//defining the schema
var Schema = mongoose.Schema;

//now creating the scgema
var user = new Schema({
	
	name: {type: String, default: '', required: true},
	email: {type: String, default: '', required:true}
});

mongoose.model('USER', userSchema);