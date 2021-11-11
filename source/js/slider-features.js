import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

const sliderFeatures = new Swiper(".features__slider", {
  slidesPerView: 4,
  spaceBetween: 29,
  pagination: {
    el: ".features__slider-pagination",
          clickable: true,
          renderBullet: function (index, className) {
              return `<span class="features__slider-pagination-item ${className}"></span>`;
          },
          bulletClass: "features__slider-pagination-item",
          bulletActiveClass: "features__slider-pagination-item--active",
  },
  grabCursor: true,
  slideClass: "features__item",
  wrapperClass: "features__list",
});

export {sliderFeatures};
