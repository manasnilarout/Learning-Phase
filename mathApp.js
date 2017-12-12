function add (num1,num2){
	console.log(num1+num2);
	return num1+num2;
}// end add

function subtract(num1,num2){
	console.log(num2-num1);
	return num2-num1;
}// end subtract

function multiply(num1,num2){
	console.log(num1*num2);
	return num1*num2;
}// end multiply

function division(num1,num2){
	console.log(num2/num1);
	return num2/num1;
}

var performCalculation = function(num1,num2,callback){

	callback(num1,num2);

}// end performCalculation

performCalculation(2,2,add);