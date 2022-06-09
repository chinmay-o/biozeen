var swiperA = new Swiper("#mySwiper", {
  slidesPerView: 3,
  spaceBetween: 1,
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 1,
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
  autoplay: {

   delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {

    nextElo: '.swiper-button-next',
    prevElo: '.swiper-button-prev',
  },
});

var swiperC = new Swiper("#gallerySwiper", {
  slidesPerView: 1,
  spaceBetween: 2,
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
    700: {
      slidesPerView: 1.5,
      spaceBetween: 2,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    900: {
      slidesPerView: 2.5,
      spaceBetween: 2,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 2,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiperC = new Swiper("#testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {

   delay: 5000,
  },

  pagination: {
    el: '.testimonial-pagination',
  },
});

var swiperD = new Swiper("#caseStudySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 0,
  autoplay: {

   delay: 5000,
  },
  breakpoints: {
    500: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    700: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    900: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 3.2,
      spaceBetween: 2,
    },
  },
});

var swiperE = new Swiper("#blogSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {

   delay: 5000,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    700: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    900: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
  },
});
