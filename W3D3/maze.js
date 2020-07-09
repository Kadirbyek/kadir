$(document).ready(function () {
    "use strict"

    let status = null;
    // let $boundary = $('.boundary');  .boundary is a class
    $("div.boundary").mouseover(function () {
        // alert('You just moved your mouse over the #someId element!');
        $("div.boundary").css("background-color","red");
        lost();
    });

    $('#end').mousover(function () {
        // if (status === 'start') {
        $('#status').text(' you win. :[');
        // status='end';
        // }
    });

    $('#start').click(function(){
        $(".boundary").trigger('mouseover');
        reset();
    });

    // $("#start").mousover(function () {
    //             status='start';
    //      });

    function reset(){
        status = 'start';
        $('#status').text('Click the "S" to begin.')
        $(".boundary").removeClass('youlose');
    }

    function lost(){
        $('#status').text('Sorry, you lost. :[');
        $('.boundary').addClass('youlose');
        status = 'lost';
    };

});
