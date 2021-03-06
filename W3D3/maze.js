"use strict";
$(document).ready(function(){
    var start =  $("#start");
    var end = $("#end");
    var maze = $("#maze");
    var boundary = $(".boundary");
    let gameStart = false;
    maze.mouseleave(function(){ loss() });

    start.click(function(){
        $("#status").text('Move mouse to End in order to win the game');
        gameStart = true;
        if(boundary.hasClass('youlose')){
            boundary.removeClass('youlose');
        }
        boundary.mousemove(function(){ loss(); })
    });

    end.mousemove(function(){
        if(gameStart == true) {
            alert("You won!");
            gameStart = false;
            $("#status").text("You won the game! Congratulation!");
        } else if(gameStart && boundary.hasClass('youlose'))  loss();

    });

    function loss(){
        if(gameStart){
            gameStart = false;
            boundary.addClass('youlose');
            $("#status").text('You lose the game');
        }
    }


})