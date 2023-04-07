const lists = document.querySelectorAll(".list");

let options = {
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
      return;
    }
  });
}, options);

for (let list of lists) {
  Array.from(list.children).forEach((item, index) => {
    item.style.setProperty("--list-item-index", index + "s");
    observer.observe(item);
  });
}
