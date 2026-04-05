document.querySelectorAll('.about-section-slider').forEach(function (el) {
  new Swiper(el, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 25,

    breakpoints: {
      1024: {
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
  });
});

document.querySelectorAll('.details-section-slider').forEach(function (el) {
  new Swiper(el, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },

    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
  });
});
