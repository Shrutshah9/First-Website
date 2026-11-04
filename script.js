
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
