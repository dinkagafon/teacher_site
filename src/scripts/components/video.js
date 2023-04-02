const videoContainer = document.querySelector(
  ".direction-why__video-container"
);
const pointsWrapper = document.querySelector(".direction-why__list");

if (!pointsWrapper) return;

const lastPoint = pointsWrapper.lastElementChild;

const scrim = document.querySelector(".direction-why__scrim");

document.addEventListener("scroll", () => {
  if (
    lastPoint.getBoundingClientRect().bottom - 50 <
    videoContainer.getBoundingClientRect().top
  ) {
    scrim.classList.add("direction-why__scrim_hidden");
  } else {
    scrim.classList.remove("direction-why__scrim_hidden");
  }
});
