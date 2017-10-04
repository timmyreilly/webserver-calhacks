'use strict';
require("dotenv").config();

var request = require('request');

const URL = 'https://calhack-pubsub-test.azurewebsites.net/images';  

// const URL = 'http://localhost:8000/images' 
/** 
 * Get badges from the pub/sub server
 * @param {Function} callbacks
 */

exports.get = function (callback) {
    request(URL, function (err, response, body) {
        callback(err, JSON.parse(body));
    });
}