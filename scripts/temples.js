document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const btn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

btn.addEventListener("click", () => {
    navList.classList.toggle("open");
    btn.textContent = navList.classList.contains("open") ? "✖" : "☰";
});