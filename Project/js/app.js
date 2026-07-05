// AlumniConnect Home Page Script
// Highlight active navigation link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    if (link.href === window.location.href) {
        link.classList.add("active");
    }

});
// Hero Section Fade-in Animation

const heroText = document.querySelector(".hero-text");

heroText.style.opacity = "0";
heroText.style.transform = "translateY(40px)";

window.addEventListener("load", () => {

    heroText.style.transition = "all 1s ease";

    heroText.style.opacity = "1";

    heroText.style.transform = "translateY(0)";

});

// Feature Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
// Welcome Message
console.log("Welcome to AlumniConnect!");
// Footer Year (Automatic)
const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} AlumniConnect | Built using HTML, CSS & JavaScript`;