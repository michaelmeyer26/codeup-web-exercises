"use strict";

$(document).ready(function() {
    $( 'h1' ).click(function() {
        $(this).css("background-color", "red");
        $(this).css("color", "white");
    });

    $( 'p' ).dblclick(function() {
       $(this).css("font-size", "18px");
    });
});

