const menuCloseButton = document.querySelector(".menu__close-button");
const menuOpenButton = document.querySelector(".header__menu-button");
const menuLinks = document.querySelectorAll(".menu__list .menu__link");
const menu = document.querySelector(".menu");

const scrollbarWidth = (function culcScrollbarWidth() {
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "scrollbar-measure";
  document.body.appendChild(scrollDiv);
  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
})();

menuCloseButton.onclick = () => {
  menu.style.paddingRight = "0px";
  document.body.style.overflow = "auto";
  document.body.style.paddingRight = "0px";
  menuCloseButton.setAttribute("tabindex", "-1");
  for (let link of menuLinks) {
    link.setAttribute("tabindex", "-1");
  }

  menu.classList.remove("menu_visible");
};

menuOpenButton.onclick = () => {
  menu.style.paddingRight = scrollbarWidth + "px";
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = scrollbarWidth + "px";
  menuCloseButton.setAttribute("tabindex", "");
  for (let link of menuLinks) {
    link.setAttribute("tabindex", "");
  }
  menu.classList.add("menu_visible");
};
