var placeOrder = function(client){

	console.log("i am "+client+" and i want my order");
	

}// end placeorder 

var printNumbers = function(){
	var i=0;
	for(i=0;i<10;i++){
		console.log(i+1);
	}
}

// this function is sure to take more than 10 milliseconds to execute
var prepareOrder = function(){

	console.log("chef is preparing order and its gonna take some time");

	// set timeout is used to delay things by some milliseconds
	setTimeout(function(){
		console.log("order is prepared. It can be served");
	},10000);
	
	
}// end prepare order


// this is a non-blocking function
//for it to be non-blocking you have to put the difficult part 
// in callback function
var placeOrderCanWait = function(client,callbackFunction){

	console.log("i am "+client+" and i want my order but i can wait");
	callbackFunction();

}// end place order can wait


placeOrder("Aditya");

placeOrderCanWait("SomeGuy",prepareOrder)

placeOrder("Sidharth");



 