const videoContainer = document.querySelector(".video__container");
const pointsWrapper = document.querySelector(".video__list");

if (!pointsWrapper) return;

const lastPoint = pointsWrapper.lastElementChild;

const scrim = document.querySelector(".video__scrim");

document.addEventListener("scroll", () => {
  if (
    lastPoint.getBoundingClientRect().bottom - 50 <
    videoContainer.getBoundingClientRect().top
  ) {
    scrim.classList.add("video__scrim_hidden");
  } else {
    scrim.classList.remove("video__scrim_hidden");
  }
});
