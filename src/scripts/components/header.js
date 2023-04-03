const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

let lastScrollYPosition = 0;
document.addEventListener("scroll", () => {
  const currentScrollYPosition = window.scrollY;
  if (
    currentScrollYPosition > headerHeight &&
    !header.classList.contains("header_moved")
  ) {
    header.classList.add("header_moved", "header_hidden");
    header.style.transition = null;
  }
  if (currentScrollYPosition === 0) {
    header.classList.remove("header_moved", "header_hidden");
  }

  if (
    lastScrollYPosition > currentScrollYPosition &&
    header.classList.contains("header_moved")
  ) {
    header.classList.remove("header_hidden");
  }

  if (
    lastScrollYPosition < currentScrollYPosition &&
    header.classList.contains("header_moved")
  ) {
    header.classList.add("header_hidden");
  }

  lastScrollYPosition = currentScrollYPosition;
});
