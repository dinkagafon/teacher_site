import LocomotiveScroll from "locomotive-scroll";
const directionContents = document.querySelectorAll(".directions__content");
const directionContainer = document.querySelector(".directions");
const directionWrappers = document.querySelectorAll(".directions__wrapper");
const directionImages = Array.from(directionWrappers).reduce(
  (result, wrapper) => {
    const nameDirection = wrapper.dataset.title;
    result[nameDirection] = document.querySelector(
      `[data-direction=${nameDirection}]`
    );
    return result;
  },
  {}
);
const options = {
  threshold: 0.5,
};
const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      directionContainer.style.backgroundColor = `var(--color-${entry.target.parentElement.dataset.title}-back)`;
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
let visibleDirectionImage = null;

const image = document.querySelector(".directions__image");
document.addEventListener("scroll", () => {
  if (visibleDirectionWrapper) {
    const hiddenPercent =
      (-visibleDirectionWrapper.getBoundingClientRect().top /
        visibleDirectionWrapper.offsetHeight) *
      100;
    directionImages[
      visibleDirectionWrapper.dataset.title
    ].style.clipPath = `inset(0px 0px ${hiddenPercent}%)`;
  }
});

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
    }
  });
};

const observer2 = new IntersectionObserver(callback2, options2);

for (const content of directionWrappers) {
  observer2.observe(content);
}
