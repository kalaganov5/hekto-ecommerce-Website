/**
 *  Переключение табов, со стилизацией по БЭМ
 * @param {string} tabClassName
 * @param {string} sliderClassName
 */
export const tabsToggle = (tabClassName, sliderClassName) => {
  const inputClassName = `${tabClassName}__input`;
  const itemClassName = `${sliderClassName}__item`;
  const tabs = document.querySelector(`.${tabClassName}`);

  tabs.addEventListener('change', (evt) => {
    const inputElement = evt.target;
    if (inputElement.classList.contains(`${inputClassName}`)) {
      inputElement.checked = true;
      const tabsNumber = inputElement.value - 1;
      const tabsElements = document.querySelectorAll(`.${itemClassName}`);
      const tabActive = document.querySelector(`.${itemClassName}--active`);
      tabActive.classList.remove(`${itemClassName}--active`);
      tabsElements[tabsNumber].classList.add(`${itemClassName}--active`)
    }
  });
}
