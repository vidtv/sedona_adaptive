let popupSuccess = document.querySelector(".popup--success");
let popupSuccessButton = document.querySelector(".popup__close--success");
let sedonaForm = document.querySelector(".feedback");
let inputFieldPhone = document.getElementById("feedback__input--phone");
let inputFieldEmail = document.getElementById("feedback__input--email");
let inputFieldName = document.getElementById("feedback__input--name");
let inputFieldSurname = document.getElementById("feedback__input--surname");
let formSendButton = document.querySelector(".feedback__send");

sedonaForm.addEventListener("submit", function () {
    event.preventDefault();
    popupSuccess.classList.add("visible");
});

popupSuccessButton.addEventListener("click", function () {
    popupSuccess.classList.remove("visible");
    sedonaForm.submit();
});