document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

if (tipsForm) {
    tipsForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#tip-name").value.trim();
        const category = document.querySelector("#tip-category").value;
        const message = document.querySelector("#tip-message").value.trim();

        if (name === "" || message === "") {
            alert("Please fill out all required fields.");
            return;
        }

        successMessage.style.display = "block";
        successMessage.textContent = "Your tip has been submitted successfully!";

        tipsForm.reset();

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3500);
    });
}

const btn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

btn.addEventListener("click", () => {
    navList.classList.toggle("open");
    btn.textContent = navList.classList.contains("open") ? "✖" : "☰";
});