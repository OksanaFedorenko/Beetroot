$(document).ready(function () {

 /* $('#slider1').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});*/
		

      $("#slider1").slick({
        dots: false,
        nextArrow:
          '<button type="button" class="slick-next"> <i class= "fa fa-chevron-right" ></i> </button>',
        prevArrow:
          '<button type="button" class="slick-prev"> <i class= "fa fa-chevron-left" ></i> </button>',
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          } // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

  $("#slider2").slick({
    //centerMode: true,
    centerPadding: "10px",
    //slidesToShow: 3,
    //slidesPerRow: 3,
    //edgeFriction: 0.15,
    //focusOnSelect: true,
    //infinite: false,
		  slidesToShow: 5,
		  slidesToScroll: 3,
		  swipeToSlide: false,
		  centerMode: true,
		  dots: false,
      focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });

  /*function doOverlay () {
      var Elem = document.getElementById("slider2");
      var arr = [];
      var elements = Elem.getAttribute("data-slick-index").value;
      for (var i = 0; i<elements



      if (elements >= 2 || elements <= -2) {
        elements.classList.add('overlay');
      }
  }

    /*var elements = document.querySelectorAll("#slider2 > .slick-slide");

    for (var i = 0; i < elements.length; i++) {
      console.log(elements[i]); 
    }*/
  

});
