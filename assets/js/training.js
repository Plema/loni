$(document).ready(function(){
    
    $('.training-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
        ]
    });

    if($(window).width() >= 1280){

        $('.training-slider').slick('unslick');
  
        $('.training-slider .text p').matchHeight({
            byRow: true
        });

    }

    $('.training-slider .text p').matchHeight({
        byRow: true
    });

});