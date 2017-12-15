//this concept usually makes the code more asynchronous

//headers added
var http = require('http')
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream(/*the file that needs to be read*/);

// Create a writable stream
var writerStream = fs.createWriteStream(/*the file where data is to be written*/);



// you can also create an event handler for pipe
//this one is triggered when writeStream is called
writerStream.on('pipe',function(source){
	console.log("piping is being done ");
	// you can also unpipe 

});// end on pipe

// Pipe the read and write operations
readerStream.pipe(writerStream);

readerStream.on('end',function(){
	console.log("end of read stream");
});

writerStream.on('finish',function(){
	console.log("end of writer stream");
});


console.log("end of program");