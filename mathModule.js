
// declaring a module
var exports = module.exports = {};

exports.add = function(num1,num2){
	console.log(num1+num2);
	return String(num1+num2);
}// end add

exports.subtract = function(num1,num2){
	console.log(num2-num1);
	return String(num2-num1);
}// end subtract

exports.multiply = function(num1,num2){
	console.log(num1*num2);
	return String(num1*num2);
}// end multiply

exports.division= function(num1,num2){
	console.log(num2/num1);
	return String(num2/num1);
}


