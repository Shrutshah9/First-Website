// Back to top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme toggle (dark / light), remembered between visits
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function applyTheme(theme) {
    if (theme === "light") {
        root.setAttribute("data-theme", "light");
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Switch to dark theme");
    } else {
        root.removeAttribute("data-theme");
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to light theme");
    }
}

applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
});

// Typing animation in the hero
const typedEl = document.getElementById("typed");
const roles = ["MSc IT Student", "Web Developer", "Python Learner", "Cybersecurity Enthusiast"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typedEl && !reduceMotion) {
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = true; // start by erasing the default text

    function type() {
        const word = roles[roleIndex];
        charIndex += deleting ? -1 : 1;
        typedEl.textContent = word.slice(0, charIndex);

        let delay = deleting ? 45 : 85;
        if (!deleting && charIndex === word.length) {
            deleting = true;
            delay = 1600;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 350;
        }
        setTimeout(type, delay);
    }

    setTimeout(type, 1800);
}

// Highlight the nav link of the section currently in view
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");

const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + entry.target.id
                );
            });
        }
    });
}, { rootMargin: "-45% 0px -50% 0px" });

sections.forEach(section => navObserver.observe(section));

// Fade-in sections as they scroll into view
const revealTargets = document.querySelectorAll(".section");
revealTargets.forEach(el => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealTargets.forEach(el => revealObserver.observe(el));
