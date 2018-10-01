var express = require('express');
var socket = require('socket.io');

/*var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/databass';
MongoClient.connect(url, function(err, db){
    if(err){
        throw err;
    }

    console.log("Databass initiated.");
    //db.close();
});
*/
//Setting up the app
var app = express();
var server = app.listen(4200, function(){
    console.log('Listening on 4200.');
});

//Static files
app.use(express.static('public'));

//Setting up the socket
var io = socket(server);

io.on('connection', function(socket){
    console.log('Socket is also listening.', socket.id);

    socket.on('chat', function(data){
        io.emit('chat', data);
    });
});
