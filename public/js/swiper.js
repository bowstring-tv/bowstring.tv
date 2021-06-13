var swiper = new Swiper(".swiper-container", {
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
      