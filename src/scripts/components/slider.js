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

const swiper2 = new Swiper(".experience__slider", {
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: "auto",
  grabCursor: true,
  initialSlide: 2,
  pagination: {
    el: ".experience__slider-pagination",
  },
  modules: [Pagination],
  on: {
    activeIndexChange: (swiper) => {
      expirienceStages[swiper.previousIndex].classList.remove("stage_active");
      expirienceStages[swiper.activeIndex].classList.add("stage_active");
    },
  },
});

for (let stageIndex = 0; stageIndex < expirienceStages.length; stageIndex++) {
  expirienceStages[stageIndex].onclick = () => {
    console.log(stageIndex);
    swiper2.slideTo(stageIndex);
  };
}
