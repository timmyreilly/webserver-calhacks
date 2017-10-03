'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

socket.connect("http://localhost:8001"); 

socket.on('error', function(err){
    throw err;
});

module.exports = socket; 