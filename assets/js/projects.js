$(document).ready(function(){

    $('.projects-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-left"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    if($(window).width() >= 1280){

      $('.projects-slider').slick('unslick');

    }

    $('.news-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-left"></i></button>',
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-left"></i></button>',
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-left"></i></button>',
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.projects-slider .text').matchHeight({
      byRow: true
    });

});



