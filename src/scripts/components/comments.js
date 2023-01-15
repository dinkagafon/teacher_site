const text_blocks = document.querySelectorAll(".comment__text");
const show_more_buttons = document.querySelectorAll(
  ".comment__show-more-button"
);

text_blocks.forEach((text_block) => {
  if (text_block.clientHeight < text_block.scrollHeight) {
    text_block.nextElementSibling.classList.remove(
      "comment__show-more-button_hidden"
    );
  }
});

show_more_buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", () => {
    const text_block = button.previousElementSibling;
    if (text_block.classList.contains("comment__text_show")) {
      text_block.classList.remove("comment__text_show");
      button.textContent = "Показать больше";
      button.parentElement.parentElement.style.height = "";
    } else {
      text_block.classList.add("comment__text_show");
      button.textContent = "Скрыть";
      button.parentElement.parentElement.style.height = "auto";
    }
  });
});
