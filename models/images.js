'use strict'; 

var request = require('request'); 
/**
 * Get badges from the pub/sub server
 * @param {Function} callback
 */

 exports.get = function(callback){
     request('https://calhack-pubsub-test.azurewebsites.net/images', function(err, response, body){
         callback(err, JSON.parse(body));
     });
 }