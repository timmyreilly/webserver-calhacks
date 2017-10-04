'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

socket.connect("https://calhack-pubsub-test.azurewebsites.net:443"); 

socket.on('error', function(err){
    throw err;
});

module.exports = socket; 