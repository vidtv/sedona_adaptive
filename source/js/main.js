let mobileMenuButtonOpen = document.querySelector(".main-nav__open");
let mobileMenuButtonClose = document.querySelector(".site-list__close");
let mobileMenu = document.querySelector(".main-nav");
let popupSuccess = document.querySelector(".popup--success");
let popupSuccessButton = document.querySelector(".popup__close--success");
let sedonaForm = document.querySelector(".feedback");
let formSendButton = document.querySelector(".feedback__send");
let inputFieldPhone = document.getElementById("feedback__input--phone");
let inputFieldEmail = document.getElementById("feedback__input--email");
let inputFieldName = document.getElementById("feedback__input--name");
let inputFieldSurname = document.getElementById("feedback__input--surname");

mobileMenuButtonOpen.addEventListener("click", function () {
    mobileMenu.classList.remove("main-nav__hidden");
});

mobileMenuButtonClose.addEventListener("click", function () {
    mobileMenu.classList.add("main-nav__hidden");
});

sedonaForm.addEventListener("submit", function () {
    event.preventDefault();
    popupSuccess.classList.add("visible");
});

popupSuccessButton.addEventListener("click", function () {
    popupSuccess.classList.remove("visible");
    sedonaForm.submit();
});











