'use strict';

$(function () {
    var socket = io.connect();

    socket.on('image', function (image) {

        var phoneNumber = image.phoneNumber || "555-867-5309";
        var caption = image.caption || "no caption";
        var imageURL = image.imageURL || "https://i.imgur.com/KVa2yxB.png"

        var post = $([
            '<div class="post-container">',
            '   <img class="image-wrapper" src="' + image.imageURL + '">',
            '   <h1>From: ' + phoneNumber + '</h1>',            
            '   <p>' + caption + '</p>',
            '</div>'

        ].join("\n"));

        $('.posts').prepend(post);

        // setTimeout(function () {
        //     post.addClass('on');
        // }, 0);

        setTimeout(function(){
            $(".image-wrapper").addClass('on'); 
        }, 0); 
    });
});