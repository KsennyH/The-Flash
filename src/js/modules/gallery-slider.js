module.exports = () => {
    new Swiper('.gallery__slider', {
        slidesPerView: 3,
          spaceBetween: 10,
          centeredSlides: true,
          loop: true,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
          },
      
          575: {
            slidesPerView: 3,
          },
        }
    });
}