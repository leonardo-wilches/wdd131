document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

const menuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

btn.addEventListener("click", () => {
    navList.classList.toggle("open");
    btn.textContent = navList.classList.contains("open") ? "✖" : "☰";
});