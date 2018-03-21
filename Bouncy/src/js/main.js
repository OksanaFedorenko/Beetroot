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


  $('.grid').masonry({
    //itemSelector: '.grid-item',
    //columnWidth: 270,
    //gutter: 10,
  });

  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    percentPosition: true,
    masonry: {
      //columnWidth: '.grid-sizer',
      gutter: 10,
      //horizontalOrder: true
      columnWidth: 270
    }
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

}