
$(document).ready(function () {

// add active class to clicked nav item
  $(".header__nav a").click(function (event) {
    event.preventDefault();
    $(".header__nav a").removeClass('active');
    $(this).addClass('active');
  });


  // Slow scroll from nav item to current section
  $(".header__nav a, .section-home__btn-next").click(function (event) {
      event.preventDefault();
      let id = $(this).attr("href");
      let top = $(id).offset().top;
      let headerHeight = $('.header').height();
      let isHeaderSticky = $('.header').hasClass('header--sticky');
      let scrollTop = isHeaderSticky ? top - headerHeight : top - headerHeight - 60;
      $("body, html").animate({ scrollTop }, 700 );
    }
  );


  // sticky header
  if ($('.header').length) {
    let renderHeader = function () {
      const HEADER = $('.header');
      let headerHeight = HEADER.height();
      let scrollTop = $(window).scrollTop();
      if (scrollTop > headerHeight) {
        HEADER.addClass("header--sticky");
      } else {
        HEADER.removeClass("header--sticky");
      }
    }
    renderHeader();
    $(window).scroll(function () {
      renderHeader();
    })
  }

   // change navigation active class oncroll
  function onScroll(event) {
    let scrollPos = $(document).scrollTop();
    $('.header__nav a').each(function () {
      let currLink = $(this);
      let refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.header__nav a').removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
  $(document).on("scroll", onScroll);


  // show media header navigation
  $('.header__nav-btn').click(function() {
    $('.header__nav').toggleClass('header__nav--show');
    $(this).toggleClass('is-active');
  });

		

      $("#slider1").slick({
        dots: false,
        nextArrow:
          '<button type="button" class="slick-next"> <i class= "icon ion-ios-arrow-right"></i> </button>',
        prevArrow:
          '<button type="button" class="slick-prev"> <i class= "icon ion-ios-arrow-left" ></i> </button>',
        infinite: true,
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
    centerPadding: "10px",
    nextArrow:
      '<button type="button" class="slick-next"> <i class= "icon ion-ios-arrow-right"></i> </button>',
    prevArrow:
      '<button type="button" class="slick-prev"> <i class= "icon ion-ios-arrow-left" ></i> </button>',
    slidesToShow: 5,
    slidesToScroll: 3,
    swipeToSlide: false,
    centerMode: true,
    dots: false,
    focusOnSelect: true,
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

  /*function doOverlay () {
      var Elem = document.getElementById("slider2");
      var arr = [];
      var elements = 
  



    

    /*var elements = document.querySelectorAll("#slider2 > .slick-slide");

    for (var i = 0; i < elements.length; i++) {
      console.log(elements[i]); 
    }*/

/*$("#slider2").on("", function() {
  if ($(".slick-slide").hasClass("slick-active")) {
    console.log("SMELLO SMOLRLD");
  }
});

$(".slick-active").first().last().addClass('slide-overlay');*/
 
/*var slideOverlay = document.getElementsByClassName("slick-active");
if("slick-active") {
  slideOverlay.addClass('slide-overlay');
  console.log('blabla');
};*/
});
