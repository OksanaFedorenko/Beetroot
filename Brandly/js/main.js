$(document).ready(function () {

  $('#slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });

  $('#slider2').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });

  $('#slider3').slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '<button type="button" class="slick-next"> <i class= "fas fa-chevron-right" ></i> </button>',
    prevArrow: '<button type="button" class="slick-prev"> <i class= "fas fa-chevron-left" ></i> </button>',
    arrows: true
  });

});