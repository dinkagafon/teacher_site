const faqContainer = document.querySelector(".faq__content");

faqContainer.onclick = (event) => {
  const faqBlock = event.target.closest(".faq-block");

  if (!faqBlock) return;

  if (!faqContainer.contains(faqBlock)) return;

  const faqText = faqBlock.querySelector(".faq-block__text");
  const faqAnswer = faqBlock.querySelector(".faq-block__answer");

  if (!faqBlock.classList.contains("faq-block__open")) {
    faqAnswer.style.height = faqText.clientHeight + "px";
  } else {
    faqAnswer.style.height = 0;
  }

  faqBlock.classList.toggle("faq-block__open");
};
