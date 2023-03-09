const faq__content = document.querySelector(".faq__content");
console.log(faq__content);
faq__content.onclick = (event) => {
  const faq__block = event.target.closest(".faq__block");

  if (!faq__block) return;

  if (!faq__content.contains(faq__block)) return;

  const faq__text = faq__block.querySelector(".faq__text");
  const faq__answer = faq__block.querySelector(".faq__answer");

  if (!faq__block.classList.contains("faq__block__open")) {
    faq__answer.style.height = faq__text.clientHeight + "px";
  } else {
    faq__answer.style.height = 0;
  }

  faq__block.classList.toggle("faq__block__open");
};
