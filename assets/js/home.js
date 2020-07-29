$(document).ready(function(){
    
    $('.banner-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
        ]
    });

    $('.banner-slider .text').matchHeight({
        byRow: false
    });

    $('.banner-slider .text p').matchHeight({
        byRow: false
    });

    $('.slider-listeners').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-left"></i></button>'
    });

    $('.command-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-left"></i></button>',
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
    });

    $('.partners-slider').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-left"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        }
      ]
    });

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

});