import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

const sliderHeader = new Swiper(".slider", {
  pagination: {
    el: ".navigation-slider",
          clickable: true,
          renderBullet: function (index, className) {
              return `<span class="navigation-slider__label ${className}"></span>`;
          },
  },
});

export {sliderHeader};
