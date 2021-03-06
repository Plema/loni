$(document).ready(function(){
    
    $('.year li').on('click', function(){
        $('.year li').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.month li').on('click', function(){
        $('.month li').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.video').on('click', function(){
        var videoUrl = $(this).data('video');
        $('.video-popup iframe').attr('src', videoUrl);
        $('.video-popup').addClass('active');
    });

    $('.close').on('click', function(){
        $('.video-popup').removeClass('active');
        $('.video-popup iframe').attr('src', '');
    });

    $('.siteBar-slider').slick({
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-arrow-right"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-arrow-left"></i></button>',
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              vertical: false,
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1024,
            settings: {
              vertical: false,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              vertical: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

});