if (typeof $ !== 'undefined' && $('.room-time').length) {
  $('.room-time').slick({
    prevArrow: '<button type="button" class="my-slick-prev-room"></button>',
    nextArrow: '<button type="button" class="my-slick-next-room"></button>',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });
}
