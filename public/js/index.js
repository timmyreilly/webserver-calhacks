'use strict';

$(function () {
    var socket = io.connect();

    socket.on('image', function (image) {

        var phoneNumber = image.phoneNumber || "555-867-5309";
        var caption = image.caption || "no caption";
        var imageURL = image.imageURL || "https://i.imgur.com/KVa2yxB.png"

        var galleryItem = $([
            '<div class="gallery__item">',
            '   <div class="gallery__container">',
            '       <img class="gallery__image" src="' + imageURL  + '">',
            '       <h2 class="gallery__content">From: ' + phoneNumber + '</h2>', 
            '       <p class="gallery__content">' + caption + '</p>', 
            '   </div>',
            '</div>'
        ].join("\n")); 

        $('.gallery').prepend(galleryItem); 

        setTimeout(function(){
            $(".gallery__image").addClass('on'); 
        }, 0); 
    });
});