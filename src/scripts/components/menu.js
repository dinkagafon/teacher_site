const menuCloseButton = document.querySelector(".menu__close-button");
const menuOpenButton = document.querySelector(".header__menu-button");
const menu = document.querySelector(".menu");

menuCloseButton.onclick = () => {
  menu.classList.remove("menu_visible");
};

menuOpenButton.onclick = () => {
  menu.classList.add("menu_visible");
};
