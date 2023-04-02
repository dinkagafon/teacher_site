const faq__content = document.querySelector(".faq__content");
faq__content.onclick = (event) => {
  const faq__block = event.target.closest(".faq-block");

  if (!faq__block) return;

  if (!faq__content.contains(faq__block)) return;

  const faq__text = faq__block.querySelector(".faq-block__text");
  const faq__answer = faq__block.querySelector(".faq-block__answer");

  if (!faq__block.classList.contains("faq-block__open")) {
    faq__answer.style.height = faq__text.clientHeight + "px";
  } else {
    faq__answer.style.height = 0;
  }

  faq__block.classList.toggle("faq-block__open");
};
