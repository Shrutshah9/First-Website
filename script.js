
// Welcome message
console.log("Welcome to Shrut's Portfolio!");

// Smooth navigation feedback
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation:", link.textContent);
    });
});

// Button interaction
document.querySelectorAll(".hero-buttons a").forEach(button => {
    button.addEventListener("click", () => {
        console.log("Button clicked:", button.textContent);
    });
});

// Back to top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.style.display =
        window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
