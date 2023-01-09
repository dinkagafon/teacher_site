import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper(".slider", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: "auto",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation],
});

const expirienceStages = document.querySelectorAll(".stage");

const mediaQuery = window.matchMedia("(max-width: 1023px)");

const swiper2 = new Swiper(".experience__slider", {
  spaceBetween: 0,
  centeredSlides: !mediaQuery.matches,
  slidesPerView: "auto",
  grabCursor: true,
  initialSlide: 2,
  pagination: {
    el: ".experience__slider-pagination",
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class="${className} experience__slider-bullet"></span>`;
    },
  },
  modules: [Pagination],
  on: {
    activeIndexChange: (swiper) => {
      expirienceStages[swiper.previousIndex].classList.remove("stage_active");
      expirienceStages[swiper.activeIndex].classList.add("stage_active");
      expirienceStages[swiper.previousIndex].querySelector(
        ".stage__discrip-wrapper"
      ).style.height = 0;
      const height =
        expirienceStages[swiper.activeIndex].querySelector(
          ".stage__discrip"
        ).offsetHeight;
      console.log(height);
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
