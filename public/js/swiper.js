var swiper = new Swiper(".landing-swiper-container", {
    autoplay: {
      delay: 1500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      660: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
});


var swiper = new Swiper(".studio-swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
