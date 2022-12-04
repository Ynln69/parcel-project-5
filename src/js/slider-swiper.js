const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  // centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 25,

  breakpoints: {
    414: {
      spaceBetween: 25,
    },
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