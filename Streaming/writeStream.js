var http = require('http');
var fs = require('fs');

//first create a read stream 
var readerStream = fs.createReadStream(/*you should put the file that is to be read*/);

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

//create an empty data variable
var data='';

// Create a writable stream
var writerStream = fs.createWriteStream(/*write the destination file name where data should be written*/);

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});


// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
   console.log(chunk.length);
});

readerStream.on('end',function(){
   console.log("all data read");
   // Write the data to stream with encoding to be utf8
   writerStream.write(data,'UTF8');
   // Mark the end of file
    writerStream.end();
   console.log(data.length);
});

readerStream.on('error', function(err){
   console.log("some error occured");
   console.log(err.stack);
});