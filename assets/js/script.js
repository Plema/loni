$(document).ready(function(){

    var footer_height = $('.footer').height();

    $('body').css({
        'padding-bottom': footer_height
    });

    var header_height = $('.header').height();

    $('body').css({
        'padding-top': header_height
    });

    $('.open-menu').on('click', function(){
        $('.mobile-menu').addClass('active');
    });

    $('.close').on('click', function(){
        $('.mobile-menu').removeClass('active');
    });

});

$(window).resize(function(){

    var footer_height = $('.footer').height();

    $('body').css({
        'padding-bottom': footer_height
    });

    var header_height = $('.header').height();

    $('body').css({
        'padding-top': header_height
    });

});

$(window).scroll(function(){

    $('.mobile-menu').removeClass('active');

});