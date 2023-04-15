const videoContainer = document.querySelector(".video__sticky");
const par = document.querySelector(".video__par");

par.innerHTML = par.textContent
  .trim()
  .split(" ")
  .map((i) => `<span>${i}</span>`)
  .join(" ");

const center = videoContainer.clientHeight / 2;

document.addEventListener("scroll", () => {
  for (let word of par.children) {
    const coords = word.getBoundingClientRect();
    if (coords.top > center - 100 && coords.top < center + 100) {
      word.style.opacity = 1;
    } else if (coords.top > center - 110 && coords.top < center + 110) {
      word.style.opacity = 0.8;
    } else if (coords.top > center - 130 && coords.top < center + 130) {
      word.style.opacity = 0.4;
    } else if (coords.top > center - 150 && coords.top < center + 150) {
      word.style.opacity = 0.2;
    } else {
      word.style.opacity = 0;
    }
  }
});
