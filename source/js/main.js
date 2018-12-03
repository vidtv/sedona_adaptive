let mobileMenuButtonOpen = document.querySelector(".main-nav__open");
let mobileMenuButtonClose = document.querySelector(".site-list__close");
let mobileMenu = document.querySelector(".main-nav");

mobileMenuButtonOpen.addEventListener("click", function () {
    mobileMenu.classList.remove("main-nav__hidden");
});

mobileMenuButtonClose.addEventListener("click", function () {
    mobileMenu.classList.add("main-nav__hidden");
});







