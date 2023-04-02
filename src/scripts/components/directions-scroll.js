import LocomotiveScroll from "locomotive-scroll";
const directionContents = document.querySelectorAll(".directions__content");
const directionContainer = document.querySelector(".directions");
const directionWrappers = document.querySelectorAll(".directions__wrapper");
const directionImages = Array.from(directionWrappers).map((wrapper) => [
  wrapper.dataset.title,
  document.querySelector(`[data-direction=${wrapper.dataset.title}]`),
]);
const options = {
  threshold: 0.5,
};
const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      directionContainer.style.backgroundColor =
        entry.target.parentElement.dataset.background;
    }
  });
};
const observer = new IntersectionObserver(callback, options);

for (const content of directionContents) {
  observer.observe(content);
}

const options2 = {
  rootMargin: "0px 0px -100% 0px",
  threshold: 0,
};

let visibleDirectionWrapper = null;

document.addEventListener("scroll", () => {
  if (visibleDirectionWrapper) {
    const hiddenPercent =
      (-visibleDirectionWrapper.getBoundingClientRect().top /
        visibleDirectionWrapper.offsetHeight) *
      100;
    directionImages.find(
      (image) => image[0] === visibleDirectionWrapper.dataset.title
    )[1].style.clipPath = `inset(0px 0px ${hiddenPercent}%)`;
  }
});
let flag = false;
const callback2 = function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && !entry.target.previousElementSibling) {
      visibleDirectionWrapper = null;
    }
    if (entry.isIntersecting) {
      if (!entry.target.nextElementSibling) {
        visibleDirectionWrapper = null;
        return;
      }
      visibleDirectionWrapper = entry.target;
      if (!flag) {
        flag = true;
        if (visibleDirectionWrapper) {
          const hiddenPercent =
            (-visibleDirectionWrapper.getBoundingClientRect().top /
              visibleDirectionWrapper.offsetHeight) *
            100;

          for (let image of directionImages) {
            if (image[0] !== visibleDirectionWrapper.dataset.title) {
              image[1].style.clipPath = `inset(0px 0px 100%)`;
            } else {
              image[1].style.clipPath = `inset(0px 0px ${hiddenPercent}%)`;
              break;
            }
          }
        }
      }
    }
  });
};

const observer2 = new IntersectionObserver(callback2, options2);

for (const content of directionWrappers) {
  observer2.observe(content);
}
