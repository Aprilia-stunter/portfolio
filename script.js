const btnHamburger = document.getElementById("btn-hamburger")

const navbar = document.getElementById("navbar")


/* buttons events */
btnHamburger.addEventListener("click", () => {
    console.log("hej jag är inne i funktionen");
    navbar.classList.toggle("open")
});