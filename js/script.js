const btnMenu = document.getElementById("btn-menu");

function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

btnMenu.addEventListener("click", toggleMenu);