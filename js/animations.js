/*==================================================
AMRUTHA WEBSITE
ANIMATIONS.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");

    const puppy = document.querySelector(".puppy");

    const panda = document.querySelector(".panda");

    const moon = document.querySelector(".moon-card");

    if(hero){

        hero.addEventListener("mousemove",(e)=>{

            const x=(e.clientX/window.innerWidth-.5)*20;

            const y=(e.clientY/window.innerHeight-.5)*20;

            if(puppy){

                puppy.style.transform=

                `translate(${x}px,${y}px)`;

            }

            if(panda){

                panda.style.transform=

                `translate(${-x}px,${-y}px)`;

            }

            if(moon){

                moon.style.transform=

                `translate(${x/2}px,${y/2}px) rotate(${x/8}deg)`;

            }

        });

        hero.addEventListener("mouseleave",()=>{

            if(puppy){

                puppy.style.transform="translate(0,0)";

            }

            if(panda){

                panda.style.transform="translate(0,0)";

            }

            if(moon){

                moon.style.transform="rotate(-5deg)";

            }

        });

    }

    /* Floating Navbar */

    const navbar=document.querySelector(".navbar");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>60){

            navbar.style.padding="0 55px";

            navbar.style.height="76px";

        }

        else{

            navbar.style.padding="0 40px";

            navbar.style.height="82px";

        }

    });

    /* Memory Card Hover */

    document.querySelectorAll(".memory-card").forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.background=

            `radial-gradient(circle at ${x}px ${y}px,
            rgba(255,255,255,.75),
            rgba(255,255,255,.35))`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.background=

            "rgba(255,255,255,.35)";

        });

    });

});