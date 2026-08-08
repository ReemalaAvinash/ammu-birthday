/*==================================================
AMRUTHA WEBSITE
MAIN.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    Smooth Scroll Button
    =========================================*/

    const exploreBtn = document.querySelector(".main-btn");

    const memories = document.querySelector("#memories");

    if (exploreBtn && memories) {

        exploreBtn.addEventListener("click", () => {

            memories.scrollIntoView({

                behavior: "smooth"

            });

        });

    }

    /*=========================================
    Navbar Smooth Scroll
    =========================================*/

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const target = document.querySelector(

                link.getAttribute("href")

            );

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*=========================================
    Active Navbar
    =========================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;

            if (scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (

                link.getAttribute("href") === "#" + current

            ) {

                link.classList.add("active");

            }

        });

    });

    /*=========================================
    Reveal Animation
    =========================================*/

    const revealItems = document.querySelectorAll(

        ".memory-card,.letter-card,.section-title"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: .2

        }

    );

    revealItems.forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

});
/*=========================================
BIRTHDAY CONFETTI
=========================================*/

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.background = [

            "#ff6b9d",
            "#ffd166",
            "#a78bfa",
            "#7dd3fc",
            "#86efac"

        ][Math.floor(Math.random() * 5)];

        confetti.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 7000);

    }

}

window.addEventListener("load", () => {

    setTimeout(createConfetti, 1000);

});