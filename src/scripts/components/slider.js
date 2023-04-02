import Swiper, { Navigation, Pagination, Keyboard } from "swiper";

const comments = document.querySelectorAll(".slider__elem");

const swiper = new Swiper(".slider", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: "auto",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  modules: [Navigation, Keyboard],
  on: {
    activeIndexChange: (swiper) => {
      const comment__text =
        comments[swiper.previousIndex].querySelector(".comment__text");
      const currentShowMoreButton = comments[swiper.activeIndex].querySelector(
        ".comment__show-more-button"
      );
      const prevShowMoreButton = comments[swiper.previousIndex].querySelector(
        ".comment__show-more-button"
      );

      if (currentShowMoreButton) {
        currentShowMoreButton.setAttribute("tabIndex", "0");
      }

      if (prevShowMoreButton) {
        prevShowMoreButton.setAttribute("tabIndex", "-1");
      }

      if (comment__text.classList.contains("comment__text_show")) {
        comment__text.classList.remove("comment__text_show");
        comment__text.nextElementSibling.textContent = "Показать больше";
        comment__text.parentElement.parentElement.style.height = "";
      }
    },
  },
});

const expirienceStages = document.querySelectorAll(".stage");

const mediaQuery = window.matchMedia("(max-width: 1023px)");

const swiper2 = new Swiper(".experience__slider", {
  spaceBetween: 0,
  centeredSlides: !mediaQuery.matches,
  slidesPerView: "auto",
  grabCursor: true,
  initialSlide: 0,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".experience__slider-pagination",
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class="${className} experience__slider-bullet"></span>`;
    },
  },
  modules: [Pagination, Keyboard],
  on: {
    init: () => {
      expirienceStages[0].classList.add("stage_active");
      const height =
        expirienceStages[0].querySelector(".stage__discrip").offsetHeight;
      expirienceStages[0].querySelector(
        ".stage__discrip-wrapper"
      ).style.height = height + "px";
      expirienceStages[0]
        .querySelector(".stage__year")
        .classList.add("text_main");
      expirienceStages[0]
        .querySelector(".stage__year")
        .classList.remove("text_small");
    },
    activeIndexChange: (swiper) => {
      expirienceStages[swiper.previousIndex].classList.remove("stage_active");
      expirienceStages[swiper.activeIndex].classList.add("stage_active");
      expirienceStages[swiper.previousIndex]
        .querySelector(".stage__year")
        .classList.add("text_small");
      expirienceStages[swiper.previousIndex]
        .querySelector(".stage__year")
        .classList.remove("text_main");
      expirienceStages[swiper.activeIndex]
        .querySelector(".stage__year")
        .classList.add("text_main");
      expirienceStages[swiper.activeIndex]
        .querySelector(".stage__year")
        .classList.remove("text_small");
      expirienceStages[swiper.previousIndex].querySelector(
        ".stage__discrip-wrapper"
      ).style.height = 0;
      const height =
        expirienceStages[swiper.activeIndex].querySelector(
          ".stage__discrip"
        ).offsetHeight;
      expirienceStages[swiper.activeIndex].querySelector(
        ".stage__discrip-wrapper"
      ).style.height = height + "px";
    },
  },
});

for (let stageIndex = 0; stageIndex < expirienceStages.length; stageIndex++) {
  expirienceStages[stageIndex].onclick = () => {
    swiper2.slideTo(stageIndex);
  };
}

const swiper3 = new Swiper(".certificates__container-mobile", {
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  breakpoints: {
    639: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  modules: [Navigation],
  navigation: {
    nextEl: ".certificates__button-next",
    prevEl: ".certificates__button-prev",
  },
});
