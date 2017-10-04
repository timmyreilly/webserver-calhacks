'use strict';
require("dotenv").config();
var axon = require('axon');
var socket = axon.socket('sub');

const URL = 'tcp://http://calhack-pubsub-test.azurewebsites.net:8001'; 
//const URL = process.env.SOCKET_CONNECT_URL || 'tcp://https://calhack-pubsub-test.azurewebsites.net:8001';  

console.log(URL); 
// "http://localhost:8001 for local work"
socket.connect('tcp://calhack-pubsub-test.azurewebsites.net:443'); 

socket.on('error', function(err){
    throw err;
});

module.exports = socket; 