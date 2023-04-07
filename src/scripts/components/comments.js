const textBlocks = document.querySelectorAll(".comment__text");
const commentContainer = document.querySelector(".slider__container");

if (commentContainer) {
  textBlocks.forEach((textBlock) => {
    if (textBlock.clientHeight < textBlock.scrollHeight) {
      textBlock.nextElementSibling.classList.remove(
        "comment__show-more-button_hidden"
      );
    }
  });

  commentContainer.onclick = (event) => {
    const showMoreButton = event.target.closest(".comment__show-more-button");

    if (!showMoreButton) return;

    const textBlock = showMoreButton.previousElementSibling;
    const comment = showMoreButton.parentElement.parentElement;

    if (textBlock.classList.contains("comment__text_show")) {
      textBlock.classList.remove("comment__text_show");
      showMoreButton.textContent = "Показать больше";
      comment.style.height = "";
    } else {
      textBlock.classList.add("comment__text_show");
      showMoreButton.textContent = "Скрыть";
      comment.style.height = "auto";
    }
  };
}
