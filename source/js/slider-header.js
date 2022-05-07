import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

const sliderHeader = new Swiper(".slider", {
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
  pagination: {
    el: ".navigation-slider",
          clickable: true,
          renderBullet: function (index, className) {
              return `<span class="navigation-slider__label ${className}"></span>`;
          },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  grabCursor: true,
});

export {sliderHeader};
