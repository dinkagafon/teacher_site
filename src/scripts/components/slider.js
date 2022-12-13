const [slider] = document.getElementsByClassName("slider");

const [prevButton, nextButton] =
  slider.getElementsByClassName("slider__button");

const [elementsContainer] = slider.getElementsByClassName("slider__container");

const elements = elementsContainer.getElementsByClassName("slider__elem");
const halfContainerWidth = elementsContainer.offsetWidth / 2;
const elementsPositions = Array.from(elements).map((sliderElement) => [
  sliderElement.offsetLeft,
  sliderElement.offsetLeft + sliderElement.offsetWidth,
]);

let currentActiveElementId = 0;
let startClientX;
let scrollLeft;

function moveElements() {
  console.log(currentActiveElementId);
  elements[currentActiveElementId].scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
}

function moveToNextElement() {
  if (currentActiveElementId === elements.length - 1) return;
  currentActiveElementId++;
  moveElements();
}

function moveToPrevElement() {
  if (currentActiveElementId === 0) return;
  currentActiveElementId--;
  moveElements();
}

function handlePointerDown(event) {
  startClientX = event.clientX;
  scrollLeft = elementsContainer.scrollLeft;

  elementsContainer.setPointerCapture(event.pointerId);

  elementsContainer.addEventListener("pointermove", handlePointerMove);
  elementsContainer.addEventListener("pointerup", handlePointerUp);
}

function handlePointerMove(event) {
  const delta = event.clientX - startClientX;
  elementsContainer.scrollLeft = scrollLeft - delta;
}

function handlePointerUp(event) {
  const delta = event.clientX - startClientX;
  currentActiveElementId = calcCurrentElementAfterScroll(delta);
  moveElements();
  startClientX = 0;

  elementsContainer.removeEventListener("pointermove", handlePointerMove);
  elementsContainer.removeEventListener("pointerup", handlePointerUp);
}

elementsContainer.addEventListener("pointerdown", handlePointerDown);
prevButton.addEventListener("click", moveToPrevElement);
nextButton.addEventListener("click", moveToNextElement);

function calcCurrentElementAfterScroll(delta) {
  const scrollCenterPosition =
    elementsContainer.scrollLeft + halfContainerWidth;

  if (scrollCenterPosition < elementsPositions[0][0]) {
    return 0;
  }

  if (scrollCenterPosition > elementsPositions[elements.length - 1][0]) {
    return elements.length - 1;
  }

  for (
    let elementIndex = 0;
    elementIndex < elements.length - 1;
    elementIndex++
  ) {
    if (
      elementsPositions[elementIndex][0] <= scrollCenterPosition &&
      scrollCenterPosition < elementsPositions[elementIndex + 1][0]
    ) {
      return delta > 0
        ? Math.max(--elementIndex, 0)
        : Math.min(++elementIndex, elements.length - 1);
    }
  }
}
