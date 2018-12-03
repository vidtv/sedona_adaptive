let mobileMenuButton = document.querySelector(".main-nav__open");
let mobileMenu = document.querySelector(".main-nav");

mobileMenuButton.addEventListener("click", function () {
    if (mobileMenuButton.classList.contains("main-nav__open")) {
        mobileMenu.classList.remove("main-nav__hidden");
        mobileMenuButton.classList.remove("main-nav__open");
        mobileMenuButton.classList.add("main-nav__close");
    } else {
        mobileMenu.classList.add("main-nav__hidden");
        mobileMenuButton.classList.remove("main-nav__close");
        mobileMenuButton.classList.add("main-nav__open");
    }
});







