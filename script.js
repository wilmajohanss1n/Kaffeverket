"use strict"

// Mobilmeny
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-menu");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
});


// Kontaktformulär
const contactForm = document.querySelector(".contact-form");
const formFeedback = document.querySelector(".form-feedback");

// Hanterar när användaren försöker skicka formuläret
contactForm.addEventListener("submit", function (event) {

    // Förhindrar att sidan laddas om automatiskt
    event.preventDefault();

    // Hämtar det användaren har skrivit i formuläret
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Kontrollerar om något fält är tomt
    if (name === "" || email === "" || message === "") {
        formFeedback.textContent = "Fyll i alla fält innan du skickar formuläret.";
        return;
    }

    // Kontrollerar att e-postadressen har rätt format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
    formFeedback.textContent = "Skriv in en giltig e-postadress.";
    return;
    }

    // Visar ett medelande när alla fält är korrekt ifyllda
    formFeedback.textContent = "Tack för ditt meddelande! Formuläret är korrekt ifyllt.";




});




