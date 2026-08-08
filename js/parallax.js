/*=========================================
PARALLAX
=========================================*/

const hero=document.querySelector(".hero");

const puppy=document.querySelector(".puppy");

const panda=document.querySelector(".panda");

const moon=document.querySelector(".moon-card");

hero.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*30;

const y=(e.clientY/window.innerHeight-.5)*30;

puppy.style.transform=`translate(${x}px,${y}px)`;

panda.style.transform=`translate(${-x}px,${-y}px)`;

moon.style.transform=`translate(${x/2}px,${y/2}px) rotate(${x/8}deg)`;

});

hero.addEventListener("mouseleave",()=>{

puppy.style.transform="translate(0,0)";

panda.style.transform="translate(0,0)";

moon.style.transform="rotate(-5deg)";

});