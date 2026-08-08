/*==================================================
AMRUTHA WEBSITE
TIMELINE.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".memory-card");

    const revealCard = (entries, observer) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                entry.target.style.transition = `all .8s ease ${index * 0.12}s`;

                observer.unobserve(entry.target);

            }

        });

    };

    const observer = new IntersectionObserver(revealCard, {

        threshold: 0.2

    });

    cards.forEach(card => {

        card.style.opacity = "0";

        card.style.transform = "translateY(80px)";

        observer.observe(card);

    });

    /* Hover Tilt */

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 20;

            const rotateY = (x - rect.width / 2) / 20;

            card.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = `
                perspective(900px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0)
            `;

        });

    });

});