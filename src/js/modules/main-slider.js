module.exports = () => {
    new Swiper('.slider__images', {
        slidesPerView: 1,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
    });
}