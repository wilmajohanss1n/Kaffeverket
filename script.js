const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-menu");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
});

