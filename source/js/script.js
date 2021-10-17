"use strict";

// slider
const sliderItems = document.querySelectorAll(".slider__item");
const sliderButtons = document.querySelectorAll("input[name='navigation-slider']");
for (const sliderButton of sliderButtons) {
  sliderButton.addEventListener('click', () => {
    console.log(sliderButton.id)
    const sliderId = +sliderButton.id.replace("slider-", "");
    for (let i = 0; i < sliderItems.length; i++) {
      sliderItems[i].classList.remove("slider__item--active");
      sliderItems[sliderId - 1].classList.add("slider__item--active");
    }
  });
}
