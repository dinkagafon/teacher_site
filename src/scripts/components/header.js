const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
let lastScroll = 0;
document.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  console.log(currentScroll, headerHeight);
  if (
    currentScroll > headerHeight &&
    !header.classList.contains("header_moved")
  ) {
    header.style.transition = "none";
    header.classList.add("header_moved", "header_hidden");
    setTimeout(() => {
      header.style.transition = null;
    });
  }
  if (currentScroll === 0) {
    header.classList.remove("header_moved", "header_hidden");
  }

  if (lastScroll > currentScroll && header.classList.contains("header_moved")) {
    header.classList.remove("header_hidden");
  }

  if (lastScroll < currentScroll && header.classList.contains("header_moved")) {
    header.classList.add("header_hidden");
  }

  lastScroll = currentScroll;
});
