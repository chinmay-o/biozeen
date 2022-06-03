var swiperA = new Swiper("#mySwiper", {
  slidesPerView: 6,
  spaceBetween: 2,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 6,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiperB = new Swiper("#myTextSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextElo: '.swiper-button-next',
    prevElo: '.swiper-button-prev',
  },
});
