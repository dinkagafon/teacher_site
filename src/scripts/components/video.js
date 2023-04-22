try {
  const videoSticky = document.querySelector(".video__sticky");
  const video = document.querySelector(".video__sticky video");
  const videoContainer = document.querySelector(".video__container");
  const scrim = document.querySelector(".video__scrim");
  const par = document.querySelector(".video__par");
  console.log();
  const bord = par.children[0].offsetHeight;
  const center =
    video.clientHeight * 2 < videoSticky.clientHeight
      ? videoSticky.clientHeight / 2 - video.clientHeight / 4
      : videoSticky.clientHeight / 2;

  document.addEventListener("scroll", () => {
    const { top, bottom } = video.getBoundingClientRect();
    const { bottom: containerBottom } = videoContainer.getBoundingClientRect();
    let hidescrim = true;
    for (let word of par.children) {
      const { top: wordTop, bottom: wordBottom } = word.getBoundingClientRect();
      const visibleTop =
        video.clientHeight * 2 > videoSticky.clientHeight ? top : bottom;
      const visibleBottom =
        video.clientHeight * 2 > videoSticky.clientHeight
          ? bottom
          : containerBottom;
      const coefTop =
        video.clientHeight * 2 > videoSticky.clientHeight ? 8 : 20;
      const visibleHeight = visibleBottom - visibleTop;
      let opacity;
      if (
        visibleTop + visibleHeight / 2 >
        wordTop + (wordBottom - wordTop) / 2
      ) {
        opacity =
          (wordTop - visibleHeight / coefTop - visibleTop) /
          (visibleHeight / 5);
      } else {
        opacity =
          (visibleBottom - (wordBottom + visibleHeight / 8)) /
          (visibleHeight / 5);
        hidescrim = false;
      }
      word.style.opacity = opacity;
      hidescrim = opacity > 0 ? false : hidescrim;
    }
    scrim.style.opacity = hidescrim ? 0 : 1;
  });
} catch (e) {
  console.log(e, "video.js");
}
