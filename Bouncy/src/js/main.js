$(document).ready(function () {

  // add active class to clicked nav item
  $(".header__nav a").click(function (event) {
    event.preventDefault();
    $(".header__nav a").removeClass('active');
    $(this).addClass('active');
  });


  // Slow scroll from nav item to current section
  $(".header__nav a, .home__btn-next,.already__btn").click(function (event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    let headerHeight = $('.header').height();
    let isHeaderSticky = $('.header').hasClass('header--sticky');
    let scrollTop = isHeaderSticky ? top - headerHeight : top - headerHeight + 50;
    $("body, html").animate({ scrollTop }, 700);
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
  };

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


  $('.grid').masonry({
    itemSelector: '.grid-item',
    //columnWidth: 270,
    gutter: 10,
    percentPosition: true,
    horizontalOrder: true,
    transitionDuration: '0.2s'
  });

  var $grid = $('.grid').isotope({
  });


  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // filters
  $grid.isotope({ filter: '.print' });
  $grid.isotope({ filter: '.branding' });
  $grid.isotope({ filter: '.web' });
  $grid.isotope({ filter: '.html' });
  $grid.isotope({ filter: '*' });

  $('.filter-button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  //SLIDER 1
  $('#slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    fade: true,
    infinite: true
  });

  $(".nicescroll-box").niceScroll(".wrap", { cursorcolor: "#19bd9a", cursorwidth: "5px", autohidemode: false });

  $("body").niceScroll({
    cursorcolor: "#19bd9a",
    cursorwidth: "16px",
    cursorwidth: "12px"
  });
  //SLIDER 2
  $('#slider2').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
});

//GOOGLE MAP
function initMap() {
  var beetroot = { lat: 47.8298011, lng: 35.1658022 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: beetroot,
  });

  var marker = new google.maps.Marker({
    position: { lat: 47.8298011, lng: 35.1658022 },
    map: map,
    icon: {
      url: "./img/map.png",
    },
    title: 'Beetroot!'
  });
};

