document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please complete all fields.");
            return;
        }

        alert("Your message has been sent. Thank you!");

        contactForm.reset();
    });
}

const btn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

btn.addEventListener("click", () => {
    navList.classList.toggle("open");
    btn.textContent = navList.classList.contains("open") ? "✖" : "☰";
});