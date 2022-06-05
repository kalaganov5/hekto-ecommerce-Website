import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

const sliderPopularProducts = new Swiper(".popular-categories__slider", {
  slidesPerView: 4,
  spaceBetween: 40,
  pagination: {
    el: ".popular-pagination",
          clickable: true,
          renderBullet: function (index, className) {
              return `<span class="popular-pagination__item ${className}"></span>`;
          },
          bulletClass: "popular-pagination__item",
          bulletActiveClass: "popular-pagination__item--active",
  },
  grabCursor: true,
  slideClass: "products-popular__item",
  wrapperClass: "products-popular",
});

export {sliderPopularProducts};
