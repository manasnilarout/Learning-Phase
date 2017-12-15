var http = require('http');
var fs = reqiure('fs');

//creating the read stream
var readSteam = fs.createReadStream(/*the file that needs to be read*/);

//you need to set the encoding type
readSteam.setEncoding('UTF8');//this is a kind of encoding method

//now create a empty data variable that will hold the reading data for meanwhile
var data = '';
//count variable to see how many chunks it has been devided into
var count = 0;


//handling the stream
//data error and end are must
readerStream.on('data', function(chunk){
	data += chunk;
	count++;
	//chunks are written to the data variable
	//..
	//to see the size of chunk
	console.log(chunk.length);
	//you can do other changes as per your need..
});

//end handler
readerStream.on('end', function(){
	console.log("Reading of data is finished");
	//you can console anything you want about chunks or data or count as per your need
});

//error handler
readSteam.on('error', function(err){
	console.log("Some kinda error occured.. :(");
	console.log(error.stack);
});

