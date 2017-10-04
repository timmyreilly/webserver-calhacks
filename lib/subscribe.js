'use strict';
require("dotenv").config();
var axon = require('axon');
var socket = axon.socket('sub');

//const URL = process.env.SOCKET_CONNECT_URL || 'tcp://https://calhack-pubsub-test.azurewebsites.net:8001';  

// For Deployment: tcp://calhack-pubsub-test.azurewebsites.net:443
socket.connect(10001, '13.65.90.83'); 

// "http://localhost:443 for local work"
// socket.connect('http://localhost:10001'); 

socket.on('error', function(err){
    throw err;
});

module.exports = socket; 