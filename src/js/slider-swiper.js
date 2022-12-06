const swiperAbout = new Swiper('.about-section-slider', {
  // Optional parameters
  // direction: 'vertical',
  // centeredSlides: true,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 25,

  breakpoints: {

    1024: {
      spaceBetween: 40,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperDetails = new Swiper('.details-section-slider', {
  // Optional parameters
  // direction: 'vertical',
  // centeredSlides: true,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,

  breakpoints: {

    1024: {
      slidesPerView: 3,
      spaceBetween: 34,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 86,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});