$(document).ready(function() {
 
  $("#slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow:
      '<button type="button" class="slick-next"> <i class= "fas fa-chevron-right" ></i> </button>',
    prevArrow:
      '<button type="button" class="slick-prev"> <i class= "fas fa-chevron-left" ></i> </button>',
    arrows: true
  });
});
