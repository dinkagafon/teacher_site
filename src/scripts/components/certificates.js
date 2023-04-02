import Viewer from "viewerjs";
const imageContainer = document.querySelector(".certificates__container");
if (imageContainer) {
  new Viewer(imageContainer, {
    toolbar: {
      flipHorizontal: false,
      flipVertical: false,
      prev: true,
      next: true,
      oneToOne: false,
      play: false,
      reset: false,
      rotateLeft: false,
      rotateRight: false,
      zoomIn: false,
      zoomOut: false,
    },
    navbar: false,
  });
}
