'use strict'; 

var express = require('express'); 
var app = express();
var server = require('http').createServer(app); 
var io = require('socket.io').listen(server); 

var subSocket = require('./lib/subscribe'); 
var images = require('./models/images')

server.listen(process.env.PORT || 3000, function(){
    console.log("server is running on port %d", 3000);
});

/**
 * Serve static assets out of public 
 */
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendfile('./public/index.html'); 
});


io.sockets.on('connection', function(socket){
    images.get(function(err, data){
        if(err) return;
        data.forEach(function(image){
            socket.emit('image', image); 
        });
    });
});

subSocket.on('message', function(message){
    io.sockets.emit('image', message); 
})