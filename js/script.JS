let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-80px"; // Oculta al bajar
    } else {
        navbar.style.top = "0"; // Muestra al subir
    }
    lastScrollTop = currentScroll;
});
