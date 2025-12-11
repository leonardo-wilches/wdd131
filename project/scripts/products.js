document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const categorySelect = document.querySelector("#category-filter");
const productCards = document.querySelectorAll(".product-card");

categorySelect.addEventListener("change", () => {
    const selectedCategory = categorySelect.value;

    productCards.forEach(card => {
        const cardCategory = card.dataset.category;

        if (selectedCategory === "all" || selectedCategory === cardCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

const btn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

btn.addEventListener("click", () => {
    navList.classList.toggle("open");
    btn.textContent = navList.classList.contains("open") ? "✖" : "☰";
});