module.exports = () => {
    new Swiper('.characters-slider__images', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
      
          400: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          
          575: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          
          767: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
      
          992: {
            spaceBetween: 30,
          },
        }
    });
}