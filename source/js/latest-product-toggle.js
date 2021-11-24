/**
 * Функция переключения tab
 */
export const latestProductToggle = () => {
  const tabs = document.querySelector(".latest-products__tabs");
  tabs.addEventListener('change', (evt) => {
    const inputElement = evt.target;
    if (inputElement.classList.contains("tabs-products__input")) {
      inputElement.checked = true;
      const tabsNumber = inputElement.value - 1;
      const tabsElement = document.querySelectorAll(".content-latest-products__item");
      const tabActive = document.querySelector(".content-latest-products__item--active");
      tabActive.classList.remove("content-latest-products__item--active");
      tabsElement[tabsNumber].classList.add("content-latest-products__item--active")
    }
  });
}
