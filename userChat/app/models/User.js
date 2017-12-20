var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//declaring the schema
var userSchema = new Schema({

	userName = {type: String, default: 'newUser', required: true},
	firstName = {type: String, default: ''},
	lastName = {type: String, default: ''},
	password = {type: String, default: ''} 
});

//exporting the user schema to be used in the main app
module.exports = mongoose.model('User', userSchema);
