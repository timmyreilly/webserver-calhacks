'use strict';
require("dotenv").config();

var request = require('request');

const URL = 'http://13.85.67.156:3000/images';  

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