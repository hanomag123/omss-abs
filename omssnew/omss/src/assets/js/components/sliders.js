const complectsSlider = new Swiper(".complects-slider", {
  slidesPerView: "auto",
  spaceBetween: 80,

  navigation: {
    nextEl: ".compltects-btn-next",
    prevEl: ".compltects-btn-prev",
  },

  //   breakpoints: {
  //     900: {
  //       spaceBetween: 50,
  //     },
  //     1350: {
  //       slidesPerView: "auto",
  //       spaceBetween: 80,
  //     },
  //   },
});

const aboutSlider = new Swiper(".about-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,

  navigation: {
    nextEl: ".about-btn-next",
    prevEl: ".about-btn-prev",
  },
});
const partnersSlider = new Swiper(".partners-slider", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 200,

  navigation: {
    nextEl: ".partners-btn-next",
    prevEl: ".partners-btn-prev",
  },

  breakpoints: {
    101: {
      spaceBetween: 40,
    },
    501: {
      spaceBetween: 50,
    },
    921: {
      spaceBetween: 200,
    },
  },
});
const projectsSlider = new Swiper(".projects-slider", {
  slidesPerView: "auto",
  grid: {
    rows: 2,
  },

  navigation: {
    nextEl: ".projects-btn-next",
    prevEl: ".projects-btn-prev",
  },

  breakpoints: {
    100: {
      grid: false,
      spaceBetween: 50,
    },
    921: {
      grid: {
        rows: 2,
      },
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: "auto",
      spaceBetween: 0,
    },
  },
});
