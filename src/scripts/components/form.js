import Inputmask from "inputmask";
import intlTelInput from "intl-tel-input";

let form = document.querySelector(".form");
let container = document.querySelector(".request__container");
let inputPhoone = document.getElementById("phone");
let errorMes = document.querySelector(".form__error-mes");
const iti = intlTelInput(inputPhoone, {
  initialCountry: "ru",
  separateDialCode: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js",
  customPlaceholder: function (selectedCountryPlaceholder) {
    return "" + selectedCountryPlaceholder.replace(/[0-9]/g, "X");
  },
});

function setMask() {
  inputPhoone.classList.remove("form__input_error");
  errorMes.textContent = "";
  let pl = inputPhoone.getAttribute("placeholder");
  let res = pl.replace(/X/g, "9");
  if (res != "undefined") {
    Inputmask({ mask: res, placeholder: "X", clearMaskOnLostFocus: true }).mask(
      inputPhoone
    );
  }
}

inputPhoone.addEventListener("countrychange", setMask);
inputPhoone.addEventListener("focus", setMask);
inputPhoone.addEventListener("click", setMask);

async function handleSubmit(event) {
  event.preventDefault();

  if (!iti.isValidNumber()) {
    inputPhoone.classList.add("form__input_error");
    errorMes.textContent = "Номер введен неверно";
    return;
  }

  let data = new FormData(event.target);
  const response = await fetch("https://formspree.io/f/mpzejaak", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    container.classList.add("request__container_hidden");
    const succesContainer = document.querySelector(".request__succes");
    succesContainer.classList.add("request__succes_visible");
    scrollTo(
      0,
      succesContainer.getBoundingClientRect().top + window.pageYOffset - 200
    );
  } else {
    errorMes.textContent =
      "Заявка не отправилась. Попробуйте еще раз или позвоните на номер +7 (915) 355-64-31";
  }
}
form.addEventListener("submit", handleSubmit);
