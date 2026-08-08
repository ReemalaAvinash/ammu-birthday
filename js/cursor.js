/*=========================================
CUSTOM CURSOR
=========================================*/

const dot=document.querySelector(".cursor-dot");

const ring=document.querySelector(".cursor-ring");

let mouseX=0;
let mouseY=0;

let ringX=0;
let ringY=0;

window.addEventListener("mousemove",(e)=>{

mouseX=e.clientX;
mouseY=e.clientY;

dot.style.left=mouseX+"px";
dot.style.top=mouseY+"px";

});

function animate(){

ringX+=(mouseX-ringX)*0.15;
ringY+=(mouseY-ringY)*0.15;

ring.style.left=ringX+"px";
ring.style.top=ringY+"px";

requestAnimationFrame(animate);

}

animate();

document.querySelectorAll("a,button").forEach(el=>{

el.addEventListener("mouseenter",()=>{

ring.classList.add("cursor-grow");

});

el.addEventListener("mouseleave",()=>{

ring.classList.remove("cursor-grow");

});

});